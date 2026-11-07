#!/usr/bin/env python3
"""校验 skill 包：SKILL.md frontmatter、证据卡清单、Markdown 相对链接。"""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
ERRORS: list[str] = []
CHECKS = 0


def check(condition: bool, message: str) -> None:
    global CHECKS
    CHECKS += 1
    if not condition:
        ERRORS.append(message)


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


FRONTMATTER_RE = re.compile(r"\A---\r?\n(.*?)\r?\n---(?:\r?\n|\Z)", re.DOTALL)
LINK_RE = re.compile(r"!?\[[^\]]*\]\(([^)\s]+)")
SKIP_PREFIXES = ("http://", "https://", "mailto:", "#", "data:")


def frontmatter(text: str):
    match = FRONTMATTER_RE.match(text)
    if not match:
        return None
    return match.group(1)


def check_relative_links() -> None:
    for path in sorted(ROOT.rglob("*.md")):
        if ".git" in path.parts:
            continue
        for target in LINK_RE.findall(read(path)):
            if target.startswith(SKIP_PREFIXES):
                continue
            cleaned = unquote(target.split("#", 1)[0])
            if not cleaned:
                continue
            check(
                (path.parent / cleaned).resolve().exists(),
                f"{path.relative_to(ROOT)}: 断链 -> {target}",
            )


def check_skill() -> None:
    skill_dir = ROOT / "skill"
    skill = skill_dir / "SKILL.md"
    check(skill.is_file(), "缺少 skill/SKILL.md")
    if skill.is_file():
        meta = frontmatter(read(skill))
        check(meta is not None, "skill/SKILL.md 缺少 YAML frontmatter")
        if meta:
            check(
                re.search(r"(?m)^name:\s*manhattan-project\s*$", meta) is not None,
                "skill/SKILL.md frontmatter 缺少 name: manhattan-project",
            )
            check(
                re.search(r"(?m)^description:\s*\S", meta) is not None,
                "skill/SKILL.md frontmatter 缺少 description",
            )
    for name in ("templates.md", "operators.md", "examples.md"):
        check((skill_dir / name).is_file(), f"缺少 skill/{name}")
    check(
        len(read(skill).splitlines()) <= 400,
        "skill/SKILL.md 超过 400 行，考虑拆分到 references",
    )


def check_cards() -> None:
    cards = sorted((ROOT / "corpus" / "cards").glob("*.md"))
    check(len(cards) == 23, f"证据卡数量应为 23，实际 {len(cards)}")
    ids: list[str] = []
    for card in cards:
        meta = frontmatter(read(card))
        if meta is None:
            ERRORS.append(f"{card.name}: 缺少 frontmatter")
            continue
        for field in ("id", "case", "operator", "confidence", "evidence"):
            check(
                re.search(rf"(?m)^{field}:", meta) is not None,
                f"{card.name}: frontmatter 缺少 {field}",
            )
        confidence = re.search(r"(?m)^confidence:\s*(\w+)", meta)
        if confidence:
            check(
                confidence.group(1) in {"high", "medium", "low"},
                f"{card.name}: confidence 取值非法 -> {confidence.group(1)}",
            )
        card_id = re.search(r"(?m)^id:\s*(\S+)", meta)
        if card_id:
            ids.append(card_id.group(1))
    check(len(ids) == len(set(ids)), "证据卡 id 存在重复")


def check_layout() -> None:
    for path in (
        "README.md",
        "LICENSE",
        "corpus/index.md",
        "corpus/sources.md",
        "docs/origin.md",
        "docs/evidence.md",
        "docs/design.md",
    ):
        check((ROOT / path).is_file(), f"缺少 {path}")
    canvases = list((ROOT / "docs" / "canvases").glob("*.canvas.tsx"))
    check(len(canvases) == 7, f"docs/canvases 数量应为 7，实际 {len(canvases)}")


def check_separation() -> None:
    """skill/ 只放工程实践内容；来历、制作过程等背景档案应放在 docs/。"""
    banned = ("缘起", "制作路线", "打包日期")
    for path in sorted((ROOT / "skill").glob("*.md")):
        text = read(path)
        for word in banned:
            check(
                word not in text,
                f"{path.relative_to(ROOT)} 含背景档案内容「{word}」，应放到 docs/",
            )


def main() -> int:
    check_layout()
    check_separation()
    check_skill()
    check_cards()
    check_relative_links()
    print(f"检查项: {CHECKS}")
    if ERRORS:
        print(f"失败 {len(ERRORS)} 项:")
        for error in ERRORS:
            print(f"  - {error}")
        return 1
    print("全部通过")
    return 0


if __name__ == "__main__":
    sys.exit(main())

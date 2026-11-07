import {
  Callout,
  Grid,
  H1,
  H2,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useCanvasState,
} from "cursor/canvas";

type Grade = "S" | "A" | "B" | "C" | "D";
type Tab = "method" | "S" | "A" | "B" | "C" | "cut";

type RowT = {
  name: string;
  t: number;
  r: number;
  grade: Grade;
  thick: string;
  trust: string;
  action: string;
};

const ALL: RowT[] = [
  {
    name: "曼哈顿工程",
    t: 5,
    r: 5,
    grade: "S",
    thick: "NARA RG 326/227、M1392、DOE OpenNet、Hewlett 带脚注官方史",
    trust: "多全宗可对读；Lenfle 等已有档案级争论",
    action: "主证据。第一波先抽卡。",
  },
  {
    name: "阿波罗",
    t: 5,
    r: 5,
    grade: "S",
    thick: "NASA SP 丛书、HQ/中心/NARA RG 255 三分存，finding aid 完整",
    trust: "合同、配置控制、事故调查均可独立核对",
    action: "主证据。第一波。",
  },
  {
    name: "哈勃故障调查与修复",
    t: 4,
    r: 5,
    grade: "S",
    thick: "NASA 调查报告、任务史、国会材料公开",
    trust: "失败原因被第三方钉死，修复作为二次工程可核验",
    action: "主证据：集成失败与二次 Trinity。",
  },
  {
    name: "航天飞机事故调查（Rogers / CAIB）",
    t: 5,
    r: 5,
    grade: "S",
    thick: "两套国家级调查、听证、工程备忘大量公开",
    trust: "极高；但对象是运行期安全门被侵蚀，不是立项探索",
    action: "主证据作反例，不当事成功模板。",
  },
  {
    name: "人类基因组计划",
    t: 4,
    r: 5,
    grade: "S",
    thick: "NIH/Wellcome/DOE 政策文件、测序中心数据、Bermuda 原则",
    trust: "公私争论全程公开，Celera 路径可对照",
    action: "主证据：数据工厂与双路径。",
  },
  {
    name: "巴拿马运河（美建）",
    t: 5,
    r: 4,
    grade: "S",
    thick: "NARA 极厚，卫生与工程记录完整",
    trust: "过程可核验；技术不确定低于核/航天",
    action: "史料过关。只用于「失败后重建」「基础设施优先」。",
  },
  {
    name: "ARPANET / RFC",
    t: 4,
    r: 4,
    grade: "A",
    thick: "RFC 即原始接口档案；BBN/DARPA 文件部分公开",
    trust: "协议层极可靠；计划办公室内部厚度不如曼哈顿",
    action: "第一波。接口契约主证据。",
  },
  {
    name: "MIT 辐射实验室",
    t: 4,
    r: 4,
    grade: "A",
    thick: "OSRD RG 227、MIT 档案、Guerlac/Baxter 官方科学史",
    trust: "与曼哈顿同属 OSRD，可交叉验证",
    action: "第一波。实验室→量产对照。",
  },
  {
    name: "Tube Alloys / MAUD",
    t: 4,
    r: 4,
    grade: "A",
    thick: "英国国家档案馆 CAB 等，与 Bush-Conant 对读",
    trust: "英美各有档案，合并过程可核验",
    action: "第一波。伙伴协议与不对等合并。",
  },
  {
    name: "B-29",
    t: 4,
    r: 4,
    grade: "A",
    thick: "陆军航空队官方战史、生产与改型记录",
    trust: "生产工程可靠；科学探索弱于曼哈顿",
    action: "第一波可选。多厂生产与 Silverplate 接口。",
  },
  {
    name: "Corona 侦察卫星",
    t: 4,
    r: 4,
    grade: "A",
    thick: "1995 起 NRO/CIA/NARA 解密，含管理史卷",
    trust: "早期失败与系统成功有档可查；仍有删节",
    action: "升入第一波。杀线与允许早期失败。",
  },
  {
    name: "阿波罗制导计算机",
    t: 4,
    r: 4,
    grade: "A",
    thick: "MIT 仪表实验室档案 + NASA",
    trust: "软件冻结、优先级冲突有原始文件",
    action: "并入阿波罗抽卡，不另开案例。",
  },
  {
    name: "旅行者号 / 深空网",
    t: 4,
    r: 4,
    grade: "A",
    thick: "JPL/NASA History 厚",
    trust: "窗口期与地面网可核验",
    action: "第二波。截止日期与地面工厂。",
  },
  {
    name: "JWST",
    t: 4,
    r: 4,
    grade: "A",
    thick: "GAO、独立审查、NASA 重新基线文件极公开",
    trust: "成本与试验门可靠；早期探索期内部较薄",
    action: "第二波。超支下的试验门。",
  },
  {
    name: "国际空间站",
    t: 4,
    r: 4,
    grade: "A",
    thick: "多边备忘录、ICD、NASA 公开库",
    trust: "接口文件本身即证据",
    action: "第二波。伙伴协议极端样本。",
  },
  {
    name: "LHC",
    t: 4,
    r: 4,
    grade: "A",
    thick: "CERN CDS 近乎全公开",
    trust: "2008 事故与修复有技术报告",
    action: "第二波。国际大科学治理。",
  },
  {
    name: "NSFNET",
    t: 4,
    r: 4,
    grade: "A",
    thick: "NSF 合同与 RFC 延续 ARPANET",
    trust: "骨干升级路径清楚",
    action: "并入 ARPANET 谱系，不单独立项深挖。",
  },
  {
    name: "TVA",
    t: 4,
    r: 4,
    grade: "A",
    thick: "NARA 全宗完整",
    trust: "高；技术不确定低",
    action: "史料过关。只作「电力工厂条件」。",
  },
  {
    name: "海峡隧道",
    t: 4,
    r: 5,
    grade: "A",
    thick: "两国公共调查、财务披露厚",
    trust: "超支与交付可钉死",
    action: "有保留成功：技术 Trinity ≠ 项目成功。",
  },
  {
    name: "波士顿 Big Dig",
    t: 4,
    r: 5,
    grade: "A",
    thick: "审计、诉讼、国会材料极厚",
    trust: "失败过程比成功宣传更可靠",
    action: "失败对照，不进成功模板。",
  },
  {
    name: "自由轮",
    t: 4,
    r: 4,
    grade: "A",
    thick: "战时生产统计完整",
    trust: "学习曲线数据硬",
    action: "厚度够，机制过窄（无可预见的科学分叉）。降为旁证。",
  },
  {
    name: "州际公路",
    t: 5,
    r: 4,
    grade: "A",
    thick: "联邦—州档案极厚",
    trust: "高；主问题是政治与征地",
    action: "厚度够，技术不确定低。不进探索型算子。",
  },
  {
    name: "北极星",
    t: 3,
    r: 4,
    grade: "A",
    thick: "Sapolsky 基于访谈与内部材料；海军原件数字化少",
    trust: "对 PERT 神话的纠正被后续研究重复",
    action: "第一波对照必读，但卡片须标 T=3，不与曼哈顿等厚。",
  },
  {
    name: "阿特拉斯 / Schriever 并发",
    t: 3,
    r: 4,
    grade: "B",
    thick: "Johnson 等用过空军档案；公开扫描少于阿波罗",
    trust: "系统管理起源的史学质量高",
    action: "第二波。可并入阿波罗前史。",
  },
  {
    name: "SAGE",
    t: 3,
    r: 4,
    grade: "B",
    thick: "林肯实验室 / MITRE / Hughes 引用档案",
    trust: "组织创新可靠；「军事过时」有共识",
    action: "第二波。",
  },
  {
    name: "青霉素放大",
    t: 3,
    r: 4,
    grade: "B",
    thick: "WPB、NRRL、CMR 记录 + 医学史论文",
    trust: "发酵 vs 合成双路径有文献",
    action: "第二波。生命科学双路径。",
  },
  {
    name: "合成橡胶 GR-S",
    t: 3,
    r: 4,
    grade: "B",
    thick: "战时橡胶局、ACS landmark、公司档案部分",
    trust: "产量数字硬；决策细节中等",
    action: "第二波。强制技术共享。",
  },
  {
    name: "Tizard 使团",
    t: 3,
    r: 4,
    grade: "B",
    thick: "英美档案都有，但体量小",
    trust: "高，事件短",
    action: "并入辐射实验室/伙伴协议，不单列深挖。",
  },
  {
    name: "Shippingport",
    t: 3,
    r: 4,
    grade: "B",
    thick: "AEC 官方史后续卷",
    trust: "堆型与并网可核验",
    action: "第二波。原型→电网。",
  },
  {
    name: "荷兰三角洲工程",
    t: 3,
    r: 4,
    grade: "B",
    thick: "Rijkswaterstaat 工程档案",
    trust: "分期交付清楚",
    action: "第二波可选。",
  },
  {
    name: "苏联原子计划",
    t: 3,
    r: 4,
    grade: "B",
    thick: "Holloway 等用俄档案；公开扫描不如美国",
    trust: "政治—科学组织有独立史学；工艺细节仍缺",
    action: "第二波对照。情报路径不可当模板。",
  },
  {
    name: "协和飞机",
    t: 3,
    r: 4,
    grade: "B",
    thick: "英法政府与公司档案部分公开",
    trust: "技术成功/商业失败分得清",
    action: "有条件成功的第二波。",
  },
  {
    name: "伽利略导航",
    t: 3,
    r: 4,
    grade: "B",
    thick: "欧盟审计院报告厚",
    trust: "治理失败与重启可核验",
    action: "第二波。多国治理。",
  },
  {
    name: "近炸引信",
    t: 3,
    r: 3,
    grade: "B",
    thick: "OSRD Section T、APL 史",
    trust: "量产与保密叙事需对读",
    action: "第二波末。",
  },
  {
    name: "核海军 / 鹦鹉螺",
    t: 3,
    r: 3,
    grade: "B",
    thick: "海军史 + 近年 USNA Rickover Papers（约 250 盒，尚未充分研究）",
    trust: "个人崇拜与档案之间有落差",
    action: "等 Papers 被更多引用后再升格。现作第二波。",
  },
  {
    name: "民兵导弹",
    t: 3,
    r: 3,
    grade: "B",
    thick: "空军导弹史，薄于阿特拉斯/阿波罗",
    trust: "标准化叙事为主",
    action: "并入导弹谱系旁证。",
  },
  {
    name: "GPS",
    t: 3,
    r: 3,
    grade: "B",
    thick: "军方史部分仍分类",
    trust: "星座接口公开，早期决策一般",
    action: "第二波。三段接口。",
  },
  {
    name: "法国核力量 / 核电",
    t: 3,
    r: 3,
    grade: "B",
    thick: "CEA/EDF 史、外交档案；法文为主",
    trust: "标准化复制较清楚，早期军用较糊",
    action: "有法语能力再深挖。",
  },
  {
    name: "新干线东海道",
    t: 3,
    r: 3,
    grade: "B",
    thick: "国铁史、国会与交通省材料",
    trust: "工期与系统范围清楚；内部争论中等",
    action: "第二波。截止日期锁定范围。",
  },
  {
    name: "斯普特尼克 / 东方号",
    t: 3,
    r: 3,
    grade: "B",
    thick: "Siddiqi 等用俄档案，公开原件少",
    trust: "首席设计师制有史学，细节难复核",
    action: "对照用，不主抽。",
  },
  {
    name: "IBM OS/360",
    t: 2,
    r: 4,
    grade: "C",
    thick: "公开原件少；IBM 档案受限。几乎靠 Brooks 一书",
    trust: "当事人分析质量高，但是单源",
    action: "降级。可引 Brooks 限制并行，不可单独支撑工地模型。须有曼哈顿/阿波罗主证。",
  },
  {
    name: "两弹一星",
    t: 2,
    r: 2,
    grade: "C",
    thick: "《当代中国的核工业》、1999 回忆集、公开年表；中央专委记录基本未开放",
    trust: "大事记可核；一线/二线等组织细节多来自回忆，难以独立证伪",
    action: "降级。只作「缩短战线」旁证，每条须另有 S/A 主证。不进第一波。",
  },
  {
    name: "神舟 / 北斗 / 嫦娥",
    t: 2,
    r: 2,
    grade: "C",
    thick: "白皮书、工程总结、新闻与官方史",
    trust: "阶段目标公开，决策与杀线过程不透明",
    action: "本轮不抽独立算子。以后有档案再升。",
  },
  {
    name: "中国高铁成网",
    t: 2,
    r: 2,
    grade: "C",
    thick: "规划与验收材料多，过程档案少",
    trust: "宣传与工程报道难分",
    action: "不进证据池。",
  },
  {
    name: "Skunk Works",
    t: 2,
    r: 2,
    grade: "C",
    thick: "凯利 14 条、公司史、传记",
    trust: "传奇浓度高，合同原件少",
    action: "只作「反曼哈顿小团队」假说，须另证。",
  },
  {
    name: "波音 747",
    t: 2,
    r: 3,
    grade: "C",
    thick: "公司史、FAA 认证；内部决策薄",
    trust: "认证记录硬，组织过程中等",
    action: "旁证。",
  },
  {
    name: "SEMATECH",
    t: 2,
    r: 3,
    grade: "C",
    thick: "国会听证为主，联盟内部档案少",
    trust: "政策层可核，工厂层弱",
    action: "旁证。",
  },
  {
    name: "三峡 / 港珠澳 / FAST",
    t: 2,
    r: 2,
    grade: "C",
    thick: "工程报道与官方验收",
    trust: "独立决策档案不足",
    action: "不进组织算子。港珠澳法规接口可作弱旁证。",
  },
  {
    name: "Iridium",
    t: 2,
    r: 3,
    grade: "C",
    thick: "商业新闻、FCC、破产文件",
    trust: "财务失败硬，技术组织一般",
    action: "旁证：技术就绪仍可商业死亡。",
  },
  {
    name: "两弹一艇·核潜艇",
    t: 1,
    r: 2,
    grade: "D",
    thick: "公开过程史料很少",
    trust: "不足以支撑杀线细节",
    action: "本轮不入库。",
  },
  {
    name: "Operation Warp Speed",
    t: 2,
    r: 2,
    grade: "D",
    thick: "新闻与部分 FOIA，档案未冷",
    trust: "政治噪声大，尚未形成稳定史学",
    action: "机制极像双路径，但可靠程度不够。冻结 5–10 年。",
  },
];

function of(g: Grade): RowT[] {
  return ALL.filter((x) => x.grade === g);
}

export default function ArchiveGradeScreen() {
  const [tab, setTab] = useCanvasState<Tab>("tab", "method");
  const s = of("S").length;
  const a = of("A").length;
  const b = of("B").length;
  const c = of("C").length;
  const d = of("D").length;

  return (
    <Stack gap={24}>
      <Stack gap={8}>
        <H1>按史料厚度与可靠程度筛选</H1>
        <Text tone="secondary">
          本轮只评「公开组织档案够不够、能不能独立核对」，不评工程是否著名。因此两弹一星、OS/360
          从核心名单降级——不是工程不重要，是公开史料撑不住独立算子。
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value={String(s)} label="S：可作主证据" />
        <Stat value={String(a)} label="A：可进第一波抽卡" />
        <Stat value={String(b)} label="B：第二波" />
        <Stat value={`${c + d}`} label="C/D：旁证或本轮不入库" />
      </Grid>

      <Row gap={8} wrap>
        <Pill active={tab === "method"} onClick={() => setTab("method")}>
          评分规则
        </Pill>
        <Pill active={tab === "S"} onClick={() => setTab("S")}>
          S 档
        </Pill>
        <Pill active={tab === "A"} onClick={() => setTab("A")}>
          A 档
        </Pill>
        <Pill active={tab === "B"} onClick={() => setTab("B")}>
          B 档
        </Pill>
        <Pill active={tab === "C"} onClick={() => setTab("C")}>
          C/D
        </Pill>
        <Pill active={tab === "cut"} onClick={() => setTab("cut")}>
          筛选结论
        </Pill>
      </Row>

      {tab === "method" ? <Method /> : null}
      {tab === "S" ? <GradeTable rows={of("S")} title="S 档：厚度与可靠都高，可作主证据" /> : null}
      {tab === "A" ? (
        <GradeTable rows={of("A")} title="A 档：可抽卡。北极星因对照价值留在第一波，但 T=3 须在卡片上标明" />
      ) : null}
      {tab === "B" ? <GradeTable rows={of("B")} title="B 档：第二波。有专著或官方史，公开原件不如 S/A" /> : null}
      {tab === "C" ? (
        <Stack gap={16}>
          <GradeTable rows={of("C")} title="C 档：单源或官方叙事主导，只能给 S/A 当旁证" />
          <GradeTable rows={of("D")} title="D 档：本轮不入库" />
        </Stack>
      ) : null}
      {tab === "cut" ? <Cut /> : null}
    </Stack>
  );
}

function Method() {
  return (
    <Stack gap={20}>
      <H2>两轴，不合成为一句「好案例」</H2>
      <Table
        headers={["轴", "5", "4", "3", "2", "1"]}
        rows={[
          [
            "厚度 T：公开组织档案的体量",
            "多全宗 + 带脚注官方史 + 可检索扫描",
            "完整官方史或大规模解密，finding aid 清楚",
            "一部档案级专著 + 部分原件",
            "官方综述、回忆录、白皮书为主",
            "几乎没有可核验过程记录",
          ],
          [
            "可靠 R：组织命题能否被独立证伪",
            "多家档案对读，史学有争论",
            "官方记录可核对，回忆可被脚注约束",
            "一家主导叙事，但作者用过原件",
            "官方成功叙事难以外部检验",
            "过近、过密或单源神话",
          ],
        ]}
      />
      <Table
        headers={["综合档", "规则", "对语料库的含义"]}
        rows={[
          ["S", "T≥4 且 R≥5，或 T=5 且 R≥4", "可以单独支撑 skill 条文"],
          ["A", "T≥4 且 R≥4，或（T=3 且 R=4 且有明确对照价值）", "可抽卡；T=3 的卡片必须标厚度"],
          ["B", "T=3 且 R≥3", "第二波，不阻塞开工"],
          ["C", "T=2", "禁止单独支撑算子"],
          ["D", "T=1，或档案未冷（R≤2 且过近）", "本轮不入库"],
        ]}
      />
      <Callout tone="warning" title="刻意分开的两件事">
        厚度过关不等于机制匹配。州际公路、自由轮、TVA
        档案很厚，但技术分叉弱，稍后用机制筛会再砍一刀。本表先只做史料筛，避免「有用」和「有档」混在一起。
      </Callout>
    </Stack>
  );
}

function GradeTable({ title, rows }: { title: string; rows: RowT[] }) {
  return (
    <Stack gap={8}>
      <H2>{title}</H2>
      <Table
        headers={["案例", "T", "R", "档", "厚度依据", "可靠依据", "处置"]}
        columnAlign={["left", "right", "right", "left", "left", "left", "left"]}
        rows={rows.map((x) => [
          x.name,
          String(x.t),
          String(x.r),
          x.grade,
          x.thick,
          x.trust,
          x.action,
        ])}
      />
    </Stack>
  );
}

function Cut() {
  return (
    <Stack gap={20}>
      <H2>第一波只保留史料过关的案例</H2>
      <Table
        headers={["保留", "角色", "从原「核心 9 项」的变化"]}
        rows={[
          ["曼哈顿", "主证据：并行、工地、接口、试验/发布", "不变"],
          ["阿波罗", "主证据：系统管理、承包、配置", "不变"],
          ["辐射实验室", "对照：OSRD 另一条量产路径", "升入第一波（原为扩展）"],
          ["ARPANET", "主证据：接口契约", "不变"],
          ["人类基因组", "主证据：数据工厂、公私双路径", "不变"],
          ["Tube Alloys", "伙伴协议、合并", "从扩展升入，体量小于曼哈顿"],
          ["Corona", "早期失败与杀线", "从扩展升入（解密厚度够）"],
          ["北极星", "对照：控制神话", "保留，但 T=3，卡片降权"],
          ["哈勃修复 / 航天飞机调查", "集成失败与安全门反例", "新增，不当成功模板"],
        ]}
      />
      <H2>从第一波拿下</H2>
      <Table
        headers={["案例", "原因", "以后怎么用"]}
        rowTone={["warning", "warning", "warning"]}
        rows={[
          [
            "两弹一星",
            "T2/R2：公开的是回忆与官方综述，专委记录未开放",
            "C 档旁证。缩短战线等命题须由曼哈顿杀线主证带着",
          ],
          [
            "OS/360",
            "T2/R4：几乎单靠 Brooks，IBM 原件不公开",
            "C 档。只用来限制「软件无限并行」，不建工地图",
          ],
          [
            "阿特拉斯",
            "T3，公开扫描薄于阿波罗",
            "并入阿波罗前史，第二波",
          ],
        ]}
      />
      <Callout tone="success" title="可以开始填卡的集合">
        S+A 里用于探索型组织的最小集：曼哈顿、阿波罗、辐射实验室、ARPANET、人类基因组、北极星（降权对照）、Tube
        Alloys、Corona。其余 A
        档（B-29、JWST、ISS、LHC、巴拿马、TVA、公路、自由轮）史料合格，是否采用留给下一刀「机制匹配」。
      </Callout>
      <Text size="small" tone="tertiary">
        评分依据公开 finding aid、官方史与解密项目，不是馆藏绝对数量。未开放的内部档案不计入厚度。中国案例的大事记可靠、过程细节不可独立证伪，故 R
        低于美国/欧洲同规模工程——这是档案制度差异，不是工程成败判断。
      </Text>
    </Stack>
  );
}

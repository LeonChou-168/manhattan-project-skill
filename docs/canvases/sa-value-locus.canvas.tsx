import {
  Callout,
  Grid,
  H1,
  H2,
  Link,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useCanvasState,
} from "cursor/canvas";

type Tab = "rule" | "osrd" | "nasa" | "netg" | "other";

export default function ValueLocus() {
  const [tab, setTab] = useCanvasState<Tab>("tab", "rule");

  return (
    <Stack gap={24}>
      <Stack gap={8}>
        <H1>S/A 资料：可参考价值在哪一截</H1>
        <Text tone="secondary">
          价值位置 = 能直接抽出算子的章节、卷、文件夹或条款。同一文献里大量技术工艺、人物传记、外交辞令应跳过。抽卡只从「高」栏进入，从「中」栏补反例，「低」栏不读。
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value="高" label="可独立支撑一条算子" />
        <Stat value="中" label="补背景或反例，不单列条文" />
        <Stat value="低" label="工艺/年表/宣传，跳过" />
        <Stat value="先读" label="Hewlett 3–9、CAIB 卷1第7章、Sapolsky 第4章" />
      </Grid>

      <Row gap={8} wrap>
        <Pill active={tab === "rule"} onClick={() => setTab("rule")}>
          怎么标
        </Pill>
        <Pill active={tab === "osrd"} onClick={() => setTab("osrd")}>
          OSRD / 曼哈顿谱系
        </Pill>
        <Pill active={tab === "nasa"} onClick={() => setTab("nasa")}>
          NASA 谱系
        </Pill>
        <Pill active={tab === "netg"} onClick={() => setTab("netg")}>
          网络 / 基因组
        </Pill>
        <Pill active={tab === "other"} onClick={() => setTab("other")}>
          其余 A 档
        </Pill>
      </Row>

      {tab === "rule" ? <Rule /> : null}
      {tab === "osrd" ? <Osrd /> : null}
      {tab === "nasa" ? <Nasa /> : null}
      {tab === "netg" ? <Netg /> : null}
      {tab === "other" ? <Other /> : null}
    </Stack>
  );
}

function Rule() {
  return (
    <Stack gap={20}>
      <Callout tone="warning" title="不要从封面读到封底">
        Hewlett 16 章里，组织算子集中在第 3–9 章和第 10–11 章的委员会部分。辐射实验室 28 卷技术丛书几乎整套为低价值。RFC
        全集里真正当「装料契约」的是少数协议与交接 RFC，不是每一份 Host 备忘。
      </Callout>
      <H2>价值判定</H2>
      <Table
        headers={["标", "出现什么就停下来摘", "出现什么就翻页"]}
        rows={[
          [
            "高",
            "并行/杀线/接口规格/试验被忽略/拍板权/发布与技术就绪分开",
            "—",
          ],
          [
            "中",
            "成本表、选址理由、承包商名单、时间表——用来填工地图",
            "单独的人物轶事",
          ],
          [
            "低",
            "—",
            "核物理推导、光学公式、导弹气动、测序化学、外交发言、胜利叙事",
          ],
        ]}
      />
      <H2>建议的阅读顺序（只碰高价值点）</H2>
      <Table
        headers={["序", "打开哪里", "抽出哪条算子"]}
        rows={[
          ["1", "Lenfle & Loch《Lost Roots》§2.2 曼哈顿 vs §2.2.2 北极星", "先定问题：探索≠控制"],
          ["2", "Hewlett 第3–4章（选路与承诺）", "双路径、何时转陆军"],
          ["3", "Hewlett 第5–7章（铀厂串联、钚、洛斯阿拉莫斯 1944 危机）", "先并行后串联、杀枪式钚、Trinity"],
          ["4", "Hewlett 第10–11章 Interim Committee 与 Alamogordo 并列", "试验门≠发布门"],
          ["5", "Sapolsky 第4章 PERT myth", "工具的对外功能"],
          ["6", "SP-4205 第2–3、7、9章", "承包、轨道模式杀线、火灾后重建"],
          ["7", "CAIB 卷1 第7章；哈勃失败报告中「指示器被折扣」段", "安全门/试验信号被组织吃掉"],
          ["8", "Bermuda 原则原文；RFC 1 与 TCP/IP 标志日材料", "发布=开放数据；接口=产品"],
        ]}
      />
    </Stack>
  );
}

function Osrd() {
  return (
    <Stack gap={20}>
      <H2>Hewlett & Anderson《The New World》— 价值在章节，不在全书</H2>
      <Table
        headers={["位置", "价值", "抽什么", "跳过什么"]}
        rows={[
          ["第3章 Exploring the Routes", "高", "五种工艺同时建中试+全速工厂的决策（1942-05-23 会）", "离心/扩散装置原理"],
          ["第4章 Commitment", "高", "1942-12 承诺全力生产；科研→陆军交接", "k 值实验细节"],
          ["第5章 Uranium 235", "高", "Y-12 / K-25 / S-50 从并行到串联；热扩散是「最后一张牌」", "calutron 电磁公式"],
          ["第6章 Plutonium", "高", "汉福德选址、杜邦合同、1944 氙中毒危机与调度", "石墨堆物理"],
          ["第7章 A Laboratory Set on a Hill", "高", "Y 计划组织；枪式 vs 内爆；1944 夏危机把内爆升为第一优先级", "炸药化学"],
          ["第8章 Uneasy Partnership", "高", "英美中断与魁北克恢复——伙伴协议", "矿石外交辞令"],
          ["第9章 Homestretch", "中", "拨款隐瞒、工厂投产、成本线索", "矿石采购流水账"],
          ["第10–11章 战后筹划 + Terrible Swift Sword", "高", "Interim Committee、科学顾问组、Alamogordo 与对日使用分列", "战场叙事、伤亡争论（不作工程算子）"],
          ["第1–2、12–16章", "低/中", "最多取 AEC 交接作「收口」", "立法斗争、巴鲁克计划全文"],
          ["书内成本表（约第473页附近对应节）", "中", "84% 工厂开支——基础设施占比", "通胀换算争论"],
        ]}
      />
      <Text size="small">
        PDF：
        <Link href="https://www.energy.gov/documents/hewlettandandersonnewworldnobookmarkspdf">
          energy.gov Hewlett
        </Link>
      </Text>

      <H2>Bush-Conant 缩微 M1392 — 价值在 Section I 的文件夹</H2>
      <Table
        headers={["位置", "价值", "抽什么"]}
        rows={[
          ["Section I 文件夹 1–2", "高", "科南特自写 S-1 简史（1941-05 至 1942-06）+ 他所列「重要文件」清单——等于官方索引"],
          ["文件夹 8–12 英美关系", "高", "与 Tube Alloys / 魁北克对读"],
          ["文件夹 13–21 S-1 行政", "高", "合同、优先权、转交陆军"],
          ["文件夹 3、22", "中", "OSRD 未完成史草稿；战后 NSF 构想"],
          ["Section II DSM 字母主题", "中", "按需查承包商，不要通读"],
          ["技术报告附件", "低", "不摘工艺参数"],
        ]}
      />

      <H2>工区史 / OpenNet / 口述</H2>
      <Table
        headers={["资料", "高价值点", "低价值"]}
        rows={[
          [
            "Manhattan District History",
            "Book I General（指挥与保密行政）；各工地卷的「组织、合同、进度」章。Clinton 中央设施卷只看「为何必须建城」",
            "蓝图、分析化学、健康物理表格",
          ],
          [
            "OpenNet 交互史",
            "Events 里工厂调度与 1944–45 节点；Processes 只看「三种浓缩如何串联」的组织叙述；Places 三地职责",
            "Science 子站的裂变科普",
          ],
          [
            "Voices 口述",
            "格罗夫斯/奥本海默谈分工与内爆危机的段落",
            "生活、通勤、校园回忆",
          ],
        ]}
      />

      <H2>Tube Alloys 与辐射实验室</H2>
      <Table
        headers={["资料", "高价值点", "低价值"]}
        rows={[
          [
            "MAUD 报告结论页 + Frisch-Peierls 备忘录",
            "「可在战时做成」如何改变美国承诺",
            "截面估算全文",
          ],
          [
            "魁北克协定正文（1943）",
            "否决权、信息交换、不独立对第三方使用",
            "后续外交解释文章",
          ],
          [
            "Baxter《Scientists Against Time》",
            "OSRD 如何把课题交给军方量产的章节（雷达与核的对照）",
            "各 Division 成果名录",
          ],
          [
            "Guerlac 雷达史",
            "实验室与 Raytheon/Philco 交接、H2X 赶工",
            "28 卷 Radiation Laboratory Series 技术卷",
          ],
        ]}
      />
    </Stack>
  );
}

function Nasa() {
  return (
    <Stack gap={20}>
      <H2>阿波罗 SP-4205《Chariots for Apollo》</H2>
      <Table
        headers={["章", "价值", "抽什么"]}
        rows={[
          ["第2章 Project Planning and Contracting", "高", "合同如何切模块=工地接口"],
          ["第3章 Contending Modes", "高", "直接上升 / 地球轨道交会 / 月球轨道交会的杀线"],
          ["第7章 Searching for Order", "高", "配置控制、计划办公室整顿"],
          ["第9章 Tragedy and Recovery", "高", "Apollo 1 后的冻结与重建=试验门失败后的组织反应"],
          ["第4–6、8章 舱体设计", "中", "只取接口变更广播，不取结构细节"],
          ["第10–14章 飞行叙事", "低", "除非要「截止日期如何压缩范围」"],
        ]}
      />
      <Text size="small">
        目录：
        <Link href="https://www.apolloproject.com/sp-4205/contents.htm">SP-4205 contents</Link>
      </Text>
      <Table
        headers={["关联资料", "高价值点"]}
        rows={[
          ["SP-4206 Stages to Saturn", "多级承包与仪器单元接口，不读发动机循环"],
          ["Johnson《Secret of Apollo》并发→系统管理两章", "空军方法迁入 NASA 的转折页"],
          ["MIT IL / AGC 材料", "软件优先级争夺、内存冻结——概念完整性 vs 并行"],
        ]}
      />

      <H2>哈勃光学失败报告（Allen 委员会）</H2>
      <Table
        headers={["位置", "价值", "抽什么"]}
        rows={[
          [
            "主结论：主镜形状错误来自反射零位校正器间距 1.3 mm",
            "中",
            "技术根因，一句话带过",
          ],
          [
            "「逆零位校正器与第二套校正器都显示了误差，当时被当成自身有问题而折扣掉」",
            "高",
            "试验信号被组织否定=Trinity 被跳过。这是全文最有用的一段",
          ],
          [
            "SRM&QA / 不合格品流程附录",
            "高",
            "质量门为何没有否决权",
          ],
          ["光学公式与镜面检测曲线", "低", "不摘"],
        ]}
      />
      <Text size="small">
        <Link href="https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19910003124.pdf">
          NTRS 19910003124
        </Link>
      </Text>

      <H2>CAIB 卷1 — 价值几乎全在组织章</H2>
      <Table
        headers={["位置", "价值", "抽什么"]}
        rows={[
          ["卷1 第7章 Organizational Causes", "高", "过去成功代替试验；安全信息上不去；非正式指挥链"],
          ["卷1 开篇组织原因段落（文化、进度、把研发当运营）", "高", "发布/运行门被进度侵蚀的定义句"],
          ["第7.3 节对照其他高风险组织", "中", "可作对照，不照搬"],
          ["泡沫物理、残骸搜救、第2–5章", "低", "不抽工程算子"],
          ["卷2–6 附录与听证", "低", "除非核某一条第7章脚注"],
        ]}
      />
      <Text size="small">
        分章：
        <Link href="https://govinfo.library.unt.edu/caib/news/report/volume1/default.html">
          CAIB Vol.1
        </Link>
        {" · "}
        <Link href="https://www.globalsecurity.org/space/library/report/2003/caib-report_vol1_chapter7.pdf">
          Chapter 7 PDF
        </Link>
      </Text>
      <Text size="small" tone="secondary">
        Rogers 委员会（挑战者）：读组织/决策与发射压力章节 + 费曼附录；跳过密封圈材料学。与 CAIB 第7章对读，看同一套安全门十年后是否被修复。
      </Text>
    </Stack>
  );
}

function Netg() {
  return (
    <Stack gap={20}>
      <H2>ARPANET / RFC — 价值在少数协议，不在全集</H2>
      <Table
        headers={["位置", "价值", "抽什么"]}
        rows={[
          ["RFC 1 Host Software（Crocker）", "高", "接口文档即协作产品的起点"],
          ["NCP → TCP/IP 标志日（1983-01-01）相关 RFC/通告", "高", "装料格式强制切换=串联替代并行"],
          ["BBN IMP 合同与首四节点连通记录", "高", "多承包商、节点=工地、IMP=接口设备"],
          ["RFC 675 / 791 等协议正文", "中", "只确认「契约足够精确」；不学协议栈"],
          ["其余数千份 RFC", "低", "不进语料库"],
        ]}
      />

      <H2>NSFNET</H2>
      <Table
        headers={["位置", "价值"]}
        rows={[
          ["Merit–IBM–MCI 骨干运营安排、区域网接入政策", "高：产线化"],
          ["1995 骨干私有化 / CIX", "中：收口与发布"],
          ["流量统计年报", "低"],
        ]}
      />

      <H2>人类基因组 — 价值在数据政策和对冲，不在碱基</H2>
      <Table
        headers={["位置", "价值", "抽什么"]}
        rows={[
          [
            "1996/1997 百慕大原则（24 小时释放）",
            "高",
            "开放数据=发布门；比测序技术更可迁移",
          ],
          [
            "五大中心收口（Sanger、Whitehead、WashU、Baylor、JGI）",
            "高",
            "产线合并=杀线后的串联",
          ],
          [
            "Celera 鸟枪法 vs consortium 分层测序的同期公开争论",
            "高",
            "外部双路径；不要写成内部工地",
          ],
          [
            "模式生物先测完再上人类",
            "高",
            "先小目标物再大目标物=降低不可预见性",
          ],
          ["2001/2003 序列论文本身", "低", "不读基因组注释"],
        ]}
      />
      <Text size="small">
        <Link href="https://www.genome.gov/about-genomics/educational-resources/fact-sheets/human-genome-project">
          NHGRI 事实页（含百慕大会）
        </Link>
      </Text>
    </Stack>
  );
}

function Other() {
  return (
    <Stack gap={20}>
      <H2>北极星 — 几乎只读两章</H2>
      <Table
        headers={["Sapolsky 1972", "价值", "抽什么"]}
        rows={[
          ["第4章 PERT and the Myth of Managerial Effectiveness", "高", "PERT 是对外挡箭牌，不是技术成功原因"],
          ["第2章 Promoting and Protecting / 第3章组织结构", "高", "SPO 豁免官僚、资源保卫"],
          ["第5章 Synchronization of Progress", "中", "多技术同步≠曼哈顿式科学分叉"],
          ["第6章成本、第7–8章环境与秘诀", "中", "成功叙事需降权阅读"],
          ["导弹射程与潜艇设计章节", "低", "不摘"],
        ]}
      />
      <Text size="small">
        对读：
        <Link href="https://sylvainlenfle.fr/images/Publications/Lost_Roots_R2_VF.pdf">
          Lost Roots §2.2.2 Polaris
        </Link>
        {" · "}
        <Link href="https://archive.org/details/polarissystemdev0000sapo">Sapolsky</Link>
      </Text>

      <H2>Corona — 读管理卷，不读影像</H2>
      <Table
        headers={["位置", "价值"]}
        rows={[
          ["NRO History Vol V《Management of the NRO 1960–1965》", "高：指挥与军种接口"],
          ["Vol I Corona 中失败次数与首次回收成功的管理叙述", "高：允许早期失败"],
          ["Discoverer 掩护如何隔离信息", "中：隔离目的 vs 隔离密钥——只取反面教材"],
          ["80 万张影像、相机分辨率", "低"],
        ]}
      />

      <H2>B-29 — 只取与曼哈顿的接口</H2>
      <Table
        headers={["位置", "价值"]}
        rows={[
          ["Silverplate 改装、509 大队、提尼安后勤（Craven & Cate 相关卷）", "高：载具接口"],
          ["四厂生产（温奇塔/伦顿/贝尔/马丁）", "中：多厂复制"],
          ["作战轰炸叙事、发动机故障故事", "低"],
        ]}
      />

      <H2>旅行者 / DSN、JWST、ISS、LHC</H2>
      <Table
        headers={["资料", "高价值点", "跳过"]}
        rows={[
          [
            "SP-4227 Uplink-Downlink",
            "DSN 三站作为「地面工厂」；Mariner 需求如何驱动网的扩建",
            "射频工程公式",
          ],
          [
            "JWST：GAO 系列 + 2010–11 Independent Comprehensive Review Panel + 重新基线",
            "试验门如何在超支后仍被强制；伙伴接口",
            "红外探测器论文",
          ],
          [
            "ISS：1998 IGA、各国 MOU、模块 ICD 目录",
            "条款本身就是装料契约",
            "在轨实验清单",
          ],
          [
            "CERN CDS：LHC Design Report 治理章；2008 事故报告的组织响应",
            "主机不可失败 vs ATLAS/CMS 可并行",
            "磁体超导论文",
          ],
        ]}
      />

      <H2>土木四项 — 价值很窄</H2>
      <Table
        headers={["案例", "只读这一点", "不要读"]}
        rows={[
          ["巴拿马 RG 185", "法国路径失败后的卫生优先 + 船闸方案重启", "运河外交与帝国"],
          ["TVA RG 142", "给橡树岭供电的合同/调度——曼哈顿的工厂条件", "流域治理全文"],
          ["海峡隧道 NAO", "审计结论：交付了但财务失败", "掘进机型号"],
          ["Big Dig GAO/州审计", "业主—承包（Bechtel）信息与变更失控", "隧道断面"],
          ["自由轮 RG 178", "学习曲线数字（标准化旁证）", "航运战役"],
          ["州际公路 RG 30 / 1956 法", "标准截面复制（确定性强工程对照）", "路线政治"],
        ]}
      />

      <Callout tone="success" title="若只能打开十个文件">
        ① Lost Roots ② Hewlett 第3–7章 ③ Hewlett 第10–11章 ④ M1392 文件夹1–2 ⑤ Sapolsky 第4章 ⑥
        SP-4205 第2–3、7、9章 ⑦ CAIB 卷1第7章 ⑧ 哈勃报告「指示器被折扣」段 ⑨ 百慕大原则 ⑩ RFC 1 + NRO
        Vol V。这十处覆盖探索、控制、接口、试验门、发布门。其余按需补。
      </Callout>
    </Stack>
  );
}

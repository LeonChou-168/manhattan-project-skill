import {
  Callout,
  Card,
  CardBody,
  CardHeader,
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

type Tab = "why" | "protocol" | "cases" | "wave1" | "card";

export default function MegaProjectArchives() {
  const [tab, setTab] = useCanvasState<Tab>("tab", "why");

  return (
    <Stack gap={24}>
      <Stack gap={8}>
        <H1>超大工程档案收集：先建对照集，再抽算子</H1>
        <Text tone="secondary">
          开发者判断成立：没有档案对照，skill
          只会复述流行史。但不要按百科去收。按「不确定下如何并行、隔离、试验、杀线、发布」收证据，并且必须同时收成功机制不同的反例工程。
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value="对照 3+1" label="曼哈顿 + 北极星 + 阿波罗，外加一个软件失败对照" />
        <Stat value="A–E 分级" label="原件优先于回忆录，回忆录优先于电影" />
        <Stat value="抽卡片" label="一条证据对应一个算子，禁止整书入库" />
        <Stat value="组织史料" label="不收集武器设计与可复现工艺细节" />
      </Grid>

      <Row gap={8} wrap>
        <Pill active={tab === "why"} onClick={() => setTab("why")}>
          为什么先收
        </Pill>
        <Pill active={tab === "protocol"} onClick={() => setTab("protocol")}>
          收集规程
        </Pill>
        <Pill active={tab === "cases"} onClick={() => setTab("cases")}>
          对照案例
        </Pill>
        <Pill active={tab === "wave1"} onClick={() => setTab("wave1")}>
          第一波入口
        </Pill>
        <Pill active={tab === "card"} onClick={() => setTab("card")}>
          摘录卡片
        </Pill>
      </Row>

      {tab === "why" ? <Why /> : null}
      {tab === "protocol" ? <Protocol /> : null}
      {tab === "cases" ? <Cases /> : null}
      {tab === "wave1" ? <Wave1 /> : null}
      {tab === "card" ? <CardSpec /> : null}
    </Stack>
  );
}

function Why() {
  return (
    <Stack gap={20}>
      <Callout tone="info" title="先收档案，是为了防止写错 skill，不是为了写历史书">
        项目管理教科书常把曼哈顿工程说成现代项目管理的起源。Lenfle 与 Loch
        依据档案重读后指出：那是误传。曼哈顿应对的是不可预见的不确定性（并行探索）；北极星被记住的是
        PERT
        控制。若只收曼哈顿的二手通史，skill 会把两套相反的方法揉成一句「要计划也要灵活」。
      </Callout>

      <H2>档案能提供、通史给不了的东西</H2>
      <Table
        headers={["要找的组织事实", "通常藏在哪类档案", "通史容易歪成"]}
        rows={[
          ["何时并行、何时改串联", "进度备忘、工厂调度、军事政策委员会记录", "一开始就有英明蓝图"],
          ["杀线依据", "失败工艺的停工令、技术否决备忘", "勇气与坚持"],
          ["工地之间交什么货", "规格、运输、接收清单，而不是愿景演讲", "伟大愿景对齐了所有人"],
          ["拍板权实际落在谁", "授权令、越级信件、国会不知情的拨款方式", "扁平科学共同体"],
          ["试验门与发布门是否分开", "Trinity 报告 vs 临时委员会记录", "技术成功自然等于应当使用"],
        ]}
      />

      <H2>收档案时的两个陷阱</H2>
      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader>百科式收集</CardHeader>
          <CardBody>
            <Text size="small">
              把每个著名大工程的维基、纪录片、回忆录堆进文件夹。体积很大，抽不出可执行规则。对策：每个案例只服务已定的算子，满 8–12
              张合格卡片就停。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>单一胜利叙事</CardHeader>
          <CardBody>
            <Text size="small">
              只收曼哈顿，会把战时特权、保密、无限预算误当成可迁移条件。对策：强制对照北极星（控制导向）和阿波罗（系统工程官僚化），再加
              OS/360（软件规模失败）。
            </Text>
          </CardBody>
        </Card>
      </Grid>
    </Stack>
  );
}

function Protocol() {
  return (
    <Stack gap={20}>
      <H2>收录标准</H2>
      <Table
        headers={["收", "不收"]}
        rows={[
          [
            "有截止日期、有可验证交付物、多工地或多承包商、技术路径曾不确定",
            "单纯资金巨大但路径已知的土建（除非用来对照「确定性强的工程」）",
          ],
          [
            "能看到并行、接口、试验、杀线、发布中至少两项的原始或官方证据",
            "只有结果成功、没有过程记录的宣传稿",
          ],
          [
            "组织、合同、进度、试验、人员指挥、跨机构协议",
            "武器物理、临界质量、浓缩 cascade 可操作参数、炸药透镜细节",
          ],
          [
            "公开解密件、官方史、可引用的研究论文、口述里谈组织的部分",
            "未解密材料、完整受版权保护的书的逐字入库、影视对白当史实",
          ],
        ]}
      />

      <H2>史料分级（写入卡片时必须标）</H2>
      <Table
        headers={["级", "类型", "用法"]}
        rows={[
          ["A", "档案馆原件 / 缩微 / 解密扫描 / 官方 finding aid 指向的系列", "算子的主证据"],
          ["B", "官方史（AEC Hewlett、NASA SP 丛书）", "可作主证据，但要回查其脚注"],
          ["C", "当事人回忆录、口述史", "只用来补充「当时怎么决策」；须与 A/B 对读"],
          ["D", "同行评议的工程史 / 项目管理重读（Lenfle, Johnson, Hughes, Sapolsky）", "解释框架，不是事实本身"],
          ["E", "新闻、科普、电影", "发现线索，不可单独支撑 skill 条文"],
        ]}
      />

      <H2>建议收集波次</H2>
      <Table
        headers={["波次", "案例", "停手条件"]}
        rows={[
          [
            "第一波（写 skill 前必须完成）",
            "曼哈顿（深）+ 北极星（对照）+ 阿波罗（对照）",
            "每个案例至少 8 张卡片，覆盖并行/隔离/试验/拍板/发布五类中的四类",
          ],
          [
            "第二波（skill 附件）",
            "SAGE 或 Atlas、ARPANET、OS/360、人类基因组",
            "用来检验算子是否只适用于战时核计划",
          ],
          [
            "第三波（可选）",
            "两弹一星、贝尔实验室大型系统、GPS / 航天飞机",
            "档案可及性差就停，不要用宣传材料硬凑",
          ],
        ]}
      />

      <Callout tone="warning" title="版权与密级">
        Skill 和语料库只保留摘录卡片：出处、页码或档号、不超过必要长度的引文。不要把 Hewlett
        全书或 Groves 回忆录全文拷进仓库。涉及仍敏感的工艺参数一律不摘。
      </Callout>
    </Stack>
  );
}

function Cases() {
  return (
    <Stack gap={20}>
      <Text>
        对照集的价值在于机制不同，而不是都「很大」。曼哈顿证明并行探索；北极星常被误当成
        PERT 的胜利，实际更多是组织特权与战略选择；阿波罗把系统工程变成可复制的官僚创新；OS/360
        证明加人不能救延期的软件。
      </Text>
      <Table
        headers={["案例", "不确定类型", "主要组织机制", "用来检验哪条算子", "档案可及性"]}
        rows={[
          [
            "曼哈顿工程 1942–46",
            "不可预见（哪条装料路线能工作未知）",
            "并行探索 + 工地隔离 + 强拍板",
            "双路径、杀线、装料接口、Trinity 与发布门分离",
            "高：NARA / DOE 大量解密",
          ],
          [
            "北极星 SLBM 1956–60",
            "集成复杂，科学基础相对更清楚",
            "特种项目办公室特权；PERT 更多是对外叙事",
            "不要把控制工具当成探索工具；拍板权与豁免官僚",
            "中：Sapolsky 研究 + 海军史",
          ],
          [
            "阿波罗 1961–72",
            "系统集成与可靠性",
            "空军/NASA 系统管理、配置控制、阶段审查",
            "工业承包、接口控制、试验门；以及官僚化的代价",
            "高：NASA History / NARA RG 255",
          ],
          [
            "SAGE 防空 1950s",
            "实时计算机与组织创新",
            "大学—军方—工业；系统建造者",
            "基础设施占比；「军事上过时仍留下计算遗产」",
            "中：Hughes；MITRE / Lincoln 史",
          ],
          [
            "ARPANET 1960s–70s",
            "协议与承包商并行",
            "小核心 + 多承包商接口（RFC 文化）",
            "接口契约代替共享大脑",
            "高：RFC 本身即档案",
          ],
          [
            "IBM OS/360 1964–67",
            "软件规模与沟通成本",
            "Brooks：加人使更晚；外科手术团队",
            "集成人不可复制；软件不能按工地无限并行",
            "中：Brooks 文本 + CBI / IBM 档案",
          ],
          [
            "人类基因组 1990–2003",
            "测序技术路线竞争（公/私）",
            "国际consortium + 对冲的商业路径",
            "双路径与数据工厂；发布（公开数据）即产品",
            "高：NIH / Wellcome 公开",
          ],
          [
            "两弹一星 1950s–70s",
            "封锁下的自主与仿制并行",
            "集中动员、院所—基地分离",
            "检验算子是否依赖美国制度；档案受限要标明",
            "低：公开多为官方综述与回忆",
          ],
        ]}
      />
    </Stack>
  );
}

function Wave1() {
  return (
    <Stack gap={20}>
      <H2>曼哈顿工程 — 优先入口</H2>
      <Table
        headers={["级", "资源", "为什么先读"]}
        rows={[
          [
            "A",
            <Link href="https://www.archives.gov/research/guide-fed-records/groups/326.html">
              NARA RG 326 原子能委员会 / 曼哈顿工区
            </Link>,
            "主全宗。亚特兰大分馆有橡树岭系列 finding aid。",
          ],
          [
            "A",
            <Link href="https://www.archives.gov/research/guide-fed-records/groups/227.html">
              NARA RG 227 OSRD；缩微 M1392 Bush-Conant File
            </Link>,
            "转交陆军之前的文官指挥层：英美合作、S-1、政策委员会。",
          ],
          [
            "A/B",
            <Link href="https://www.osti.gov/opennet/manhattan-project-history/">
              DOE OSTI OpenNet：The Manhattan Project: An Interactive History
            </Link>,
            "官方综述入口，页内链到解密件与二次文献。",
          ],
          [
            "B",
            <Link href="https://www.energy.gov/documents/hewlettandandersonnewworldnobookmarkspdf">
              Hewlett & Anderson, The New World, 1939–1946（DOE 提供 PDF）
            </Link>,
            "AEC 官方史第一卷。成本、工厂、指挥的脚注级来源。",
          ],
          [
            "A",
            <Link href="https://www.nps.gov/mapr/learn/historyculture/timeline.htm">
              曼哈顿工程国家历史公园时间线
            </Link>,
            "三地现场史的官方年表，用来校准事件顺序。",
          ],
          [
            "C",
            <Link href="https://ahf.nuclearmuseum.org/voices/">
              Voices of the Manhattan Project（约 600 份口述）
            </Link>,
            "只摘组织与日常生产，不把回忆当决策记录。含 Groves、Oppenheimer。",
          ],
        ]}
      />

      <H2>北极星 — 用来拆掉「曼哈顿 = 现代项目管理」</H2>
      <Table
        headers={["级", "资源", "读什么"]}
        rows={[
          [
            "D",
            <Link href="https://archive.org/details/polarissystemdev0000sapo">
              Sapolsky, The Polaris System Development (1972)
            </Link>,
            "特种项目办公室如何用组织特权拿资源；PERT 的公共关系功能。",
          ],
          [
            "D",
            <Link href="https://sylvainlenfle.fr/images/Publications/Lost_Roots_R2_VF.pdf">
              Lenfle & Loch, Lost Roots（开放 PDF）
            </Link>,
            "直接论证：教科书把控制工具回溯到曼哈顿是错的。",
          ],
          [
            "D",
            <Link href="https://www.sylvainlenfle.fr/images/Publications/Lenfle%20et%20al%202015%20CIM%20PM%20and%20DT%20revision%202%20september%202015%20pour%20site%20web.pdf">
              Lenfle et al. 2015，曼哈顿 vs 北极星（设计理论）
            </Link>,
            "知识库可拆分 vs 不可拆分，决定能不能并行探索。",
          ],
          [
            "B",
            <Link href="https://www.ssp.navy.mil/About-Us/Our-History/">
              海军 Strategic Systems Programs 官方沿革
            </Link>,
            "SPO 1955 成立、对官僚的豁免、英美 Polaris Sales Agreement。",
          ],
        ]}
      />

      <H2>阿波罗 — 系统工程如何被做成可复制流程</H2>
      <Table
        headers={["级", "资源", "读什么"]}
        rows={[
          [
            "A",
            <Link href="https://www.archives.gov/research/guide-fed-records/groups/255.html">
              NARA RG 255 NASA
            </Link>,
            "没有单一「阿波罗全宗」。按中心所在地区分馆查。",
          ],
          [
            "A",
            <Link href="https://www.nasa.gov/wp-content/uploads/static/history/PDFs/Finding%20aids/Programs/apollo%207_10-finding_aid.pdf">
              NASA HQ Archives Apollo finding aid（示例）
            </Link>,
            "总部档案与中心档案、NARA 三者分开，避免以为有一个大盒子。",
          ],
          [
            "D",
            "Johnson, The Secret of Apollo (JHU, 2002)",
            "系统管理从空军导弹迁入 NASA：配置控制、阶段审查、创新的官僚化。",
          ],
          [
            "B",
            "NASA History 丛书（Chariots for Apollo 等 SP 号）",
            "官方任务史；用来找接口控制与试验资格的原始脚注。",
          ],
        ]}
      />

      <H2>软件对照（第一波末尾读，防止工地模型生搬）</H2>
      <Table
        headers={["级", "资源", "读什么"]}
        rows={[
          [
            "C/D",
            "Brooks, The Mythical Man-Month（基于 OS/360）",
            "沟通成本、概念完整性、外科手术团队。限制「无限并行工地」。",
          ],
          [
            "D",
            "Hughes, Rescuing Prometheus：SAGE / Atlas / 波士顿动脉 / ARPANET",
            "战后系统建造的四个原型，用来扩展「工地」隐喻的适用范围。",
          ],
        ]}
      />

      <Callout tone="neutral" title="第一波阅读顺序（大约 8–12 个有效工作日）">
        ① Lenfle & Loch《Lost Roots》定问题 → ② Hewlett 中与工厂调度、路径选择、成本相关的章节 → ③
        Bush-Conant 目录与若干关键文件夹说明 → ④ Sapolsky 北极星 → ⑤ Johnson 阿波罗系统管理 → ⑥
        Brooks 限制软件并行。期间每读到一条组织事实就填一张卡片，不要等读完再摘。
      </Callout>
    </Stack>
  );
}

function CardSpec() {
  return (
    <Stack gap={20}>
      <H2>每条证据一张卡，字段固定</H2>
      <Text>
        卡片是以后写入 skill 的唯一合法输入。没有卡片支撑的算子，不得写进
        SKILL.md。历史叙事留在 history-map.md，代理默认不读。
      </Text>
      <Table
        headers={["字段", "要求"]}
        rows={[
          ["id", "CASE-OP-##，如 MAN-PARALLEL-03"],
          ["case", "工程名称与年份区间"],
          ["operator", "对应已锁定的算子（双路径 / 工地 / Trinity / 杀线 / 发布门…）"],
          ["claim", "一句可证伪的组织命题，不用形容词"],
          ["evidence", "原文或精确转述 + 出处 + 分级 A–E + 页码或档号"],
          ["counter", "相反证据或后来史学争论，没有就写 none"],
          ["transfer_if", "迁到软件/agent 时必须成立的条件"],
          ["do_not_transfer", "战时特权、保密、杀伤、无限预算等"],
          ["confidence", "high / medium / low；仅 E 级来源不得高于 low"],
        ]}
      />

      <H2>合格示例 vs 不合格</H2>
      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader>合格</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text size="small" weight="semibold">
                MAN-PARALLEL-01
              </Text>
              <Text size="small">
                claim：在浓缩工艺尚未证明可规模化时，曼哈顿工区同时建设电磁、气体扩散与热扩散设施，并在
                1945 年将三者串联。
              </Text>
              <Text size="small" tone="secondary">
                evidence：Hewlett & Anderson 成本与工厂章节；OpenNet 对 S-50/K-25/Y-12
                串联的叙述。grade B。transfer_if：路径成败不可事先计算，且付得起并行建设。do_not_transfer：不计成本。
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>不合格</CardHeader>
          <CardBody>
            <Text size="small">
              「曼哈顿工程告诉我们要敢于创新、加强领导、团结协作。」没有档号，没有反例，不能变成检查单，不能否证。此类句子禁止入库。
            </Text>
          </CardBody>
        </Card>
      </Grid>

      <H2>建议的本地目录（先建空壳即可）</H2>
      <Table
        headers={["路径", "放什么"]}
        rows={[
          ["corpus/index.md", "案例清单、波次、停手条件"],
          ["corpus/cards/*.md", "一卡一文件，YAML frontmatter + 摘录"],
          ["corpus/sources.md", "URL、档号、版权备注、最后访问日期"],
          ["corpus/do-not-ingest.md", "武器设计、未解密、影视"],
          ["corpus/history-map.md", "以后给 skill 当附件，不是主文件"],
        ]}
      />

      <Callout tone="success" title="可以开始写 skill 的标志">
        三个对照案例都有卡片；同一算子在至少两个案例中出现或被明确证伪；软件对照限制了「工地无限并行」。这时再写
        SKILL.md。未到这个门槛，继续收档，不要开写原则。
      </Callout>
    </Stack>
  );
}

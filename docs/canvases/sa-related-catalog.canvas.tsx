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

type Tab =
  | "map"
  | "manhattan"
  | "apollo"
  | "hgp"
  | "net"
  | "corona"
  | "civil"
  | "rest";

export default function SARelatedCatalog() {
  const [tab, setTab] = useCanvasState<Tab>("tab", "map");

  return (
    <Stack gap={24}>
      <Stack gap={8}>
        <H1>S/A 档全部关联内容</H1>
        <Text tone="secondary">
          只列史料分级为 S 或 A 的案例。每个案例给出：档案全宗、官方史/调查、解密集、子计划与承包商、组织层人物、必须对照的史学。AGC
          并入阿波罗，NSFNET 并入 ARPANET 谱系，不另开主案例。
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value="6" label="S 档主案例" />
        <Stat value="17" label="A 档主案例（含北极星 T=3）" />
        <Stat value="4" label="谱系：OSRD / NASA / 网络 / 土木" />
        <Stat value="抽卡用" label="下列条目是语料入口，不是阅读任务" />
      </Grid>

      <Row gap={8} wrap>
        <Pill active={tab === "map"} onClick={() => setTab("map")}>
          谱系关系
        </Pill>
        <Pill active={tab === "manhattan"} onClick={() => setTab("manhattan")}>
          OSRD 谱系
        </Pill>
        <Pill active={tab === "apollo"} onClick={() => setTab("apollo")}>
          NASA 谱系
        </Pill>
        <Pill active={tab === "hgp"} onClick={() => setTab("hgp")}>
          基因组
        </Pill>
        <Pill active={tab === "net"} onClick={() => setTab("net")}>
          网络
        </Pill>
        <Pill active={tab === "corona"} onClick={() => setTab("corona")}>
          北极星 / Corona / B-29
        </Pill>
        <Pill active={tab === "civil"} onClick={() => setTab("civil")}>
          土木与生产
        </Pill>
        <Pill active={tab === "rest"} onClick={() => setTab("rest")}>
          LHC / 深空 / JWST / ISS
        </Pill>
      </Row>

      {tab === "map" ? <Map /> : null}
      {tab === "manhattan" ? <ManhattanFamily /> : null}
      {tab === "apollo" ? <ApolloFamily /> : null}
      {tab === "hgp" ? <Hgp /> : null}
      {tab === "net" ? <Net /> : null}
      {tab === "corona" ? <CoronaPolaris /> : null}
      {tab === "civil" ? <Civil /> : null}
      {tab === "rest" ? <Rest /> : null}
    </Stack>
  );
}

function Map() {
  return (
    <Stack gap={20}>
      <Callout tone="info" title="关联优先于单点">
        抽卡时沿谱系走：同一指挥层或同一接口出现在多个 S/A
        案例里，才算可迁移。孤立名录不抽。
      </Callout>
      <H2>S/A 案例之间的硬关联</H2>
      <Table
        headers={["边", "关联物", "抽卡时看什么"]}
        rows={[
          [
            "曼哈顿 ↔ Tube Alloys",
            "魁北克协定、Bush-Conant、英方代表团",
            "不对等合并、伙伴协议",
          ],
          [
            "曼哈顿 ↔ 辐射实验室",
            "同属 OSRD / RG 227",
            "同一动员体制下的两条成功路径",
          ],
          [
            "曼哈顿 ↔ B-29",
            "Silverplate、第 509 大队、提尼安",
            "装料与载具接口，不是同一计划",
          ],
          [
            "曼哈顿 ↔ TVA",
            "橡树岭用电",
            "基础设施是工厂条件，不是目标物",
          ],
          [
            "辐射实验室 ↔ Tube Alloys 外围",
            "Tizard 使团、磁控管",
            "跨大西洋技术转移",
          ],
          [
            "阿波罗 ↔ AGC",
            "MIT 仪表实验室合同",
            "核心子系统资源争夺与软件冻结门",
          ],
          [
            "阿波罗 ↔ 航天飞机 / 哈勃",
            "载具、在轨维修、NASA 中心结构",
            "系统管理成功之后，运行期安全门如何失效",
          ],
          [
            "航天飞机 ↔ 哈勃修复",
            "STS-61 是修复平台",
            "二次 Trinity 依赖另一套 S/A 工程",
          ],
          [
            "阿波罗前史 ↔ 北极星 / 阿特拉斯（阿特拉斯为 B 档）",
            "空军系统管理迁入 NASA",
            "对照：探索 vs 控制",
          ],
          [
            "ARPANET ↔ NSFNET",
            "RFC、骨干移交",
            "接口稳定后如何平民化产线",
          ],
          [
            "旅行者 ↔ DSN ↔ （弱）阿波罗深空通信传统",
            "JPL / Goldstone",
            "地面网作为工厂",
          ],
          [
            "JWST ↔ 哈勃",
            "STScI、空间望远镜经验、试验不足的教训",
            "同一类光学集成风险",
          ],
          [
            "ISS ↔ 航天飞机",
            "组装飞行",
            "模块接口 + 载具依赖",
          ],
        ]}
      />
      <H2>S 档六项一览</H2>
      <Table
        headers={["案例", "档", "主全宗 / 主报告", "抽卡主算子"]}
        rows={[
          ["曼哈顿工程", "S", "NARA RG 326 + 227；Hewlett", "并行、工地、接口、试验≠发布"],
          ["阿波罗", "S", "NARA RG 255；NASA SP-4205 等", "配置控制、承包、阶段审查"],
          ["人类基因组", "S", "NIH/DOE/Wellcome；Bermuda", "数据工厂、公私双路径、开放即发布"],
          ["哈勃调查与修复", "S", "NTRS 光学失败报告；STS-61", "集成失败、二次试验门"],
          ["航天飞机调查", "S", "Rogers 1986；CAIB 2003", "运行期安全门被进度侵蚀（反例）"],
          ["巴拿马运河美建", "S", "NARA RG 185", "失败路径后重建、卫生作为基础设施"],
        ]}
      />
      <H2>A 档十七项一览</H2>
      <Table
        headers={["案例", "T/R", "主入口", "谱系"]}
        rows={[
          ["MIT 辐射实验室", "4/4", "OSRD RG 227；Guerlac", "OSRD"],
          ["Tube Alloys / MAUD", "4/4", "UK NA CAB 126", "OSRD/核"],
          ["ARPANET", "4/4", "RFC 全集", "网络"],
          ["NSFNET（并入上项）", "4/4", "NSF 合同；RFC", "网络"],
          ["B-29", "4/4", "Craven & Cate；RG 18", "战时生产"],
          ["Corona", "4/4", "NRO 解密史 Vol I–V", "侦察"],
          ["北极星", "3/4", "Sapolsky 1972；海军 SSP", "导弹对照"],
          ["阿波罗 AGC", "4/4", "MIT IL 档案", "并入阿波罗"],
          ["旅行者 / DSN", "4/4", "NASA SP-4227", "深空"],
          ["JWST", "4/4", "GAO；独立审查", "NASA"],
          ["国际空间站", "4/4", "IGA/MOU；ICD", "NASA"],
          ["LHC", "4/4", "CERN CDS", "大科学"],
          ["TVA", "4/4", "NARA RG 142", "土木"],
          ["海峡隧道", "4/5", "NAO 等审计", "土木有保留"],
          ["Big Dig", "4/5", "GAO/州审计", "失败对照"],
          ["自由轮", "4/4", "海事委员会；RG 178", "生产旁证"],
          ["州际公路", "5/4", "FHWA；RG 30", "标准复制旁证"],
        ]}
      />
    </Stack>
  );
}

function ManhattanFamily() {
  return (
    <Stack gap={20}>
      <H2>曼哈顿工程（S）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "档案全宗",
            "NARA RG 326（AEC/工区）；RG 227（OSRD，含 M1392 Bush-Conant）；RG 77 工程兵中的 MED；亚特兰大分馆橡树岭系列；洛斯阿拉莫斯 / 橡树岭 / 汉福德现场档案",
          ],
          [
            "官方史",
            "Hewlett & Anderson《The New World, 1939–1946》；曼哈顿工区史（Manhattan District History，格罗夫斯委托多卷）；1945 Smyth Report（公开科学说明书，不是组织全宗）",
          ],
          [
            "解密集 / 数据库",
            "DOE OSTI OpenNet 交互史；NPS 曼哈顿工程国家历史公园时间线；Voices of the Manhattan Project 口述（C 级，只摘组织）",
          ],
          [
            "子计划 / 工地",
            "Met Lab CP-1；克林顿工程：Y-12、K-25、S-50、X-10；汉福德 B 堆与 T 厂；Y 计划洛斯阿拉莫斯；三位一体；Alsos；Alberta；第 509 大队",
          ],
          [
            "承包商",
            "杜邦（汉福德）；Kellex/联合碳化物（K-25）；田纳西伊士曼（Y-12）；Stone & Webster；加州大学（洛斯阿拉莫斯合同）",
          ],
          [
            "组织层人物",
            "格罗夫斯、奥本海默、布什、科南特、尼科尔斯、康普顿、劳伦斯、费米、西博格",
          ],
          [
            "跨案关联",
            "Tube Alloys；魁北克协定；TVA 供电；B-29 Silverplate；加拿大乔克河 / 特雷尔重水 / Eldorado",
          ],
          [
            "必须对照的史学",
            "Lenfle 并行策略；Lenfle & Loch Lost Roots（纠正「曼哈顿=现代项目管理」）",
          ],
        ]}
      />
      <Text size="small">
        入口：
        <Link href="https://www.archives.gov/research/guide-fed-records/groups/326.html">RG 326</Link>
        {" · "}
        <Link href="https://www.archives.gov/research/guide-fed-records/groups/227.html">RG 227</Link>
        {" · "}
        <Link href="https://www.osti.gov/opennet/manhattan-project-history/">OpenNet</Link>
        {" · "}
        <Link href="https://www.energy.gov/documents/hewlettandandersonnewworldnobookmarkspdf">Hewlett PDF</Link>
        {" · "}
        <Link href="https://www.nps.gov/mapr/learn/historyculture/timeline.htm">NPS 时间线</Link>
        {" · "}
        <Link href="https://ahf.nuclearmuseum.org/voices/">Voices</Link>
      </Text>

      <H2>Tube Alloys / MAUD（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "档案",
            "英国国家档案馆 CAB 126 等原子能系列；Frisch-Peierls 备忘录；MAUD 报告；与 M1392 中「英美核关系」文件夹对读",
          ],
          [
            "协议",
            "1943 魁北克协定；1944 海德公园备忘录；战后麦克马洪法中断合作（反面）",
          ],
          [
            "组织 / 人物",
            "汤姆森 MAUD；查德威克英国代表团；奥尔芬特；佩尔斯；富克斯（情报史，不作组织模板）",
          ],
          ["抽卡", "先发科学评估如何推动美国全力投入；不对等合并"],
        ]}
      />

      <H2>MIT 辐射实验室（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "档案",
            "OSRD RG 227 Division 14；MIT Institute Archives；辐射实验室丛书 28 卷（技术，组织只作索引）",
          ],
          [
            "官方史",
            "Henry Guerlac《Radar in World War II》；James Phinney Baxter《Scientists Against Time》（OSRD 官方史）",
          ],
          [
            "关联物",
            "Tizard 使团与空腔磁控管；英国 Chain Home（前史）；Research Construction Company；Raytheon、Philco、Bell Labs 量产；H2X 轰炸雷达",
          ],
          [
            "人物",
            "李·杜布里奇（Rad Lab 主任）；布什（OSRD）；洛夫·惠勒等",
          ],
          ["抽卡", "与曼哈顿同体制、更快实验室→量产；多型号并行"],
        ]}
      />
    </Stack>
  );
}

function ApolloFamily() {
  return (
    <Stack gap={20}>
      <H2>阿波罗（S）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "档案",
            "NARA RG 255（按中心分馆）；NASA HQ Archives；JSC / MSFC / KSC / LaRC 中心档案。不存在单一「阿波罗全宗」",
          ],
          [
            "官方史 SP",
            "SP-4205 Chariots for Apollo；SP-4206 Stages to Saturn；SP-4204 Moonport；水星/双子星 History Office 源文件",
          ],
          [
            "调查",
            "Apollo 1（204）火灾审查；阿波罗 13 审查——运行事故，与 CAIB 对照",
          ],
          [
            "子计划",
            "水星、双子星（路径验证）；土星 I/IB/V；指令服务舱、登月舱、仪器单元；阿波罗应用/天空实验室（收尾）",
          ],
          [
            "承包商",
            "北美航空（CSM、S-II）；格鲁曼（LM）；波音（S-IC）；道格拉斯（S-IVB）；IBM（IU）；MIT IL（AGC）；Raytheon 量产 AGC",
          ],
          [
            "组织层",
            "韦伯、穆勒、菲利普斯（计划主任，来自民兵）、冯·布劳恩、吉尔鲁斯、谢伊、法热",
          ],
          [
            "对照史学",
            "Johnson《The Secret of Apollo》：系统管理从空军导弹迁入 NASA",
          ],
        ]}
      />
      <Text size="small">
        入口：
        <Link href="https://www.archives.gov/research/guide-fed-records/groups/255.html">RG 255</Link>
        {" · "}
        <Link href="https://www.nasa.gov/history/">NASA History</Link>
        {" · "}
        <Link href="https://www.apolloproject.com/sp-4205/contents.htm">SP-4205</Link>
      </Text>

      <H2>AGC / MIT 仪表实验室（A，并入阿波罗抽卡）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          ["档案", "MIT IL / Draper 实验室档案；NASA 软件与优先级备忘"],
          ["关联", "霍尔韦顿软件；Raytheon 制造；与土星/飞船重量和内存争夺"],
          ["抽卡", "核心子系统冻结门；概念完整性 vs 多工地并行"],
        ]}
      />

      <H2>哈勃调查与修复（S）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "主报告",
            "HST Optical Systems Board of Investigation（Allen 委员会）NTRS 19910003124；MSFC SRM&QA 附件",
          ],
          [
            "关联组织",
            "Perkin-Elmer / Hughes Danbury 主镜；马歇尔航天中心业主；洛克希德光学望远镜组件",
          ],
          [
            "修复",
            "STS-61（1993）SM1；COSTAR；与航天飞机载具绑定",
          ],
          ["抽卡", "试验被折扣掉的指示器；二次 Trinity"],
        ]}
      />
      <Text size="small">
        入口：
        <Link href="https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19910003124.pdf">
          光学失败报告 PDF
        </Link>
      </Text>

      <H2>航天飞机调查（S，反例）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "挑战者",
            "Rogers Commission 1986；费曼附录；Thiokol 密封圈；发射压力",
          ],
          [
            "哥伦比亚",
            "CAIB 2003 多卷；检查 30,000+ 文件、200+ 访谈；泡沫、独立技术权威、安全组织",
          ],
          [
            "关联",
            "STS 计划办公室；与 ISS 组装、哈勃维修同载具",
          ],
          ["抽卡", "只抽运行期安全门，不抽「航天飞机是成功模板」"],
        ]}
      />
      <Text size="small">
        入口：
        <Link href="https://ntrs.nasa.gov/citations/20030093634">CAIB Vol.1 NTRS</Link>
      </Text>
    </Stack>
  );
}

function Hgp() {
  return (
    <Stack gap={20}>
      <H2>人类基因组计划（S）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "主办",
            "NIH NHGRI；DOE 生物与环境研究 / 联合基因组研究所；Wellcome Trust Sanger Institute",
          ],
          [
            "数据政策",
            "1996/1997 百慕大原则（24 小时释放）；开放数据=发布门",
          ],
          [
            "双路径",
            "国际 consortium 分层测序 vs Celera 全基因组鸟枪法（对冲，不是内部工地）",
          ],
          [
            "产线中心",
            "最初约 20 家 → 五大：Sanger、Whitehead/Broad、WashU、Baylor、DOE JGI",
          ],
          [
            "前导目标物",
            "酵母、线虫、果蝇、拟南芥等模式生物测序（先小后大）",
          ],
          [
            "节点文件",
            "1990 联合计划；2001 Nature/Science 草图；2003 完成宣布",
          ],
        ]}
      />
      <Text size="small">
        入口：
        <Link href="https://www.genome.gov/about-genomics/educational-resources/fact-sheets/human-genome-project">
          NHGRI fact sheet
        </Link>
        {" · "}
        <Link href="https://doe-humangenomeproject.ornl.gov/history/">DOE HGP history</Link>
      </Text>
    </Stack>
  );
}

function Net() {
  return (
    <Stack gap={20}>
      <H2>ARPANET（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "原始接口档案",
            "RFC 全集（RFC 1 Crocker 起）；NCP 后迁 TCP/IP（1983 标志日）",
          ],
          [
            "合同 / 节点",
            "BBN IMP；IPTO（Licklider、Taylor、Roberts）；首四节点 UCLA、SRI、UCSB、Utah",
          ],
          [
            "关联计划",
            "CSNET、MILNET 分裂、1983 TCP/IP、1990 ARPANET 退役",
          ],
          ["抽卡", "接口契约代替共享大脑；多承包商并行"],
        ]}
      />
      <H2>NSFNET（A，并入网络谱系）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "组织",
            "NSF；Merit + IBM + MCI 骨干运营；区域网接入",
          ],
          [
            "关联",
            "承接 ARPANET 科研流量；商业 CIX；1995 骨干私有化",
          ],
          ["抽卡", "接口稳定后的平民化产线，不另建工地图"],
        ]}
      />
    </Stack>
  );
}

function CoronaPolaris() {
  return (
    <Stack gap={20}>
      <H2>北极星（A，T=3 降权对照）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "主文献",
            "Sapolsky《The Polaris System Development》(1972)；海军 Strategic Systems Programs 沿革",
          ],
          [
            "组织",
            "1955 特种项目办公室 SPO；Raborn；对海军官僚的豁免；1963 英美 Polaris Sales Agreement",
          ],
          [
            "承包商",
            "洛克希德导弹；电船公司潜艇；西屋推进；PERT 作为对外与国会工具（史学争论点）",
          ],
          [
            "后续谱系",
            "海神 Poseidon、三叉戟 Trident（同一办公室演化为 SSP）",
          ],
          [
            "必须对照",
            "Lenfle & Loch：不要把 PERT 回溯成曼哈顿方法",
          ],
        ]}
      />
      <Text size="small">
        入口：
        <Link href="https://archive.org/details/polarissystemdev0000sapo">Sapolsky IA</Link>
        {" · "}
        <Link href="https://www.ssp.navy.mil/About-Us/Our-History/">SSP History</Link>
        {" · "}
        <Link href="https://sylvainlenfle.fr/images/Publications/Lost_Roots_R2_VF.pdf">Lost Roots PDF</Link>
      </Text>

      <H2>Corona（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "解密集",
            "1995 EO 12951；NRO《A History of Satellite Reconnaissance》Vol I Corona、II SAMOS、III GAMBIT/HEXAGON、V NRO 管理 1960–65；NARA 影像与纸质目录 NWDNC-263；USGS EROS 80 万张影像",
          ],
          [
            "掩护与关联",
            "Discoverer 掩护编号；ARGON、LANYARD；前史 U-2；后继 GAMBIT/HEXAGON",
          ],
          [
            "承包",
            "洛克希德 Agena；Itek 相机；胶片舱空中回收",
          ],
          ["抽卡", "连续失败后的系统成功；早期失败被允许"],
        ]}
      />
      <Text size="small">
        入口：
        <Link href="https://www.nro.gov/foia-home/foia-declassified-nro-programs-and-projects/">
          NRO 解密集
        </Link>
        {" · "}
        <Link href="https://www.cia.gov/stories/story/corona-declassified/">CIA Corona</Link>
      </Text>

      <H2>B-29（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "档案 / 官方史",
            "NARA RG 18 陆军航空队；Craven & Cate《The Army Air Forces in World War II》",
          ],
          [
            "生产工地",
            "波音温奇塔 / 伦顿；贝尔亚特兰大；马丁奥马哈——多厂复制",
          ],
          [
            "与曼哈顿的接口",
            "Silverplate 改装；第 509 混合大队；提尼安；印第安纳波利斯号运件",
          ],
          ["抽卡", "载具工厂；不要并进曼哈顿成本表"],
        ]}
      />
    </Stack>
  );
}

function Civil() {
  return (
    <Stack gap={20}>
      <H2>巴拿马运河美建（S）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "档案",
            "NARA RG 185 Panama Canal；地峡运河委员会；戈瑟尔斯工程记录；戈尔加斯卫生记录",
          ],
          [
            "失败前史",
            "法国 Compagnie Universelle 路径被杀后重建——这是采纳点",
          ],
          ["人物", "戈瑟尔斯、戈尔加斯、老罗斯福时期决策层"],
          ["抽卡", "只抽「杀失败路径 + 基础设施（卫生）优先」，不抽帝国叙事"],
        ]}
      />

      <H2>TVA（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          ["档案", "NARA RG 142 Tennessee Valley Authority"],
          ["关联", "为克林顿/橡树岭供电，是曼哈顿的工厂条件"],
          ["人物", "利连索尔等"],
          ["抽卡", "区域系统建造；电力不是目标物"],
        ]}
      />

      <H2>海峡隧道（A，有保留成功）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          ["档案", "英国国家审计署 NAO 报告；英法政府与 Eurotunnel 披露；承包联合体 TML"],
          ["前史", "19 世纪与 1970s 停工——失败路径"],
          ["抽卡", "技术交付 vs 财务失败"],
        ]}
      />

      <H2>Big Dig（A，失败对照）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          ["档案", "GAO、马萨诸塞州监察长、联邦运输部审计、诉讼卷"],
          ["承包", "Bechtel / Parsons Brinckerhoff"],
          ["史学", "Hughes《Rescuing Prometheus》第四章"],
          ["抽卡", "利益相关方复杂时战时方法失效"],
        ]}
      />

      <H2>自由轮（A，机制过窄）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          ["档案", "NARA RG 178 海事委员会；Kaiser 船厂生产统计"],
          ["官方史", "Lane《Ships for Victory》一类生产史"],
          ["抽卡", "标准化与学习曲线旁证，不支撑科学双路径"],
        ]}
      />

      <H2>州际公路（A，机制过窄）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          ["档案", "NARA RG 30 Bureau of Public Roads；1956 联邦公路法；FHWA 官方史（Weingroff 等）"],
          ["抽卡", "标准截面复制；技术分叉弱，探索型算子不用"],
        ]}
      />
    </Stack>
  );
}

function Rest() {
  return (
    <Stack gap={20}>
      <H2>旅行者号 / 深空网（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "官方史",
            "NASA SP-4227 Uplink-Downlink（DSN）；JPL 任务档案；Grand Tour 窗口",
          ],
          [
            "地面工厂",
            "DSN：Goldstone、马德里、堪培拉",
          ],
          [
            "关联任务",
            "Mariner 时代铺路；Pioneer；后续 Viking/Galileo/Cassini 共用 DSN",
          ],
          ["抽卡", "发射窗口=截止日期；地面网=工厂"],
        ]}
      />
      <Text size="small">
        入口：
        <Link href="https://www.nasa.gov/wp-content/uploads/2023/04/sp-4227.pdf">SP-4227 PDF</Link>
      </Text>

      <H2>JWST（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "审查",
            "GAO 系列；2010–11 Independent Comprehensive Review Panel；重新基线文件",
          ],
          [
            "伙伴 / 承包",
            "NASA / ESA / CSA；Northrop Grumman；Ball；JPL MIRI 低温；STScI 运行",
          ],
          [
            "关联",
            "哈勃的光学集成教训；折叠展开的地面试验门",
          ],
          ["抽卡", "超支下仍强制的全链路试验，不作进度模板"],
        ]}
      />

      <H2>国际空间站（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "条约级文件",
            "1998 IGA；NASA 与俄、欧、日、加的 MOU；模块 ICD",
          ],
          [
            "前史",
            "Space Station Freedom 重新设计；和平号对接经验",
          ],
          [
            "载具依赖",
            "航天飞机组装飞行；与 CAIB 反例相连",
          ],
          ["抽卡", "伙伴协议 + 模块接口治国"],
        ]}
      />

      <H2>LHC（A）</H2>
      <Table
        headers={["类", "关联内容"]}
        rows={[
          [
            "档案",
            "CERN CDS；LHC Design Report；2008 事故与修复技术报告",
          ],
          [
            "并行实验",
            "ATLAS、CMS、ALICE、LHCb——主机不可失败，实验组可并行",
          ],
          [
            "治理",
            "成员国理事会；国际出资与接口",
          ],
          ["抽卡", "大科学治理；主机 vs 实验的并行边界"],
        ]}
      />
    </Stack>
  );
}

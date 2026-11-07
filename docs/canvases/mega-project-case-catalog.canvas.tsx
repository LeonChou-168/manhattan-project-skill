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

type Tier = "core" | "extend" | "conditional" | "exclude";
type Domain =
  | "all"
  | "core"
  | "wartime"
  | "space"
  | "compute"
  | "bio"
  | "infra"
  | "conditional"
  | "exclude";

type Case = {
  name: string;
  years: string;
  where: string;
  why: string;
  operator: string;
  archives: string;
  tier: Tier;
  domain: Exclude<Domain, "all" | "core" | "conditional" | "exclude">;
};

const CASES: Case[] = [
  {
    name: "曼哈顿工程",
    years: "1942–1946",
    where: "美/英/加",
    why: "不可预见不确定性下并行探索的原型",
    operator: "双路径、工地隔离、装料接口、Trinity≠发布门",
    archives: "高：NARA RG 326/227，DOE OpenNet，Hewlett",
    tier: "core",
    domain: "space",
  },
  {
    name: "北极星（特种项目办公室）",
    years: "1955–1960",
    where: "美国海军",
    why: "控制导向巨项目的对照，拆掉「大工程=PERT」",
    operator: "组织特权、对外叙事工具≠真实探索方法",
    archives: "中高：Sapolsky，海军 SSP 史",
    tier: "core",
    domain: "space",
  },
  {
    name: "阿波罗",
    years: "1961–1972",
    where: "NASA + 承包商",
    why: "系统工程被做成可复制流程",
    operator: "配置控制、阶段审查、工业承包、试验资格",
    archives: "高：NASA History / NARA RG 255",
    tier: "core",
    domain: "space",
  },
  {
    name: "MIT 辐射实验室（微波雷达）",
    years: "1940–1945",
    where: "美国 / 与英国磁控管衔接",
    why: "与曼哈顿同属 OSRD，但是「实验室→量产」更快的另一条成功路径",
    operator: "科研与生产并行、Tizard 技术转移协议、多型号同时推进",
    archives: "高：OSRD RG 227，MIT 档案，官方雷达史",
    tier: "core",
    domain: "wartime",
  },
  {
    name: "阿特拉斯洲际导弹（Schriever 并发）",
    years: "1954–1959",
    where: "美国空军西区发展部",
    why: "Concurrency：设计、生产、试验重叠，是阿波罗系统管理的直接前身",
    operator: "并发、系统集成承包商、杀线与改型",
    archives: "中高：Johnson《Secret of Apollo》，空军史",
    tier: "core",
    domain: "space",
  },
  {
    name: "ARPANET",
    years: "1966–1975",
    where: "DARPA + 多大学承包商",
    why: "小核心 + 接口契约（RFC）做成可扩展系统",
    operator: "接口代替共享大脑、多承包商并行、协议即装料",
    archives: "高：RFC 本身即档案，IMP 合同，Kleinrock / Heart",
    tier: "core",
    domain: "compute",
  },
  {
    name: "人类基因组计划",
    years: "1990–2003",
    where: "国际 consortium；Celera 为对冲路径",
    why: "数据工厂 + 公私双路径，提前完成",
    operator: "测序产线、开放数据即发布、对冲的商业路径",
    archives: "高：NIH/NHGRI，Wellcome Sanger，DOE JGI",
    tier: "core",
    domain: "bio",
  },
  {
    name: "IBM OS/360（及 System/360 硬件对照）",
    years: "1964–1967",
    where: "IBM",
    why: "软件巨项目的成功交付与管理失败同在，限制「工地无限并行」",
    operator: "概念完整性、沟通成本、外科手术团队、加人更晚",
    archives: "中：Brooks；Charles Babbage Institute；IBM 档案",
    tier: "core",
    domain: "compute",
  },
  {
    name: "两弹一星",
    years: "1955–1970",
    where: "中国",
    why: "封锁条件下缩短战线、大力协同、院所—基地分离；检验算子是否依赖美国制度",
    operator: "一线/二线杀线（铀优先钚缓建）、中央专委拍板、抓总与配套",
    archives: "中：官方综述、中科院回忆、公开党史；原件受限",
    tier: "core",
    domain: "space",
  },
  {
    name: "青霉素战时放大",
    years: "1941–1945",
    where: "英美；USDA Peoria + WPB + 药厂",
    why: "实验室样品变成盟军可供应药物；曾并行「合成 vs 发酵」",
    operator: "双路径、协调者（CMR）不自己生产、选定 20 家放大",
    archives: "高：WPB、NRRL、ACS landmark，医学史论文",
    tier: "extend",
    domain: "wartime",
  },
  {
    name: "美国合成橡胶计划（GR-S）",
    years: "1942–1945",
    where: "政府 + 四大橡胶公司 + 石化 + 大学",
    why: "战略物资被切断后的工业总动员，产量从吨级到近百万吨",
    operator: "强制技术共享、政府规格、多厂复制同一工艺",
    archives: "高：ACS landmark，RFC/WPB 橡胶史",
    tier: "extend",
    domain: "wartime",
  },
  {
    name: "近炸引信（VT / Section T）",
    years: "1940–1945",
    where: "约翰霍普金斯 APL 等",
    why: "高精度电子进入大量炮弹，保密与量产并存",
    operator: "实验室—兵工厂接口、战地试验门",
    archives: "中高：APL 史，OSRD Section T",
    tier: "extend",
    domain: "wartime",
  },
  {
    name: "B-29 超级堡垒",
    years: "1939–1945",
    where: "美国陆军航空队 + 波音等",
    why: "战时第二昂贵武器计划，比曼哈顿还烧钱；生产工程样本",
    operator: "多厂生产、改型并发、与曼哈顿的载具接口（Silverplate）",
    archives: "中高：USAAF 官方史，波音档案",
    tier: "extend",
    domain: "wartime",
  },
  {
    name: "Tizard 使团 / 磁控管转移",
    years: "1940",
    where: "英→美",
    why: "跨主权的技术转移协议，不是工程本体但高度可迁移",
    operator: "伙伴协议、密级、成果归属（魁北克协定同类）",
    archives: "高：英国家档案，OSRD",
    tier: "extend",
    domain: "wartime",
  },
  {
    name: "Tube Alloys（后并入曼哈顿）",
    years: "1941–1943",
    where: "英国",
    why: "MAUD 报告推动美国全力投入；后来被吸收",
    operator: "先发科学评估、不对等合并、魁北克协定",
    archives: "高：UK NA CAB 126 等",
    tier: "extend",
    domain: "space",
  },
  {
    name: "核海军 / 鹦鹉螺号",
    years: "1948–1955",
    where: "Rickover 海军反应堆",
    why: "强集成人把原型变成可复制舰艇产线",
    operator: "一人集成、标准、安全试验门、承包商纪律",
    archives: "中：海军史，Rickover 传记与听证",
    tier: "extend",
    domain: "space",
  },
  {
    name: "SAGE 半自动地面防空",
    years: "1951–1963",
    where: "林肯实验室 / MITRE / IBM",
    why: "实时计算机与组织创新；军事上部分过时仍留下计算遗产",
    operator: "大学—军方—工业，系统建造者，基础设施占比",
    archives: "中高：Hughes《Rescuing Prometheus》",
    tier: "extend",
    domain: "compute",
  },
  {
    name: "民兵导弹 Minuteman",
    years: "1958–1962",
    where: "美国空军",
    why: "固体燃料、标准化、可量产的第二代 ICBM",
    operator: "标准化装料、部署工厂化",
    archives: "中：空军导弹史",
    tier: "extend",
    domain: "space",
  },
  {
    name: "Lockheed Skunk Works（U-2 / SR-71）",
    years: "1955–1960s",
    where: "凯利·约翰逊",
    why: "小团队、高密级、短周期的另一种成功拓扑",
    operator: "反曼哈顿：少工地、强概念完整性、客户直接对接",
    archives: "中：Kelly Johnson 14 条，洛克希德史",
    tier: "extend",
    domain: "space",
  },
  {
    name: "Corona 侦察卫星",
    years: "1959–1972",
    where: "CIA / 空军",
    why: "多次失败后系统成功；试验门与杀线清晰",
    operator: "允许早期失败、胶片返回接口、保密下的集成",
    archives: "中：1990s 解密，NRO 史",
    tier: "extend",
    domain: "space",
  },
  {
    name: "阿波罗制导计算机 / MIT 仪表实验室",
    years: "1961–1969",
    where: "MIT IL + Raytheon",
    why: "软件与硬件共同成为任务关键路径；优先级争夺可作集成样本",
    operator: "核心系统的资源争夺、飞行软件冻结门",
    archives: "高：MIT 档案，NASA SP",
    tier: "extend",
    domain: "compute",
  },
  {
    name: "旅行者号 + 深空网",
    years: "1972–1989 主任务",
    where: "JPL / NASA",
    why: "无人深空的系统工程与长期运行",
    operator: "窗口期截止日期、地面网作为工厂",
    archives: "高：JPL / NASA History",
    tier: "extend",
    domain: "space",
  },
  {
    name: "GPS（Navstar）",
    years: "1973–1995 满星座",
    where: "美国国防部",
    why: "星座型系统：空间、控制、用户三段接口",
    operator: "三段工地、接口 ICD、逐步满部署",
    archives: "中高：空军 / DOD 官方史",
    tier: "extend",
    domain: "space",
  },
  {
    name: "哈勃：失败后的修复计划",
    years: "1990–1993",
    where: "NASA",
    why: "主镜误差是集成失败；修复是独立成功工程",
    operator: "故障调查≠羞辱、在轨维修作为二次 Trinity",
    archives: "高：NASA 调查报告与任务史",
    tier: "extend",
    domain: "space",
  },
  {
    name: "詹姆斯·韦伯空间望远镜",
    years: "1996–2021 发射",
    where: "NASA / ESA / CSA",
    why: "当代超大科学装置：延期超支但最终技术成功",
    operator: "国际伙伴协议、折叠展开试验门、成本爆炸的反面教材",
    archives: "高：GAO 报告，NASA 审查",
    tier: "extend",
    domain: "space",
  },
  {
    name: "国际空间站",
    years: "1993–2011 组装",
    where: "多国",
    why: "接口控制文件（ICD）治国的极端样本",
    operator: "伙伴协议、模块接口、在轨集成",
    archives: "高：NASA / 俄联邦航天，多边备忘录",
    tier: "extend",
    domain: "space",
  },
  {
    name: "LHC 大型强子对撞机",
    years: "1994–2008",
    where: "CERN 多国",
    why: "大科学装置的国际治理与超导/低温工程集成",
    operator: "实验组并行、主机不可失败的试验门、2008 事故后修复",
    archives: "高：CERN 公开文档",
    tier: "extend",
    domain: "bio",
  },
  {
    name: "SEMATECH",
    years: "1987–1990s",
    where: "美国半导体联盟",
    why: "竞争公司强制共享工艺，类似合成橡胶的和平时期版",
    operator: "预竞争合作、标准装料（工艺模块）",
    archives: "中：国会记录，产业史",
    tier: "extend",
    domain: "compute",
  },
  {
    name: "法国打击力量 + 梅斯梅尔核电计划",
    years: "1958–1980s",
    where: "CEA / EDF",
    why: "军用与民用核体系并行建成，国家长期战略样本",
    operator: "标准化反应堆复制、国家业主",
    archives: "中：CEA 史，法国外交解密",
    tier: "extend",
    domain: "space",
  },
  {
    name: "新干线东海道",
    years: "1959–1964",
    where: "日本",
    why: "固定期限（奥运）+ 全新系统（轨距、信号、车辆）一次交付",
    operator: "截止日期锁定范围、系统而非单点创新",
    archives: "中高：日本国铁史，交通史",
    tier: "extend",
    domain: "infra",
  },
  {
    name: "波音 747",
    years: "1965–1969",
    where: "波音 / 泛美",
    why: "赌公司命运的民用巨系统，工厂与飞机同时诞生",
    operator: "客户规格驱动、新厂房即橡树岭、认证试验门",
    archives: "中：波音史，FAA 认证档案",
    tier: "extend",
    domain: "infra",
  },
  {
    name: "Shippingport 核电站",
    years: "1953–1957",
    where: "美国",
    why: "核电从舰用堆转到电网的第一座全尺寸堆",
    operator: "原型→电网的生产工程交接",
    archives: "中：AEC 官方史后续卷",
    tier: "extend",
    domain: "infra",
  },
  {
    name: "巴拿马运河",
    years: "1904–1914（美建）",
    where: "美国",
    why: "法国失败后的重启：卫生、锁、组织重建",
    operator: "先杀失败路径再重建、基础设施优先（卫生）",
    archives: "高：NARA，戈瑟尔斯记录",
    tier: "extend",
    domain: "infra",
  },
  {
    name: "田纳西河谷管理局 TVA",
    years: "1933–1940s",
    where: "美国",
    why: "区域系统建造；后来直接给曼哈顿供电",
    operator: "综合开发、电力作为其他巨项目的工厂条件",
    archives: "高：NARA TVA",
    tier: "extend",
    domain: "infra",
  },
  {
    name: "荷兰三角洲工程",
    years: "1958–1997",
    where: "荷兰",
    why: "国家生存级水利系统，分期可验证交付",
    operator: "分期目标物、可关闭河口的试验与运行",
    archives: "中高：Rijkswaterstaat",
    tier: "extend",
    domain: "infra",
  },
  {
    name: "NSFNET / 互联网骨干升级",
    years: "1985–1995",
    where: "美国",
    why: "ARPANET 之后的平民化产线",
    operator: "骨干作为工厂、承包商运营、协议稳定",
    archives: "高：NSF，RFC",
    tier: "extend",
    domain: "compute",
  },
  {
    name: "神舟载人航天（含前期 921）",
    years: "1992–2003 首飞",
    where: "中国",
    why: "三步走的系统工程，抓总与分系统明确",
    operator: "阶段门、飞船—火箭—测控三工地",
    archives: "中：公开工程总结、航天史",
    tier: "extend",
    domain: "space",
  },
  {
    name: "北斗",
    years: "1994–2020 全球网",
    where: "中国",
    why: "分代部署的星座工程，与 GPS 对照",
    operator: "区域先于全球、三段接口、逐步杀早期一代",
    archives: "中：公开白皮书与工程报道",
    tier: "extend",
    domain: "space",
  },
  {
    name: "嫦娥探月",
    years: "2004–",
    where: "中国",
    why: "绕落回分阶段，每步是可验证目标物",
    operator: "阶段门清晰、失败可复盘（嫦娥 1 之后的体系）",
    archives: "中：探月工程公开报告",
    tier: "extend",
    domain: "space",
  },
  {
    name: "中国高速铁路（规模化阶段）",
    years: "2004–2012 成网关键期",
    where: "中国",
    why: "引进—消化—再创新后的系统复制，不是单条线路",
    operator: "标准装料（轨道/信号/车辆）、工厂化复制",
    archives: "中：规划文件、工程史；需避开宣传口径",
    tier: "extend",
    domain: "infra",
  },
  {
    name: "两弹一艇中的核潜艇",
    years: "1958–1974 左右",
    where: "中国",
    why: "原子弹成功后才迎来核潜艇春天，展示杀线与再开线",
    operator: "缩短战线后再开第二目标物",
    archives: "低到中：公开综述有限",
    tier: "conditional",
    domain: "space",
  },
  {
    name: "苏联原子计划",
    years: "1943–1949",
    where: "苏联",
    why: "对照情报加速与集中体制；不是复制对象",
    operator: "情报作为第二条路径（不可当道德模板）",
    archives: "中低：部分解密，俄语为主",
    tier: "conditional",
    domain: "space",
  },
  {
    name: "斯普特尼克 / 东方号",
    years: "1957–1961",
    where: "苏联",
    why: "先发空间成功，组织史料弱于美国",
    operator: "首席设计师制 vs 系统管理",
    archives: "中低",
    tier: "conditional",
    domain: "space",
  },
  {
    name: "自由轮",
    years: "1941–1945",
    where: "美国",
    why: "生产工程极致，科学不确定性低",
    operator: "标准化、焊接产线、学习曲线；不支撑双路径算子",
    archives: "高，但机制过窄",
    tier: "conditional",
    domain: "wartime",
  },
  {
    name: "州际公路网",
    years: "1956–",
    where: "美国",
    why: "巨额成功，技术不确定低，政治与征地是主问题",
    operator: "标准截面复制；对「不可预见技术」帮助小",
    archives: "高",
    tier: "conditional",
    domain: "infra",
  },
  {
    name: "英法海峡隧道",
    years: "1987–1994",
    where: "英法",
    why: "交付了，但成本与财务失败；Flyvbjerg 样本",
    operator: "技术成功≠项目成功；发布/财务门",
    archives: "高",
    tier: "conditional",
    domain: "infra",
  },
  {
    name: "协和飞机",
    years: "1962–1976",
    where: "英法",
    why: "技术目标达到，商业失败",
    operator: "技术 Trinity 通过仍可在市场上杀线",
    archives: "中高",
    tier: "conditional",
    domain: "infra",
  },
  {
    name: "航天飞机",
    years: "1972–2011",
    where: "NASA",
    why: "可重复使用部分兑现，两次灾难；不能当无条件成功",
    operator: "运行阶段的安全门被进度侵蚀",
    archives: "高：Rogers / CAIB 报告必读",
    tier: "conditional",
    domain: "space",
  },
  {
    name: "三峡工程",
    years: "1994–2006 蓄水",
    where: "中国",
    why: "交付了电力与航运目标，争议大，组织史料偏官方",
    operator: "分期围堰等试验门；移民与生态不进入成功模板",
    archives: "中低（公开可核验的决策档案少）",
    tier: "conditional",
    domain: "infra",
  },
  {
    name: "港珠澳大桥",
    years: "2009–2018",
    where: "中国",
    why: "岛隧系统集成成功；不确定主要在施工而非科学",
    operator: "沉管接口、三地法规伙伴协议",
    archives: "中",
    tier: "conditional",
    domain: "infra",
  },
  {
    name: "伽利略导航（欧盟）",
    years: "1999–2016 初始服务",
    where: "欧盟",
    why: "多次重组后交付，对照 GPS/北斗的治理差异",
    operator: "多国治理下的杀线与重启",
    archives: "中：欧账院报告",
    tier: "conditional",
    domain: "space",
  },
  {
    name: "Iridium 星座",
    years: "1990s；破产后重生",
    where: "摩托罗拉等",
    why: "技术星座成功、公司破产，后来复活",
    operator: "发布门含商业；技术就绪仍可「死」",
    archives: "中：商业与 FCC 档案",
    tier: "conditional",
    domain: "space",
  },
  {
    name: "Operation Warp Speed",
    years: "2020–2021",
    where: "美国",
    why: "当代双路径（多平台疫苗并行采购）极像曼哈顿逻辑",
    operator: "并行下注、预购即工厂、试验门（三期）与紧急使用授权分离",
    archives: "中：过近，档案未冷，政治噪声大",
    tier: "conditional",
    domain: "bio",
  },
  {
    name: "FAST 五百米射电望远镜",
    years: "2011–2016",
    where: "中国",
    why: "大科学装置成功；单点工程色彩重于多工地",
    operator: "大科学业主+承包",
    archives: "中",
    tier: "conditional",
    domain: "bio",
  },
  {
    name: "波士顿中央动脉 / Big Dig",
    years: "1982–2007",
    where: "美国",
    why: "Hughes 第四案例；超支延期的城市巨项目",
    operator: "利益相关方复杂时，战时方法失效",
    archives: "高，但是失败对照而非成功模板",
    tier: "conditional",
    domain: "infra",
  },
];

const EXCLUDED: Array<{ name: string; reason: string }> = [
  { name: "ITER、人类脑计划", reason: "尚未以原目标完成，不能当成功案例" },
  { name: "SDI 星球大战", reason: "未交付宣称能力" },
  { name: "超音速运输机 SST（美）、A380 作为商业计划", reason: "未达持续成功标准" },
  { name: "三里岛 / 切尔诺贝利 / 福岛", reason: "事故对照，可作安全门反例，不算成功工程" },
  { name: "V-2 / 纳粹火箭工程", reason: "有技术史，不作为可采纳成功模板" },
  { name: "未解密的当代晶圆厂、星链等", reason: "档案未冷，无法核验组织过程" },
  { name: "Linux、维基百科、开源社区", reason: "不是有截止日期的计划型巨工程" },
  { name: "单纯地标建筑、世博场馆", reason: "规模大但无技术路径不确定" },
  { name: "宣传口径下的「伟大工程」清单", reason: "E 级材料，不能单独支撑算子" },
];

function visible(domain: Domain): Case[] {
  if (domain === "all") return CASES.filter((c) => c.tier !== "exclude");
  if (domain === "core") return CASES.filter((c) => c.tier === "core");
  if (domain === "conditional") return CASES.filter((c) => c.tier === "conditional");
  if (domain === "exclude") return [];
  return CASES.filter((c) => c.domain === domain && c.tier !== "conditional");
}

export default function MegaProjectCaseCatalog() {
  const [domain, setDomain] = useCanvasState<Domain>("domain", "all");
  const rows = visible(domain);
  const coreN = CASES.filter((c) => c.tier === "core").length;
  const extN = CASES.filter((c) => c.tier === "extend").length;
  const condN = CASES.filter((c) => c.tier === "conditional").length;

  return (
    <Stack gap={24}>
      <Stack gap={8}>
        <H1>可采纳的超大型成功工程案例</H1>
        <Text tone="secondary">
          「可采纳」= 交付了可验证目标物，且组织过程有公开史料，能支撑并行 / 工地 /
          接口 / 试验 / 杀线 / 拍板中至少两项。武器与争议工程只采纳组织机制，不把伤害或政治动员写成成功经验。子系统（橡树岭、土星五号）并入母计划，不重复计。
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value={String(coreN)} label="核心：写 skill 必用" />
        <Stat value={String(extN)} label="扩展：机制独特，第二波" />
        <Stat value={String(condN)} label="有条件：史料弱或成功有保留" />
        <Stat value={String(CASES.length)} label="可点名讨论的案例总数" />
      </Grid>

      <Callout tone="info" title="不要把此表当阅读任务">
        第一波仍然只深挖核心 9 个。其余是名录：需要某条算子的第二个证据时再打开对应档案，避免百科式收集。
      </Callout>

      <Row gap={8} wrap>
        <Pill active={domain === "all"} onClick={() => setDomain("all")}>
          全部可采纳
        </Pill>
        <Pill active={domain === "core"} onClick={() => setDomain("core")}>
          核心
        </Pill>
        <Pill active={domain === "wartime"} onClick={() => setDomain("wartime")}>
          战时动员
        </Pill>
        <Pill active={domain === "space"} onClick={() => setDomain("space")}>
          核导航天
        </Pill>
        <Pill active={domain === "compute"} onClick={() => setDomain("compute")}>
          计算网络
        </Pill>
        <Pill active={domain === "bio"} onClick={() => setDomain("bio")}>
          生命与大科学
        </Pill>
        <Pill active={domain === "infra"} onClick={() => setDomain("infra")}>
          交通能源
        </Pill>
        <Pill active={domain === "conditional"} onClick={() => setDomain("conditional")}>
          有条件
        </Pill>
        <Pill active={domain === "exclude"} onClick={() => setDomain("exclude")}>
          不列入
        </Pill>
      </Row>

      {domain === "exclude" ? (
        <Stack gap={8}>
          <H2>明确不列入成功模板</H2>
          <Table
            headers={["对象", "原因"]}
            rows={EXCLUDED.map((e) => [e.name, e.reason])}
          />
        </Stack>
      ) : (
        <Stack gap={8}>
          <H2>
            {domain === "all"
              ? "全部可采纳（核心 + 扩展 + 有条件）"
              : domain === "core"
                ? "核心 9 项"
                : `${rows.length} 项`}
          </H2>
          <Table
            headers={["案例", "年份", "地点", "采纳理由", "主要可抽算子", "档案", "级别"]}
            rows={rows.map((c) => [
              c.name,
              c.years,
              c.where,
              c.why,
              c.operator,
              c.archives,
              c.tier === "core" ? "核心" : c.tier === "extend" ? "扩展" : "有条件",
            ])}
          />
        </Stack>
      )}

      <Text size="small" tone="tertiary">
        统计口径：独立计划才单列。曼哈顿的 Y-12/K-25、阿波罗的土星五号、两弹一星的 596 / 东方红一号不另计。OS/360
        作为核心是因为软件限制条件，不是因为它管理完美。Big Dig、航天飞机、海峡隧道放在有条件，用作「交付了但不能当无保留成功」。
      </Text>
    </Stack>
  );
}

import {
  BarChart,
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Link,
  PieChart,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useCanvasState,
  useHostTheme,
} from "cursor/canvas";

type Tab = "overview" | "timeline" | "sites" | "legacy";

export default function ManhattanProject() {
  const [tab, setTab] = useCanvasState<Tab>("tab", "overview");

  return (
    <Stack gap={24}>
      <Stack gap={8}>
        <H1>曼哈顿工程</H1>
        <Text tone="secondary">
          第二次世界大战期间，美国主导、英国与加拿大协作的核武器研制计划。军方番号为陆军工程兵团曼哈顿工区（Manhattan
          Engineer District）；格罗夫斯将军 1942–1946
          年总管全局，奥本海默主持洛斯阿拉莫斯的武器设计。
        </Text>
      </Stack>

      <Row gap={8} wrap>
        <Pill active={tab === "overview"} onClick={() => setTab("overview")}>
          概览
        </Pill>
        <Pill active={tab === "timeline"} onClick={() => setTab("timeline")}>
          时间线
        </Pill>
        <Pill active={tab === "sites"} onClick={() => setTab("sites")}>
          工地与装置
        </Pill>
        <Pill active={tab === "legacy"} onClick={() => setTab("legacy")}>
          遗产
        </Pill>
      </Row>

      {tab === "overview" ? <Overview /> : null}
      {tab === "timeline" ? <Timeline /> : null}
      {tab === "sites" ? <SitesAndWeapons /> : null}
      {tab === "legacy" ? <Legacy /> : null}

      <Text size="small" tone="tertiary">
        主要依据：美国能源部、国家公园管理局曼哈顿工程国家历史公园时间线、英文维基百科《Manhattan
        Project》成本表（截至 1945-12-31）。伤亡为区间估计，各机构统计口径不同。
      </Text>
    </Stack>
  );
}

function Overview() {
  return (
    <Stack gap={24}>
      <Grid columns={4} gap={16}>
        <Stat value="13 万" label="峰值雇员人数" />
        <Stat value="$18.9 亿" label="至 1945 年底支出（当年美元）" />
        <Stat value="84%" label="橡树岭 + 汉福德占总支出" />
        <Stat value="3" label="战时起爆装置（含试验）" />
      </Grid>

      <Callout tone="info" title="名称从何而来">
        工区最初总部设在纽约曼哈顿。军方工程番号沿用下来，逐渐成为整个计划的代称，取代更早的保密名“替代材料开发”（Development
        of Substitute Materials）。英国对应计划“合金管”（Tube Alloys）后来并入其中。
      </Callout>

      <Grid columns="1.1fr 1fr" gap={24} align="start">
        <Stack gap={8}>
          <H2>支出构成</H2>
          <Text size="small" tone="secondary">
            截至 1945 年 12 月 31 日，百万 1945 美元。合计 $1,890M；移交原子能委员会时累计约
            $2,191M。
          </Text>
          <PieChart
            donut
            size={220}
            data={[
              { label: "橡树岭", value: 1188 },
              { label: "汉福德", value: 390 },
              { label: "其他", value: 312 },
            ]}
          />
          <Text size="small" tone="tertiary">
            来源：维基百科成本表 · 1945 日历年截止。其他 =
            特种运行材料 $103M + 洛斯阿拉莫斯 $74M + 研发 $70M + 政府开销 $37M +
            重水厂 $27M。
          </Text>
        </Stack>

        <Stack gap={8}>
          <H2>各站点支出</H2>
          <Text size="small" tone="secondary">
            横轴：站点；纵轴：支出（百万 1945 美元）
          </Text>
          <BarChart
            horizontal
            height={240}
            categories={[
              "橡树岭",
              "汉福德",
              "特种材料",
              "洛斯阿拉莫斯",
              "研发",
              "政府开销",
              "重水厂",
            ]}
            series={[
              {
                name: "支出（百万 1945 美元）",
                data: [1188, 390, 103, 74, 70, 37, 27],
              },
            ]}
            valuePrefix="$"
            showValues
          />
          <Text size="small" tone="tertiary">
            来源：同上。峰值月份为 1944 年 8 月，当月支出 $1.114 亿。战时每枚弹平均成本约 $5
            亿（按三枚实用装置计）。
          </Text>
        </Stack>
      </Grid>

      <Stack gap={8}>
        <H2>两条装料路线</H2>
        <Text>
          计划同时押注高浓铀与钚。超过八成经费花在把天然铀变成可用装料的工厂，而不是弹体本身。1944
          年确认汉福德产钚含过多钚-240，枪式钚弹不可行，洛斯阿拉莫斯遂把内爆设计升为第一优先级。
        </Text>
        <Grid columns={2} gap={16}>
          <Card>
            <CardHeader trailing={<Pill size="sm">Little Boy</Pill>}>
              铀路线 · 橡树岭
            </CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Text>
                  天然铀（约 0.7% 铀-235）在克林顿工程工区用热扩散、气体扩散、电磁分离串联提纯，得到武器级高浓铀。
                </Text>
                <Text size="small" tone="secondary">
                  S-50 热扩散 → K-25 气体扩散 → Y-12 电磁分离（calutron）。枪式结构相对简单，未做全当量试验即用于广岛。
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader trailing={<Pill size="sm">Gadget / Fat Man</Pill>}>
              钚路线 · 汉福德
            </CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Text>
                  石墨反应堆把铀-238 转成钚-239，再化学分离。芝加哥堆验证原理，橡树岭 X-10
                  做中试，汉福德 B 堆进入工业规模。
                </Text>
                <Text size="small" tone="secondary">
                  内爆需炸药透镜把钚芯压到超临界。1945 年 7 月 16 日在新墨西哥州三位一体试验场首次核爆炸。
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={8}>
        <H2>指挥结构</H2>
        <Table
          headers={["角色", "人物", "职责"]}
          rows={[
            ["军政总指挥", "莱斯利·格罗夫斯", "选址、承包、保密、生产与投放全权"],
            ["洛斯阿拉莫斯主任", "J. 罗伯特·奥本海默", "武器物理、设计与组装（Y 计划）"],
            ["科研动员", "万尼瓦尔·布什 / 詹姆斯·科南特", "OSRD / NDRC，对接白宫与军方"],
            ["芝加哥冶金实验室", "阿瑟·康普顿 / 恩里科·费米", "反应堆与钚化学路径"],
            ["电磁分离", "欧内斯特·劳伦斯", "伯克利辐射实验室，Y-12 calutron"],
            ["钚化学", "格伦·西博格", "分离流程，支撑汉福德放化工厂"],
          ]}
        />
      </Stack>
    </Stack>
  );
}

function TimelineItem({
  date,
  title,
  body,
}: {
  date: string;
  title: string;
  body: string;
}) {
  const theme = useHostTheme();
  return (
    <Row gap={16} align="start">
      <Text
        size="small"
        tone="tertiary"
        style={{ width: 88, flexShrink: 0, paddingTop: 2 }}
      >
        {date}
      </Text>
      <div
        style={{
          width: 1,
          alignSelf: "stretch",
          background: theme.stroke.tertiary,
          flexShrink: 0,
        }}
      />
      <Stack gap={4} style={{ minWidth: 0, flex: 1 }}>
        <Text weight="semibold">{title}</Text>
        <Text size="small" tone="secondary">
          {body}
        </Text>
      </Stack>
    </Row>
  );
}

function Timeline() {
  return (
    <Stack gap={20}>
      <Text>
        科学准备从 1938 年核裂变发现开始；作为工程计划，曼哈顿工区 1942 年夏成立，1947 年 1
        月 1 日移交原子能委员会。
      </Text>

      <H3>起源</H3>
      <Stack gap={14}>
        <TimelineItem
          date="1938.12"
          title="柏林发现核裂变"
          body="哈恩与施特拉斯曼用中子轰击铀，迈特纳与弗里施给出裂变解释。西拉德随即意识到链式反应与武器可能。"
        />
        <TimelineItem
          date="1939.08"
          title="爱因斯坦—西拉德信"
          body="信送达罗斯福，警告德国可能研制铀武器，促成铀顾问委员会。美国此时投入仍很小。"
        />
        <TimelineItem
          date="1941.02"
          title="西博格发现钚"
          body="钚-239 被证明可裂变，后来成为汉福德路线的核芯。同年英国 MAUD 报告认定原子弹在战时可制成。"
        />
        <TimelineItem
          date="1941.12"
          title="珍珠港之后全面开战"
          body="美国对日、德宣战。1942 年 1 月罗斯福批准全力研制原子弹。"
        />
      </Stack>

      <H3>工程化</H3>
      <Stack gap={14}>
        <TimelineItem
          date="1942.06"
          title="曼哈顿工区成立"
          body="6 月 18 日陆军工程兵团设立工区。8 月正式编号。9 月 17 日格罗夫斯接手，次日选定橡树岭。"
        />
        <TimelineItem
          date="1942.12.02"
          title="芝加哥 1 号堆临界"
          body="费米在芝加哥大学斯塔格球场看台下建成世界第一座可控链式反应装置 CP-1，证明反应堆路线可行。"
        />
        <TimelineItem
          date="1943 春"
          title="三处秘密城开工"
          body="橡树岭浓缩铀，汉福德产钚，洛斯阿拉莫斯（Y 计划）设计炸弹。魁北克协定恢复英美核合作。"
        />
        <TimelineItem
          date="1944.09.26"
          title="汉福德 B 堆临界"
          body="世界首座工业规模钚生产堆。1945 年 2 月满功率。橡树岭 X-10 石墨堆已于 1943 年 11 月临界。"
        />
      </Stack>

      <H3>试验与投放</H3>
      <Stack gap={14}>
        <TimelineItem
          date="1945.04.12"
          title="罗斯福去世"
          body="杜鲁门次日才得知这项计划。德国已于 5 月投降；目标转向日本。史汀生否决京都，长崎补入目标名单。"
        />
        <TimelineItem
          date="1945.07.16"
          title="三位一体试验"
          body="新墨西哥州阿拉莫戈多附近引爆钚内爆装置 Gadget，人类第一次核爆炸，当量约 2.1 万吨 TNT。"
        />
        <TimelineItem
          date="1945.08.06"
          title="广岛"
          body="B-29「埃诺拉·盖」投下枪式铀弹 Little Boy，爆炸高度约 530 米，当量约 1.3 万吨 TNT。"
        />
        <TimelineItem
          date="1945.08.09"
          title="长崎"
          body="B-29「博克斯卡」原定小仓，因云层改投次要目标。钚内爆弹 Fat Man 当量约 2.1 万吨 TNT。"
        />
        <TimelineItem
          date="1945.08.15"
          title="日本宣布投降"
          body="东京时间 15 日（美国东部 14 日）广播接受波茨坦公告。9 月 2 日密苏里号签署投降书。"
        />
      </Stack>
    </Stack>
  );
}

function SitesAndWeapons() {
  return (
    <Stack gap={24}>
      <Stack gap={8}>
        <H2>三处核心工地</H2>
        <Text size="small" tone="secondary">
          此外还有芝加哥冶金实验室、伯克利辐射实验室、哥伦比亚大学、加拿大乔克河与特雷尔重水厂等数十处支援设施。
        </Text>
      </Stack>

      <Table
        headers={["工地", "代号", "主任务", "峰值规模", "关键装置"]}
        rows={[
          [
            "橡树岭，田纳西",
            "Site X / CEW",
            "铀同位素分离；工区总部后迁此",
            "约 8.2 万人（1945.05）",
            "Y-12、K-25、S-50、X-10",
          ],
          [
            "汉福德，华盛顿",
            "Site W / HEW",
            "石墨堆产钚与化学分离",
            "营地近 5.1 万人（1944.07）",
            "B 堆及后续堆、T 厂",
          ],
          [
            "洛斯阿拉莫斯，新墨西哥",
            "Site Y",
            "弹体设计、炸药、组装与试验",
            "数千名科研与军工人员",
            "Gadget、Little Boy、Fat Man",
          ],
        ]}
        rowTone={["info", "warning", "neutral"]}
      />

      <Grid columns={3} gap={12}>
        <Card>
          <CardHeader>橡树岭为何在此</CardHeader>
          <CardBody>
            <Text size="small">
              田纳西河谷管理局供电充足，河流可冷却，且相对远离大城市。格罗夫斯上任次日即去踏勘。征地驱离约千户农家。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>汉福德为何在此</CardHeader>
          <CardBody>
            <Text size="small">
              杜邦要求远离橡树岭。哥伦比亚河提供冷却水，地广人稀。联邦迁走约 1,500
              名居民及当地原住民对土地的使用。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>洛斯阿拉莫斯为何在此</CardHeader>
          <CardBody>
            <Text size="small">
              奥本海默推荐新墨西哥高地，隔离且他在附近有牧场。实验室由加州大学代军方运营，对外称“山丘”或 Y 计划。
            </Text>
          </CardBody>
        </Card>
      </Grid>

      <Stack gap={8}>
        <H2>三枚战时装置</H2>
        <Text size="small" tone="secondary">
          当量以 TNT 千吨计，为战后修订估值。广岛、长崎是迄今仅有的实战核打击。
        </Text>
        <Table
          headers={["装置", "类型", "装料", "当量", "日期", "地点"]}
          columnAlign={["left", "left", "left", "right", "left", "left"]}
          rows={[
            ["Gadget", "内爆", "钚-239", "~21 kt", "1945-07-16", "三位一体试验场"],
            ["Little Boy", "枪式", "铀-235", "~13 kt", "1945-08-06", "广岛"],
            ["Fat Man", "内爆", "钚-239", "~21 kt", "1945-08-09", "长崎（小仓为第一目标）"],
          ]}
          rowTone={["neutral", "danger", "danger"]}
        />
      </Stack>

      <Callout tone="danger" title="人员伤亡（年底累计，区间估计）">
        广岛：约 9–16.6 万人；长崎：约 6–8
        万人。含当场死亡与当年内因烧伤、创伤和急性放射病死亡者。统计因户籍烧毁、流动人口与强征劳工而不精确。两城建筑大面积烧毁；长崎因山谷地形，毁伤范围小于同等当量的广岛。
      </Callout>

      <Stack gap={8}>
        <H2>投放链条</H2>
        <Table
          headers={["环节", "单位 / 人物", "要点"]}
          rows={[
            ["载机改装", "Silverplate B-29", "当时美军唯一能改装携带该弹体的量产轰炸机"],
            ["作战部队", "第 509 混合大队 · 蒂贝茨", "犹他温多弗训练，1945 年 7 月进驻提尼安"],
            ["弹体护航", "印第安纳波利斯号等", "Little Boy 部件 7 月 16 日离美，26 日抵提尼安"],
            ["广岛任务", "埃诺拉·盖 · 帕森斯在空中装保险", "避免起飞坠毁造成核爆"],
            ["长崎任务", "博克斯卡 · 斯威尼", "小仓三圈看不到，燃油将尽改飞长崎"],
          ]}
        />
      </Stack>
    </Stack>
  );
}

function Legacy() {
  return (
    <Stack gap={20}>
      <Text>
        计划在保密状态下建成相当于一个汽车工业体量的生产体系。《生活》杂志战后估计，全国只有几十人知道全貌，约千人知道与原子有关；十余万工人“像鼹鼠一样在黑暗中工作”。
      </Text>

      <H2>制度交接</H2>
      <Table
        headers={["时间", "事件", "意义"]}
        rows={[
          [
            "1946.08",
            "麦克马洪法（原子能法）",
            "核控制权转交文官；英美战时合作中断，英国后走独立核武道路",
          ],
          [
            "1947.01.01",
            "原子能委员会（AEC）接管",
            "曼哈顿工区财产与人员移交；工区番号 1947 年 8 月撤销",
          ],
          [
            "1946.07",
            "十字路口行动",
            "比基尼环礁两次 Fat Man 型试验，检验对舰效果，国际观摩",
          ],
          [
            "1946",
            "巴鲁克计划未获通过",
            "向联合国提出国际管制原子能，冷战对立下失败",
          ],
        ]}
      />

      <H2>科学与政治分裂</H2>
      <Stack gap={8}>
        <Text>
          部分参与者随即转向公开倡导国际管制：玻尔、布什、科南特等呼吁不能把核武当作普通军备。1945
          年创办《原子科学家公报》，1946 年成立原子科学家紧急委员会。奥本海默战后主持 AEC
          总顾问委员会，后在氢弹与安全听证中与特勒、斯特劳斯激烈冲突。
        </Text>
        <Text>
          英国代表团中的克劳斯·富克斯等向苏联传递情报，加速了对方核计划。美国 1949
          年失去核垄断，军备竞赛成为冷战主轴之一。
        </Text>
      </Stack>

      <H2>物质遗产</H2>
      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader>继续运转的实验室</CardHeader>
          <CardBody>
            <Text size="small">
              洛斯阿拉莫斯在布拉德伯里领导下延续至今。橡树岭国家实验室由 X-10
              演变而来。汉福德成为美国最大的核清理场地之一，反应堆沿哥伦比亚河留下长期环境问题。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>国家历史公园</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text size="small">
                2015 年设立曼哈顿工程国家历史公园，覆盖橡树岭、洛斯阿拉莫斯与汉福德三处，由国家公园管理局与能源部共管。
              </Text>
              <Link href="https://www.nps.gov/mapr/learn/historyculture/timeline.htm">
                NPS 官方时间线
              </Link>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Callout tone="neutral" title="在战争开支中的位置">
        至 1945 年 10 月 1 日累计约 $18.45
        亿，相当于当时不到九天的战争总开支。它是美国战时第二昂贵的武器计划，仅次于 B-29
        超级堡垒。对广岛、长崎是否“缩短战争、避免登陆”的史学争论持续至今，与苏联对日宣战、日本内部政治崩溃交织，没有单一因果。
      </Callout>
    </Stack>
  );
}

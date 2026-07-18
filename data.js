window.DASHBOARD_DATA = {
  meta: {
    version: "2.0",
    generated_at: "2026-07-18 21:30",
    brand_short: "菜",
    brand_long: "CAI-OS",
    greeting: "向上",
    owner: "一棵菜"
  },

  // ================= 4 个领域（左侧侧栏 + 底部仪表盘） =================
  domains: [
    { id: "d-sage", name: "求职学习", color_token: "sage", icon_glyph: "求" },
    { id: "d-blue", name: "思考表达", color_token: "blue", icon_glyph: "思" },
    { id: "d-pink", name: "自我成长", color_token: "pink", icon_glyph: "我" },
    { id: "d-sand", name: "生活运营", color_token: "sand", icon_glyph: "生" }
  ],

  // ================= 今日时间轴（空，等你填装） =================
  timeline: [],

  // ================= 今日任务池（空，等你从大台账挑今日事项） =================
  tasks: [],

  // ================= 习惯（本轮先不放，后续再加） =================
  habits: [],

  // ================= 收件箱 / 待澄清 =================
  inbox: [],

  // ================= 项目（19 个 + 大 TODO） =================
  projects: [
    {
      id: "p-01",
      name: "书籍+播客+见闻→思考",
      short_label: "书",
      domain: "d-blue",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "blue",
      waiting: []
    },
    {
      id: "p-02",
      name: "形象管理",
      short_label: "形",
      domain: "d-pink",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "pink",
      waiting: []
    },
    {
      id: "p-03",
      name: "求职底层世界观",
      short_label: "求",
      domain: "d-sage",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "sage",
      waiting: []
    },
    {
      id: "p-04",
      name: "待办清单（大 TODO 台账）",
      short_label: "TODO",
      domain: "d-sand",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [
      {
        "title": "✅ SYV 研究流程",
        "done": true
      },
      {
        "title": "✅ 苹果订阅取消",
        "done": true
      },
      {
        "title": "META-01 荷兰求职工签（12 动作拆解）",
        "done": false
      },
      {
        "title": "✅ AI 副业变现体系（已出 v1）",
        "done": true
      },
      {
        "title": "💤 夏鹏职场课重构（暂缓冻结）",
        "done": false
      },
      {
        "title": "✅ FrieslandCampina BA Portal 直投",
        "done": true
      },
      {
        "title": "✅ Stolt Manager LinkedIn 冷触达",
        "done": true
      },
      {
        "title": "✅ 30 家清单补 8-10 家",
        "done": true
      },
      {
        "title": "✅ Recommendation 邮件截图入档",
        "done": true
      },
      {
        "title": "✅ Elevator Speech 平衡版 v0.2 归档",
        "done": true
      },
      {
        "title": "✅ Q01 STAR 答题",
        "done": true
      },
      {
        "title": "✅ Q04 PREP+FABE 答题",
        "done": true
      },
      {
        "title": "09-07 前累计 40+ 投递",
        "done": false
      },
      {
        "title": "10-07 前累计 60+ 投递",
        "done": false
      },
      {
        "title": "AI 副业拆解方案 v1 起草",
        "done": false
      },
      {
        "title": "💤 盘点夏鹏课模块结构（冻结）",
        "done": false
      },
      {
        "title": "💤 定夏鹏课每周一个模块输出机制（冻结）",
        "done": false
      }
    ],
    "progress_percent": null,
    "color_token": "sand",
    "waiting": [],
      progress_percent: null,
      color_token: "sand",
      is_master_todo: true,
      waiting: []
    },
    {
      id: "p-05",
      name: "拆解一切",
      short_label: "拆",
      domain: "d-blue",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "blue",
      waiting: []
    },
    {
      id: "p-06",
      name: "健康饮食",
      short_label: "健",
      domain: "d-sand",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "sand",
      waiting: []
    },
    {
      id: "p-07",
      name: "财富中心",
      short_label: "财",
      domain: "d-sand",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "sand",
      waiting: []
    },
    {
      id: "p-08",
      name: "关于我",
      short_label: "我",
      domain: "d-pink",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "pink",
      waiting: []
    },
    {
      id: "p-09",
      name: "我的美好人生",
      short_label: "美",
      domain: "d-pink",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "pink",
      waiting: []
    },
    {
      id: "p-10",
      name: "逻辑 & 表达",
      short_label: "逻",
      domain: "d-blue",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "blue",
      waiting: []
    },
    {
      id: "p-11",
      name: "English 日常陪练",
      short_label: "E陪",
      domain: "d-sage",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "sage",
      waiting: []
    },
    {
      id: "p-12",
      name: "商业分析案例",
      short_label: "商",
      domain: "d-blue",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "blue",
      waiting: []
    },
    {
      id: "p-13",
      name: "AI 学习",
      short_label: "AI",
      domain: "d-sage",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "sage",
      waiting: []
    },
    {
      id: "p-14",
      name: "日记 & 人生导师",
      short_label: "日",
      domain: "d-pink",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "pink",
      waiting: []
    },
    {
      id: "p-15",
      name: "English Learning",
      short_label: "E学",
      domain: "d-sage",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "sage",
      waiting: []
    },
    {
      id: "p-16",
      name: "Decision Life",
      short_label: "D",
      domain: "d-blue",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "blue",
      waiting: []
    },
    {
      id: "p-17",
      name: "心理分析",
      short_label: "心",
      domain: "d-pink",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "pink",
      waiting: []
    },
    {
      id: "p-18",
      name: "国内 backup",
      short_label: "备",
      domain: "d-sand",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "sand",
      waiting: []
    },
    {
      id: "p-19",
      name: "职场教练 skill",
      short_label: "职",
      domain: "d-sage",
      stage: "构思中",
      next_step: "",
      deadline: null,
      subtasks: [],
      progress_percent: null,
      color_token: "sage",
      waiting: []
    }
  ]
};

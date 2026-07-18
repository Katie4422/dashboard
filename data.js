/**
 * 个人生活看板 - 数据文件 v4
 * v4（2026-07-19）：p-04 全量 17 条 + p-15 详情 + Modal 层支持
 *   - p-15 新增 description / monthly_anchors / sections 字段
 *   - tasks 池移除 AI+星盘 · 新增 🔥 07-19 私教回放总结
 */
window.DASHBOARD_DATA = {
  "meta": {
    "version": "4.0",
    "generated_at": "2026-07-19 03:10",
    "brand_short": "菜",
    "brand_long": "CAI-OS",
    "greeting": "向上",
    "owner": "一棵菜"
  },
  "domains": [
    {
      "id": "d-sage",
      "name": "求职学习",
      "color_token": "sage",
      "icon_glyph": "求"
    },
    {
      "id": "d-blue",
      "name": "思考表达",
      "color_token": "blue",
      "icon_glyph": "思"
    },
    {
      "id": "d-pink",
      "name": "自我成长",
      "color_token": "pink",
      "icon_glyph": "我"
    },
    {
      "id": "d-sand",
      "name": "生活运营",
      "color_token": "sand",
      "icon_glyph": "生"
    }
  ],
  "timeline": [],
  "tasks": [
    {
      "id": "t-u001",
      "title": "SYV 研究流程",
      "project_name": "大 TODO",
      "color_token": "sand"
    },
    {
      "id": "t-u002",
      "title": "苹果订阅取消 · 联系客服",
      "project_name": "大 TODO",
      "color_token": "sand"
    },
    {
      "id": "t-fcba",
      "title": "FrieslandCampina BA Portal 直投",
      "project_name": "求职",
      "color_token": "sage"
    },
    {
      "id": "t-stli",
      "title": "Stolt Manager LinkedIn cold outreach",
      "project_name": "求职",
      "color_token": "sage"
    },
    {
      "id": "t-a1",
      "title": "30 家清单补 8-10 家（Danone/FC/DHL/Vopak）",
      "project_name": "求职",
      "color_token": "sage"
    },
    {
      "id": "t-b5",
      "title": "Recommendation 邮件/截图入档",
      "project_name": "求职",
      "color_token": "sage"
    },
    {
      "id": "t-elev",
      "title": "Elevator Speech 平衡版 v0.2 归档",
      "project_name": "求职",
      "color_token": "sage"
    },
    {
      "id": "t-q01",
      "title": "Q01 STAR 答题（Stolt intern conflict）",
      "project_name": "求职",
      "color_token": "sage"
    },
    {
      "id": "t-q04",
      "title": "Q04 PREP+FABE 答题（Vitol coffee chat）",
      "project_name": "求职",
      "color_token": "sage"
    },
    {
      "id": "t-eng-0719",
      "title": "🔥 07-19 私教回放做本次总结",
      "project_name": "English Learning",
      "color_token": "sage"
    }
  ],
  "habits": [],
  "inbox": [],
  "projects": [
    {
      "id": "p-01",
      "name": "书籍+播客+见闻→思考",
      "short_label": "书",
      "domain": "d-blue",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "blue",
      "waiting": []
    },
    {
      "id": "p-02",
      "name": "形象管理",
      "short_label": "形",
      "domain": "d-pink",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "pink",
      "waiting": []
    },
    {
      "id": "p-03",
      "name": "求职底层世界观",
      "short_label": "求",
      "domain": "d-sage",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "sage",
      "waiting": []
    },
    {
      "id": "p-04",
      "name": "待办清单（大 TODO 台账）",
      "short_label": "TODO",
      "domain": "d-sand",
      "stage": "推进中",
      "next_step": "从大台账挑今日事项进任务池",
      "deadline": null,
      "subtasks": [
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
          "title": "META-02 AI 副业变现体系（已出 v1）",
          "done": true
        },
        {
          "title": "🔥 FrieslandCampina BA Portal 直投",
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
          "title": "💤 盘点夏鹏课模块（冻结）",
          "done": false
        },
        {
          "title": "💤 定夏鹏课周更机制（冻结）",
          "done": false
        }
      ],
      "progress_percent": null,
      "color_token": "sand",
      "waiting": [],
      "is_master_todo": true
    },
    {
      "id": "p-05",
      "name": "拆解一切",
      "short_label": "拆",
      "domain": "d-blue",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "blue",
      "waiting": []
    },
    {
      "id": "p-06",
      "name": "健康饮食",
      "short_label": "健",
      "domain": "d-sand",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "sand",
      "waiting": []
    },
    {
      "id": "p-07",
      "name": "财富中心",
      "short_label": "财",
      "domain": "d-sand",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "sand",
      "waiting": []
    },
    {
      "id": "p-08",
      "name": "关于我",
      "short_label": "我",
      "domain": "d-pink",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "pink",
      "waiting": []
    },
    {
      "id": "p-09",
      "name": "我的美好人生",
      "short_label": "美",
      "domain": "d-pink",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "pink",
      "waiting": []
    },
    {
      "id": "p-10",
      "name": "逻辑&表达",
      "short_label": "逻",
      "domain": "d-blue",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "blue",
      "waiting": []
    },
    {
      "id": "p-11",
      "name": "English 陪练",
      "short_label": "陪",
      "domain": "d-sage",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "sage",
      "waiting": []
    },
    {
      "id": "p-12",
      "name": "商业分析",
      "short_label": "商",
      "domain": "d-blue",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "blue",
      "waiting": []
    },
    {
      "id": "p-13",
      "name": "AI 学习",
      "short_label": "AI",
      "domain": "d-sage",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "sage",
      "waiting": []
    },
    {
      "id": "p-14",
      "name": "日记",
      "short_label": "记",
      "domain": "d-pink",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "pink",
      "waiting": []
    },
    {
      "id": "p-15",
      "name": "English Learning",
      "short_label": "英",
      "domain": "d-sage",
      "stage": "3 板块并行",
      "next_step": "07-19 私教回放总结",
      "deadline": null,
      "subtasks": [
        {
          "title": "🔥 07-19 私教回放做本次总结（最紧急）",
          "done": false
        },
        {
          "title": "后续每次课后做一次总结（固化流程）",
          "done": false
        },
        {
          "title": "计划每天友邻优课跟读内容",
          "done": false
        },
        {
          "title": "8 月阅读营开营 → 看营地读什么书",
          "done": false
        },
        {
          "title": "8 月确定单词量目标",
          "done": false
        }
      ],
      "progress_percent": null,
      "color_token": "sage",
      "waiting": [],
      "description": "用友邻优课 + 1V1 私教 + 阅读营 三条腿并行\n把英语从「看得懂」练到「讲得出、写得顺」",
      "monthly_anchors": "· 私教：每周三 + 周六 · 每节 50min\n· 友邻优课：本月每天跟读 · 一二五二法 · 模仿朗读\n· 阅读营：8 月才开始跟营",
      "sections": [
        {
          "name": "友邻优课（App）",
          "emoji": "📱",
          "purpose": "跟读 + 英语资讯输入 · 一二五二法模仿朗读",
          "subtasks": [
            {
              "title": "计划每天跟读什么（选内容/排板块）",
              "done": false
            }
          ]
        },
        {
          "name": "1V1 私教课",
          "emoji": "🎓",
          "purpose": "每周三 + 周六 50min · 练口语 + 会议 script 做总结",
          "subtasks": [
            {
              "title": "🔥 07-19 课程回放做本次总结（最紧急）",
              "done": false
            },
            {
              "title": "后续每次课后做一次总结（固化流程）",
              "done": false
            }
          ]
        },
        {
          "name": "阅读营",
          "emoji": "📖",
          "purpose": "本月未跟 · 计划 8 月开营加入",
          "subtasks": [
            {
              "title": "8 月开营看营地读什么书 → 决定跟不跟",
              "done": false
            },
            {
              "title": "单词量目标 8 月定",
              "done": false
            }
          ]
        }
      ]
    },
    {
      "id": "p-16",
      "name": "Decision Life",
      "short_label": "决",
      "domain": "d-blue",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "blue",
      "waiting": []
    },
    {
      "id": "p-17",
      "name": "心理分析",
      "short_label": "心",
      "domain": "d-pink",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "pink",
      "waiting": []
    },
    {
      "id": "p-18",
      "name": "国内 backup",
      "short_label": "内",
      "domain": "d-sand",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "sand",
      "waiting": []
    },
    {
      "id": "p-19",
      "name": "职场教练",
      "short_label": "教",
      "domain": "d-sage",
      "stage": "构思中",
      "next_step": "",
      "deadline": null,
      "subtasks": [],
      "progress_percent": null,
      "color_token": "sage",
      "waiting": []
    }
  ]
};

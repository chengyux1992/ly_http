export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "前端导航",
  description: "基于 Next.js 的前端导航网站",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/liwenka1",
    github: "https://github.com/liwenka1/next-web-nav"
  }
}

export interface NavLink {
  /** 站点图标 */
  icon: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "常用工具",
    items: [
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "Can I use",
        desc: "前端 API 兼容性查询",
        link: "https://caniuse.com"
      },
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com"
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu"
      },
      {
        icon: "https://processon.com/favicon.ico",
        title: "ProcessOn",
        desc: "免费在线流程图思维导图",
        link: "https://processon.com/"
      },
      {
        icon: "/icons/json-cn.ico",
        title: "Json 中文网",
        desc: "JSON 在线解析及格式化验证",
        link: "https://www.json.cn"
      },
      {
        icon: "https://www.terminalgif.com/favicon.ico",
        title: "Terminal Gif Maker",
        desc: "在线生成 Terminal GIF",
        link: "https://www.terminalgif.com"
      },
      {
        icon: "https://astexplorer.net/favicon.png",
        title: "AST Explorer",
        desc: "一个 Web 工具，用于探索由各种解析器生成的 AST 语法树",
        link: "https://astexplorer.net/"
      },
      {
        icon: "https://transform.tools/static/favicon.png",
        title: "transform",
        desc: "各类数据格式与对象转换",
        link: "https://transform.tools"
      },
      {
        icon: "/icons/hoppscotch.png",
        title: "Hoppscotch",
        desc: "开源 API 开发生态系统",
        link: "https://hoppscotch.io/"
      },
      {
        icon: "/icons/apifox.png",
        title: "Apifox",
        desc: "API 文档、API 调试、API Mock、API 自动化测试",
        link: "https://www.apifox.cn/"
      }
    ]
  },

 
  {
    title: "字体图标",
    items: [
      {
        title: "iconify",
        desc: "数千个图标，一个统一的框架",
        icon: "https://icon-sets.iconify.design/favicon.ico",
        link: "https://icon-sets.iconify.design/"
      },
      {
        title: "icones",
        desc: "Icon Explorer with Instant searching, powered by Iconify",
        icon: "https://icones.js.org/favicon.svg",
        link: "https://icones.js.org/"
      },
      {
        title: "iconfont",
        desc: "iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",
        link: "https://www.iconfont.cn/"
      },
      {
        title: "feathericons",
        desc: "简单美丽的开源图标",
        icon: "https://feathericons.com/favicon.ico",
        link: "https://feathericons.com/"
      },
      {
        title: "undraw",
        desc: "一个不断更新的设计项目与美丽的SVG图像，使用完全免费",
        icon: "https://undraw.co/apple-touch-icon.png",
        link: "https://undraw.co/"
      },
      {
        title: "igoutu",
        desc: "图标、插图、照片、音乐和设计工具",
        icon: "/icons/igoutu.png",
        link: "https://igoutu.cn/"
      },
      {
        title: "Emojiall",
        desc: "Emoji表情大全",
        icon: "https://www.emojiall.com/apple-touch-icon.png",
        link: "https://www.emojiall.com/zh-hans"
      },
      {
        title: "渐变色网站",
        desc: "数百万个自动生成的渐变的网站",
        icon: "https://gradihunt.com/favicon.ico",
        link: "https://gradihunt.com/"
      },
      {
        title: "谷歌字体",
        desc: "一个生成渐变色背景的网站",
        icon: "/icons/google_fonts.ico",
        link: "https://googlefonts.cn/"
      },
      {
        title: "Typing SVG",
        desc: "一个动态生成的可自定义 SVG 打字效果",
        icon: "/icons/typing-svg.png",
        link: "https://readme-typing-svg.herokuapp.com/demo/"
      }
    ]
  },
  {
    title: "跨平台",
    items: [
      {
        title: "Electron",
        desc: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序",
        icon: "/icons/electron.ico",
        link: "https://www.electronjs.org/"
      },
    ]
  },
  {
    title: "站点生成",
    items: [
      {
        title: "VitePress",
        desc: "Vue 驱动并使用Vite构建的静态网站生成器",
        icon: "https://vuepress.vuejs.org/hero.png",
        link: "https://vitepress.vuejs.org"
      },

    ]
  },
  {
    title: "代码托管",
    items: [
      {
        title: "Github",
        icon: "/icons/github.ico",
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com"
      },

    ]
  },
  {
    title: "网站托管",
    items: [
      {
        title: "Vercel",
        desc: "Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合",
        icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        link: "https://vercel.com"
      },

    ]
  },
  {
    title: "社区",
    items: [
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com"
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn"
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com"
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com"
      },
      {
        title: "博客园",
        icon: "/icons/cnblogs.svg",
        desc: "博客园是一个面向开发者的知识分享社区",
        link: "https://www.cnblogs.com"
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://zhihu.com"
      }
    ]
  }
]

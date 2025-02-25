export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "不经一番彻骨寒，哪有梅花扑鼻香?",
  description: "心若有所向往，何惧道阻且长。",
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

  /**  start-分类  */
  /** 
  {
    title: "类别1",
    items: [
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "内容示例1",
        desc: "内容示例1",
        link: "https://caniuse.com"
      },
      {
        title: "内容示例2",
        desc: "内容示例2",
        icon: "https://icon-sets.iconify.design/favicon.ico",
        link: "https://icon-sets.iconify.design/"
      }
    ]
  }, //如果后面没有分类则删除逗号     */
  /**  END-分类 */

  {
    title: "常用工具",
    items: [
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "自建-短连接平台",
        desc: "CF自建",
        link: "https://url.ltel.top"
      },
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "CF-导航页",
        desc: "CF自建",
        link: "https://my-nav.chengyux1992.workers.dev/"
      }

    ]
  },


 
  {
    title: "图片素材",
    items: [
      {
        title: "iconify",
        desc: "数千个图标，一个统一的框架",
        icon: "https://icon-sets.iconify.design/favicon.ico",
        link: "https://icon-sets.iconify.design/"
      },
      {
        title: "落地页模板",
        desc: "TG-多国金融落地页参考",
        icon: "https://icon-sets.iconify.design/favicon.ico",
        link: "https://demo5.fastdogai.com/index.php?m=Public&a=template"
      }
      {
        title: "无版权-图库导航",
        desc: "聚合多个图库导航",
        icon: "https://icon-sets.iconify.design/favicon.ico",
        link: "https://www.amz123.com/tuku"
      }

  },

/** 
  {
    title: "跨平台",
    items: [
      {
        title: "Electron",
        desc: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序",
        icon: "/icons/electron.ico",
        link: "https://www.electronjs.org/"
      }
    ]
  },*/

/**
  {
    title: "站点生成",
    items: [
      {
        title: "VitePress",
        desc: "Vue 驱动并使用Vite构建的静态网站生成器",
        icon: "https://vuepress.vuejs.org/hero.png",
        link: "https://vitepress.vuejs.org"
      }

    ]
  }, */

/** 
  {
    title: "代码托管",
    items: [
      {
        title: "Github",
        icon: "/icons/github.ico",
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com"
      }

    ]
  },*/

/** 
  {
    title: "网站托管",
    items: [
      {
        title: "Vercel",
        desc: "Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合",
        icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        link: "https://vercel.com"
      }

    ]
  }
  */
]

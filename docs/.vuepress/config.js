
const sidebarConf = require('./config/sidebar')
const navConf = require('./config/nav')
module.exports = { 
    title: 'Kms',
    description: 'Kms-Admin简介',
    base:"/admin-pro/",
    // 配置webpack别名
    configureWebpack: {
        resolve: {
            alias: {
                '@': 'path/to/some/dir'
            }
        }
    },
    // markdown配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    // 设置head 
    // head: [
    //     ['link', { rel: 'icon', href: '/logo.png' }]
    // ],
    host: "0.0.0.0",// 开发环境的 主机名
    port: 8080,      // 开发端口
    // temp:"",       // 指定客户端文件的临时目录 Default: /path/to/@vuepress/core/.temp
    dest: "vuepress/dist",        //指定 vuepress build 的输出目录。如果传入的是相对路径，则会基于 process.cwd() 进行解析 默认值: .vuepress/dist
    extraWatchFiles: [], //指定额外的需要被监听的文件。
    // 导航栏的配置
    themeConfig: {
        nav:navConf,
        sidebar: sidebarConf,
        // displayAllHeaders: true,         // 显示所有页面的标题链接
        // sidebar: 'auto',                 // 自动生成侧边栏
        sidebarDepth:2,
        searchMaxSuggestions: 10,           // 设置显示最大搜索提示
        lastUpdated: 'Last Updated',        // 最后更改时间
        nextLinks: false,                   // 禁用 推荐下一篇文章
        prevLinks: false,                    // 禁用 推荐上一篇文章
        repo: 'https://github.com/kemaosen/admin-pro.git',
        repoLabel: '查看源码',
        // // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
        // // 默认是 false, 设置为 true 来启用
        // editLinks: true,
        // // 默认为 "Edit this page"
        // editLinkText: '帮助我们改善此页面！'
        // logo: '/assets/img/logo.png',
        smoothScroll: true,                 // 开启页面滚动
        plugins: [ '@vuepress/nprogress' ], // 使用插件
    }
}
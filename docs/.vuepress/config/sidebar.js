module.exports = [
    // ['/', "主页"],    // 自定义侧边栏名称
    {                   // 侧边栏分组
        title: '主页',   // 必要的
        path: '/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
            '/'
        ]
    },
    { title: '主页', path: '/', collapsable: false, sidebarDepth: 2,    
    },
    // 使用对象的 形式
    // sidebar: {
    //     '/bar/': [
    //         '',      /* /bar/ */
    //         'three', /* /bar/three.html */
    //         'four'   /* /bar/four.html */
    //       ],
    //       // fallback 自定义
    //       '/': [
    //         '',        /* / */
    //         'contact', /* /contact.html */
    //         'about'    /* /about.html */
    //       ]
    // },
]
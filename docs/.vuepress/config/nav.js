module.exports = [
    { text: "Home", link: '/' },
    { text: 'Guide', link: '/guide/', items: [] },      // 有items则为套娃 下来菜单栏 可以继续 套娃
    { text: 'External', link: 'https://google.com', target:'_self', rel:'' },// target:'_self', rel:'' 跳转到外部链接
]
const ourStorySidebar = [{ text: 'Out Story', link: "/about/out-story" }]

module.exports = {
    base: '/vitepress-practice.git/',
    title: "Vitepress Tutorial",
    themeConfig: {
        nav: [
            { text: 'Home', link: "/" },
            { text: 'About', link: "/about/" },
            { text: 'Contact', link: "/contact" },
        ],
        // sidebar: [{ text: 'Out Story', link: "/about/out-story" }],
        sidebar: {
            '/about/' : ourStorySidebar,
            '/contact' : ourStorySidebar,
        }
    }
}
export default {
    env: {},
    head: {
        title: "深圳市一页科技有限公司",
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {hid: "description", name: "description", content: "Nuxt.js TypeScript project"}
        ],
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
        ]
    },
    loading: {color: "#3B8070"},
    css: ["~/assets/css/main.less"],
    plugins: [
        {
            src: '~/plugins/iview',
            ssr: true,
        }
    ],
    build: {
        loaders: {
            less: {
                javascriptEnabled: true,
            },
        },
        // 启动 eslint 代码检测
        // extend(config: any, {isDev, isClient}: any) {
        //     if (isDev && isClient) {
        //         config.module.rules.push({
        //             enforce: 'pre',
        //             test: /\.(js|vue)$/,
        //             loader: 'eslint-loader',
        //             exclude: /(node_modules)/
        //         })
        //     }
        // }
    },
    modules: [
        "@nuxtjs/axios",
    ],
    axios: {},
    manifest: {
        name: '深圳市一页科技有限公司',
        short_name: '深圳市一页科技有限公司',
        display: 'standalone',
        background_color: '#f3f3f3',
        theme_color: '#64B888',
        description: '深圳市一页科技有限公司',
    }
}

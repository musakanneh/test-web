module.exports = {
chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
        config
            .output
            .filename('[name].[hash].js')
            .end()
    } 
}
// pluginOptions: {
//     prerenderSpa: {
//         registry: undefined,
//         renderRoutes: [
//             '/',
//             '/about',
//         ],
//         useRenderEvent: true,
//         onlyProduction: true,

//         headless: false, // <- this could also be inside the customRendererConfig
//         customRendererConfig:
//         {
//             args: ["--auto-open-devtools-for-tabs"]
//         }
//     }
// }
// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

// module.exports = {
//     configureWebpack: {
//         plugins: process.env.NODE_ENV === 'production' ? [
//             new PrerenderSPAPlugin({
//                 // Required - The path to the webpack-outputted app to prerender.
//                 staticDir: path.join(__dirname, 'dist'),
//                 // Required - Routes to render.
//                 routes: ['/', '/about', '/work', '/approach', '/projects', '/documents'],
//             })
//         ] : []
//     }
// }

}
module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        open: true,
        proxy: {
            //配置跨域
            '/api': {
                target: 'http://127.0.0.1:9000/api',
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        overlay: {
            warnings: false, //不显示警告
            errors: false //不显示错误
        }
    },
    lintOnSave: false //关闭eslint检查
}
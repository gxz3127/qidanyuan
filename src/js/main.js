require.config({
    baseUrl: 'js/app',
    paths: {
        'jquery': "../libs/jquery-2.1.1.min",
        'swiper': '../libs/swiper-4.2.0.min',
        'index': 'index',
        'util': 'util'
    },
    shim: {
        'util': {
            // exports: "fun1"		//只导出一个

            // init: function() { //导出多个
            //     return {
            //         "fun": fun
            //     }
            // },
            deps: ['jquery'] //这个模块的依赖
        }
    }
})

require(['index'], function() {
    
})
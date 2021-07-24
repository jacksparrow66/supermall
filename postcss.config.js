// 这里是postcss-px-to-viewport插件的用法，如果没有postcss。config.js文件，就自己手动创建，
// 先安装：npm install postcss-px-to-viewport --save-dev
//然后直接配置
module.exports={
    plugins:{
        autoprefixer:{},
        'postcss-px-to-viewport':{
            viewportWidth:375,  //视窗的宽度，对应的是我们设计稿的宽度
            viewportHeight:667, //视窗的高度，对应的是我们设计稿的高度
            unitPrecision:5,    //指定‘px’转化为视窗单位值的小数位数，因为有时候转化无法整除
            viewportUnit:'vw',  //指定需要转化成的视窗单位，建议使用vw
            selectorBlackList:['tabbar','tabbaritem'],  //指定不需要转化的类
            minPixelValue:1,    //小于或者等于‘1px’不转化为视窗单位
            mediaQuery:false,   //允许在媒体查询中转化‘px’
        }
    }
}
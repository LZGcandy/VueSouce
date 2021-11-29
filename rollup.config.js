import babel from 'rollup-plugin-babel';
export default{
    input:'./src/index.js',
    output:{
        format:'umd',//cmd 和 common.js规范   window.Vue,
        name:'Vue',
        file:'./build/vue.js',//打包完自动生成
        sourcemap:true,
    },
    plugins:[
        babel({//执行.babelrc文件，将es6转译成es5
            exclude:'node_modules/**'
        })
    ]
}
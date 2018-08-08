# vue项目
## 项目使用的技术栈 Vue+Vuex+Router+Vant
## 项目位置（https://github.com/PieceCat/smile）
## 配置环境

### git操作
1. 打开git  mkdir vue（项目名称）
2. git config --global user.name xxx
3. git config --global user.email xxx@xx.com
4. git init

## vue-cli配置
5. 打开vscode  ctrl + ~  打开控制台
6. 先检查npm版本，推荐5.x以上版本  npm -v
7. 全局安装vue-cli  npm install vue-cli -g
8. 初始化项目  vue init webpack
9. 输入 npm run dev ,在浏览器打开localhost:8080

    **有时浏览器版本或者浏览器本身问题，打开后会出现sources 中import Vue from "vue"处报错，后续的一些基于vue的组件无法显示效果，建议更换浏览器或者升级浏览器**

##  安装vant
### vant介绍（https://youzan.github.io/vant/#/zh-CN/intro）：
1. 国人制造，复合中国网站样式和交互习惯；
2. 单元测试超过90%，有些个人的小样式组件是不作单元测试的；
3. 支持babel-plugin-import引入，按需加载插件，无需单独引入样式；
4. 支持TypeScript，JavaScript的超集；
5. 支持SSR，服务端渲染也是可以使用这个组件库的；

### vant安装
1. npm i vant -S 或者 npm i vant --save
2. 引入vant有两种方式
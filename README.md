# vue项目
## 项目使用的技术栈 Vue+Vuex+Router+Vant
## 项目位置（https://github.com/PieceCat/smile）
## 配置环境

### git操作
1. 打开git  `mkdir vue`（项目名称）
2. `git config --global user.name xxx`
3. `git config --global user.email xxx@xx.com`
4. `git init`

## vue-cli配置
5. 打开vscode  ctrl + ~  打开控制台
6. 先检查npm版本，推荐5.x以上版本  `npm -v`
7. 全局安装vue-cli  `npm install vue-cli -g`
8. 初始化项目  `vue init webpack`
9. 输入 `npm run dev` ,在浏览器打开localhost:8080

    **有时浏览器版本或者浏览器本身问题，打开后会出现sources 中import Vue from "vue"处报错，后续的一些基于vue的组件无法显示效果，建议更换浏览器或者升级浏览器**

##  安装vant
### vant介绍（https://youzan.github.io/vant/#/zh-CN/intro）：
1. 国人制造，复合中国网站样式和交互习惯；
2. 单元测试超过90%，有些个人的小样式组件是不作单元测试的；
3. 支持babel-plugin-import引入，按需加载插件，无需单独引入样式；
4. 支持TypeScript，JavaScript的超集；
5. 支持SSR，服务端渲染也是可以使用这个组件库的；

### vant安装
1. `npm i vant -S` 或者 `npm i vant --save`
2. 引入vant有两种方式

    1.全局引入（会增加项目打包时的大小）

         import Vant from 'vant'

         import 'vant/lib/vant-css/index.css'

         Vue.use(Vant)

    2.使用 babel-plugin-import 引入

         npm install babel-plugin-import -D 或者 npm install babel-plugin-import --save-dev

         在 .babelrc中配置plugins

         "plugins":["transform-vue-jsx", "transform-runtime",["import",{"libraryName":"vant","style":true}]]

         在src/main.js中按需引入vant组件
            1 import { Button } from 'vant'
            2 Vue.use(Button)
            3 <van-button type="primary">主要按钮</van-button>

## 布局适配
1. 在index.html中加入一下代码


		let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth//获取设备屏幕宽度
	
		let htmlDom = document.getElementsByTagName('html')[0] //获取html元素
	
		if(htmlWidth>750){htmlWidth=750} //如果设备屏幕大于750 就等于750
	
		htmlDom.style.fontSize = htmlWidth/20 + "px" //设置html的fontSize 也可以htmlWidth/设计稿的宽度*100 ，测量的时候获取到设计稿的实际px值除以100

2. 在meta标签中加入 `user-scalable=no` 禁止用户缩放

## 页面布局和路由设置
1. 在component文件下新建page文件夹，新建ShoppingMall.vue 
2. 找到router文件夹下的index.js 

		import Vue from 'vue'
		import Router from 'vue-router'
		import ShoppingMall from '@/components/pages/ShoppingMall' //引入组件
		 
		Vue.use(Router)
		 
		export default new Router({
		  routes: [
		    {path: '/',name: 'ShoppingMall',component: ShoppingMall} //配置路由
		  ]
		})
		//@代表项目的src目录
3.  建立ShoppingMall.vue (使用vue VSCode Snippets插件)
	
		用vbs可以快速创建模板 vda快速创建data
		<template>
		  <div>
		      {{msg}}
		  </div>
		</template>
		 
		<script>
		export default {
		  data () {
		    return {
		      msg: 'Shopping Mall'
		    }
		  }
		}
		</script>

### 首页布局注意点
1.	使用require引入图片 `require('../../assets/images/location.png')`
2.	vant组件引用可以连写 

		import { Button, Row, Col ,Search , Swipe , SwipeItem  } from 'vant'
		Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem)

	


     


	
	 
	



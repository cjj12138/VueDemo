 
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '@/components/HelloWorld'  //引入根目录下的Hello.vue组件
import App from '@/App.vue'
import login from '@/components/login'
import index from '@/components/index'
import registe from'@/components/registe'
import admin from '@/components/Aindex'
import bm from '@/components/Online_bm'
import add_exam from '@/components/Admin'
import activate from '@/components/activate_test'
import my_exam from '@/components/my_Exam'

Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  mode:'history',
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/suceess',         //链接路径    ，
	  name:'index',	//路由名称
      component:index   //对应的组件模板
    },
	{
		path:'/registe',
		component:registe,
	},
	{
		path:'/login',
		name:'login',
		component:login
	},
	{
		path:'/',
		name:'loginp',
		component:login
	},
	{
		path:'/admin',
		name:'Administrator',
		component:admin,
		children:[
			{
				path:"/add_exam",
				name:"add_exam",
				component:add_exam
			},
			{
				path:"/activate",
				name:'activate_test',
				component:activate,
			}
			]
	},
	{
		path:'/index',
		name:'student',
		component:index,
		children:[
			{
				path:'',
				name:'message',
			},
			{
				path:'/registration_Stu',
				name:'registration',
				component:bm
			},
			{
				path:'/my_exam',
				name:"my_exam",
				component:my_exam,
			}
			]
	},
  ]
})

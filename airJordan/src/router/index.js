import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/components/home'
import about from '@/components/about'
import shoeList from '@/components/shoeList'

import AirJordan1 from '@/components/aside/AirJordan1'
import AirJordan2 from '@/components/aside/AirJordan2'
import AirJordan3 from '@/components/aside/AirJordan3'
import AirJordan4 from '@/components/aside/AirJordan4'

let router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Home',
            component:home,
            alias:'/index'  //别名，访问/index，路径是/index，但是路由内容是/home的内容
        },
        {
            path:'/about',
            name:'About',
            component:about
        },
        {
            path:'/shoeList',
            component:shoeList,
            children:[
                {
                    path:'',            //默认的子路由  /shoeList
                    name:'ShoeList',
                    component:AirJordan1
                },
                {
                    path:'AirJordan2',            //默认的子路由
                    component:AirJordan2
                },
                {
                    path:'AirJordan3',            //默认的子路由
                    component:AirJordan3
                },
                {
                    path:'AirJordan4',            //默认的子路由
                    component:AirJordan4
                }
            ]
        },
        {
            path:'*',
            // redirect: '/'
            // redirect:{path:'/home'}
            // redirect:{name:"Home"}
            redirect:(to)=>{    //动态设置重定向的目标
                //目标路由对象，就是访问的路径的路由信息
                console.log(to)

                return '/index'
            }
        }
    ]
})

export default router;
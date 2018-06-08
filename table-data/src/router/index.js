import Vue from 'vue'
import Router from 'vue-router'
import leftMenu from '@/components/leftMenu'
import list from '../view/home/list.vue'
import workFlow from '../view/form/work-flow.vue'
import areaLinkage from '../view/area-linkage/area-linkage.vue'
import echarts from '../view/echarts/echarts.vue'
import demo from '../view/demo/demo.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            name: '首页',
            path: '/',
            redirect: 'index/list',
        },
        {
            path: '/index',
            name: 'leftMenu',
            component: leftMenu,
            children: [{
                name: '表格拖拽',
                path: 'list',
                component: list,
            }, {
                name: '表单验证',
                path: 'workFlow',
                component: workFlow,
            }, {
                name: '城市级联',
                path: 'areaLinkage',
                component: areaLinkage,
            }, {
                name: '图表',
                path: 'echarts',
                component: echarts,
            }, {
                name: '案例',
                path: 'demo',
                component: demo,
            }]
        }
    ]
})

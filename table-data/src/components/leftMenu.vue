<template>
    <div class="index-content">
        <div class="cleft">
            <ul class="lists">
                <router-link :to="item.href" tag="li" v-for="(item,index) in lists" :key="index" @click="tabCall(item,index)">{{item.text}}</router-link>
            </ul>
        </div> 
        <div class="pageshow">
            <div class="crumbs">
                <router-link to="/" tag="i"></router-link>
                <router-link :to="item.href" tag="span" v-for="(item,index) in crumbs" :key="index" v-if="!item.isShow">{{item.text}}</router-link>
            </div>
            <div class="header-avator-con">
            </div>
            <keep-alive>
                <router-view class="router-show-box"></router-view>
            </keep-alive>
        </div>
    </div>    
</template>    
<script>
    export default {
        data(){
            return{
                lists:[{
                    text:"表格拖拽",
                    href:"/index/list",  
                },{
                    text:"表单验证",
                    href:"/index/workFlow",   
                },{
                    text: '城市级联',
                    href: '/index/areaLinkage',
                },{
                    text: '图表',
                    href: '/index/echarts',
                },{
                    text: '案例',
                    href: '/index/demo',
                },{
                    text: '拖拽表单控件',
                    href: '/index/form',
                }],
                crumbs:[],
			    cunrenIndex:0,
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.init();
            })
        },
        //监听数组的变化
        watch:{
            '$route':'init'
        },
        methods:{
            init(){
                this.crumbs = this.getCrumbs(this.$route.matched)
            }, 
            getCrumbs(arr){
                let crumbs = [];
                for (var i = 1; i < arr.length; i++) {
                    crumbs.push({
                        'text':arr[i].name,
                        'href':arr[i].path
                    })
                }
                return crumbs;
            },
            tabCall(index){
                this.cunrenIndex = index;
                this.$router.push({path:item.href})
            }
        }
    }
</script>
<style lang="scss">
    .index-content {
        height: 100%;
        position: relative;
    }
    .cleft {
        background: #303C5A;
        color: #fff;
        font-size: 18px;
        width: 200px;
        float: left;
        height: 100%;
    }
    .cleft .lists {
        margin-top: 19px;
    }
    .cleft .lists li {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        line-height: 40px;
        padding: 0 46px;
        display: block;
        cursor: pointer;
        font-size: 14px;
        background-position: 20px center;
        background-repeat: no-repeat;
    }
    .cleft .lists li.router-link-exact-active,
    .cleft .lists li:hover {
        background-color: #3F94FC;
    }
    .header-avator-con{
        position: absolute;
        right: 0;
        top: 0;
        height: 60px;
        width: 300px;
    }
    .lock-screen-btn-con{
        display: inline-block;
        width: 30px;
        padding: 18px 0;
        text-align: center;
        cursor: pointer;
            i{
                vertical-align: middle;
            }
        }
    .router-show-box{
        position: absolute;
        background: #fff;
        top: 76px;
        left: 0;
        bottom: 0;
        right: 0;
        overflow-y: auto;
        margin: 0 30px 30px 30px;
    }
    .router-show-box:after{
        content: "";
        display: block;
        clear: both;
        width: 0;
        height: 0;
    }
    .index-content .pageshow{
        position: absolute;
        top: 0px;
        left: 200px;
        bottom: 0;
        right: 0;
        overflow-x: hidden;
        background: #f0f4fa;
        min-width: 640px;
    }
    .pageshow{
        overflow-x: auto;
        overflow-y: hidden;
        height: 100%;
    }
    .crumbs{
        position: relative;
        color: #777e8c;
        font-size: 14px;
        height: 76px;
        line-height: 76px;
        padding-left: 46px;
        background: url('../assets/img/crumbs.png') no-repeat 30px 28px;
        background-size: 17px 18px;
    }
    .crumbs span{
        display: block;
        float: left;
        margin-left: 10px;
        padding-left: 16px;
        background: url('../assets/img/curmbs1.png') no-repeat 0 center;
        cursor: pointer;
    }
</style>
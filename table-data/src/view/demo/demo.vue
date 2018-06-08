<template>
    <div>
        <Row>
            <Col span="24">
            <Menu mode="horizontal" accordion @on-select="select">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
            </Col>
        </Row>
        <!-- <Tabs value="name1">
        <TabPane label="标签一" name="name1">
            <Table :columns="columns1" :data="data1" border></Table>
        </TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>-->
        <div>
            <div>#动态组件实现tab切换效果#</div>
            <br>
            <br>
            <br>
            <nav>
                <a href="javascript:void(0);" @click="toggleTabs(first);">{{first}}</a>
                <a href="javascript:void(0);" @click="toggleTabs(second);">{{second}}</a>
                <a href="javascript:void(0);" @click="toggleTabs(third);">{{third}}</a>
            </nav>
            <keep-alive>
                <first :is="currentView"></first>
            </keep-alive>
        </div>
        <span style="white-space:pre;"></span>
        <input style="border:1px solid #F1F4FB;" type="text" v-mybind/>
        <div class="one" v-drag>拖拽one</div>
        <div class="two" v-drag>拖拽two</div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import first from '../../components/first.vue'
    import second from '../../components/second.vue'
    import third from '../../components/third.vue'
    export default {
        data() {
            return {
                first: "first", //导航栏文本1
                second: "second", //导航栏文本2
                third: "third", //导航栏文本3
                currentView: 'first', //默认选中first子组件
                columns1: [{
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [{
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },

        components: {
            first,
            second,
            third
        },
        directives: {
            mybind: {
                inserted: function (el) {
                    el.focus();
                }
            },
            drag: {
                inserted: function (el) {
                    el.onmousedown = function (e) {
                        let l = e.clientX - el.offsetLeft;
                        let t = e.clientY - el.offsetTop;
                        document.onmousemove = function (e) {
                            el.style.left = e.clientX - l + 'px';
                            el.style.top = e.clientY - t + 'px';
                        };
                        el.onmouseup = function () {
                            document.onmousemove = null;
                            el.onmouseup = null;
                        }
                    }
                }
            }
        },
        mounted() {

        },
        //方法
        methods: {
            select(val) {
                console.log(val)
            },
            toggleTabs(tabText) {
                this.currentView = tabText;
            }
        },

    };
</script>

<style scoped>
    nav {
        width: 500px;
        background: #eeeeee;
        padding: 0 10px;
    }

    nav a {
        text-decoration: none;
        color: #000;
        display: inline-block;
        width: 150px;
        text-align: center;
        background: #aaaaaa;
        padding: 10px;
    }

    .one,
    .two {
        height: 100px;
        width: 100px;
        border: 1px solid #000;
        position: absolute;
        -webkit-user-select: none;
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        cursor: pointer;
    }

    .two {
        left: 200px;
    }
</style>

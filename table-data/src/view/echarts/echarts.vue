<template>
    <div class="home-main">
        <Row :gutter="10">
            <Col :md="24" :lg="8">
            <Row class-name="home-page-row1" :gutter="10">
                <Col :md="12" :lg="24" :style="{marginBottom: '10px'}">
                <Card>
                    <Row type="flex" class="user-infor"></Row>
                    <div class="line-gray"></div>
                    <Row class="margin-top-8">
                        <Col span="8">
                        <p class="notwrap">上次登录时间:</p>
                        </Col>
                        <Col span="16" class="padding-left-8">2017.09.12-13:32:20</Col>
                    </Row>
                    <Row class="margin-top-8">
                        <Col span="8">
                        <p class="notwrap">上次登录地点:</p>
                        </Col>
                        <Col span="16" class="padding-left-8">北京</Col>
                    </Row>
                </Card>
                </Col>
                <Col :md="12" :lg="24" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="android-checkbox-outline"></Icon>
                        待办事项
                    </p>
                    <a type="text" slot="extra" @click.prevent="addNewToDoItem">
                        <Icon type="plus-round"></Icon>
                    </a>
                    <Modal v-model="showAddNewTodo" title="添加新的待办事项" @on-ok="addNew" @on-cancel="cancelAdd">
                        <Row type="flex" justify="center">
                            <Input v-model="newToDoItemValue" icon="compose" placeholder="请输入..." style="width: 300px" />
                        </Row>
                        <Row slot="footer">
                            <Button type="text" @click="cancelAdd">取消</Button>
                            <Button type="primary" @click="addNew">确定</Button>
                        </Row>
                    </Modal>
                    <div class="to-do-list-con">
                        <div v-for="(item, index) in toDoList" :key="index" class="to-do-item">
                            <to-do-list-item :content="item.title"></to-do-list-item>
                        </div>
                    </div>
                </Card>
                </Col>
            </Row>
            </Col>
            <Col :md="24" :lg="16">
            <Row :gutter="5" style="height:112px;">
                <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}"> 1
                </Col>
                <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}"> 2
                </Col>
                <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}"> 3
                </Col>
                <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}"> 4
                </Col>
            </Row>
            <Row>
                <Card :padding="0">
                    <p slot="title" class="card-title">
                        <Icon type="map"></Icon>
                        今日服务调用地理分布
                    </p>
                    <div class="map-con">
                        <Col span="10">
													<map-data-table height="281" :style-obj="{margin: '12px 0 0 11px',overflow:'auto'}" :cityData="cityData"></map-data-table>
                        </Col>
												<Col span="14">
													<Row type="flex" justify="center" align="middle">
														<home-map :city-data="cityData"></home-map>
													</Row>
												</Col>
                    </div>
                </Card>

            </Row>
            </Col>
        </Row>
    </div>
</template>                                                      
<script>

		import cityData from './map-date/get-city-value.js'
		import mapDataTable from './components/mapDataTable.vue'
		import homeMap from './components/map.vue'
    import toDoListItem from '../../components/toDoListItem.vue'
    export default {
        name: 'home',
        components: {
            toDoListItem,
						mapDataTable,
						homeMap
        },
        data() {
            return {
                showAddNewTodo: false,
                newToDoItemValue: '',
                toDoList: [{
                        title: '去iView官网学习完整的iView组件'
                    },
                    {
                        title: '去iView官网学习完整的iView组件'
                    },
                    {
                        title: '去iView官网学习完整的iView组件'
                    },
                    {
                        title: '去iView官网学习完整的iView组件'
                    },
                    {
                        title: '去iView官网学习完整的iView组件'
                    }
                ],
								cityData:cityData
            }
        },
        methods: {
            addNewToDoItem() {
                this.showAddNewTodo = true;
            },
            addNew() {
                if (this.newToDoItemValue.length !== 0) {
                    this.toDoList.unshift({
                        title: this.newToDoItemValue
                    })
                    setTimeout(() => {
                        this.newToDoItemValue = ''
                    }, 200)
                    this.showAddNewTodo = false;
                } else {
                    this.$Message.error('请输入待办事项内容');
                }
            },
            cancelAdd() {
                this.showAddNewTodo = false;
                this.newToDoItemValue = '';
            }
        }
    }
</script>
<style lang="scss">
    .user-infor {
        height: 135px;
    }

    .line-gray {
        height: 0;
        border-bottom: 2px solid #dcdcdc;
    }

    .margin-top-8 {
        margin-top: 8px;
    }

    .margin-bottom-10 {
        margin-bottom: 10px;
    }

    .notwrap {
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .padding-left-8 {
        padding-left: 5px;
    }

    .to-do-list-con {
        height: 145px;
        overflow: auto;
    }

    .to-do-item {
        padding: 2px;
    }

    .map-con {
        height: 305px;
    }
</style>

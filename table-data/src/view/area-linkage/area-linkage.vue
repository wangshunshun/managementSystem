<template>
    <div>
        <Row :gutter="10">
            <Col span="17">
                <Card>
                    <p slot="title">
                        <Icon type="minus-round"></Icon>
                        基础示例
                    </p>
                    <Row class="area-linkage-page-row1"> 
                        <al-selector v-model="resDefault" level="3" auto/>
                        <pre style="margin:10px;">&lt;al-selector v-model="resDefault" /&gt;</pre>
                        <al-cascader v-model="res1" style="margin-top:20px;width:50%;"/>
                        <pre style="margin:10px;">&lt;al-cascader v-model="res1" /&gt;</pre>
                        <div>
                            <p>更多配置可参考iview-area组件官方文档：<a href="https://github.com/iview/iview-area" target="_block">iview-area</a></p>
                        </div>
                    </Row>
                </Card>
            </Col>
            <Col span="7">
                <Card>
                    <p slot="title">
                        <Icon type="stats-bars"></Icon>
                        数据展示
                    </p>
                    <Row class="area-linkage-page-row1">
                        <pre style="font-size:12px;">{{ showRes }}</pre>
                    </Row>
                </Card>
            </Col>
        </Row>
        <Row style="margin-top: 10px;" :gutter="10">
            <Col span="12">
                <Card>
                    <p slot="title">四级</p>
                     <al-selector v-model="res1" data-type="name" level="3"/>      
                </Card>
            </Col>
        </Row>
    </div>
    
</template>
<script>
    import Vue from 'vue';
    import iviewArea from 'iview-area';
    Vue.use(iviewArea);
    export default {
        data(){
            return {
                resDefault:['河北省', '张家口市', '怀来县', '沙城镇'],
                res1:['河北省', '张家口市', '怀来县', '沙城镇'],
                showRes:[]
            }
        },
        methods:{
            renderFormat (label) {
                    return label.join(' => ');
                }
        },
        watch:{
            resDefault (val) {
                this.showRes = val;
            },
            res1 (val) {
                this.showRes = val;
            },
        }
    }

</script>
<style lang="scss">
.area-linkage-page{
    &-row1{
        height: 366px !important;
    }
    &-row2{
        height: 112px !important;
    }
}
</style>
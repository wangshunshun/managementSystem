<template>
    <div class="container">
        <draggable v-model="tags" :move="getdata" @update="datadragEnd">
            <transition-group>
                <div v-for="element in tags" :key="element.id" style="width:100%;height:44px;line-height:44px;">
                    {{element.name}}
                </div>
            </transition-group>
        </draggable>
    </div>
</template>
<script>
    import draggable from "vuedraggable";
    
    export default {
        components:{
            draggable
        },
        data(){
            return {
                tags:[
                    {name:"小红",id:0},
                    {name:"小绿",id:1},
                    {name:"小兰",id:2},
                    {name:"小炮",id:3},
                ]
            }
        },
        methods:{
            getdata (evt) {
                console.log(evt.draggedContext.element.id)
            },
            datadragEnd (evt) {
                console.log('拖动前的索引 :' + evt.oldIndex)
                console.log('拖动后的索引 :' + evt.newIndex)
                console.log(this.tags)
            }
        },
        
    }
</script>
<style scoped>
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}   
</style>
<template>
    <div>
        <nav class="navs">
            <a href="javascript:void(0);" @click="toggleTab(first);">导航1</a>
            <a href="javascript:void(0);" @click="toggleTab(second);">导航2</a>
            <a href="javascript:void(0);" @click="toggleTab(third);">导航3</a>
        </nav>
        <template v-if="isActive==first">
            <div>11111</div>
        </template>
        <template v-else-if="isActive==second">
            <div>22222</div>
        </template>
        <template v-else="isActive==third">
            <div>33333</div>
        </template>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                first: "first", //导航栏文本1
                second: "second", //导航栏文本2
                third: "third",
                isActive: "second"
            }
        },
        methods: {
            toggleTab(Tabtext) {
                this.isActive = Tabtext;
                console.log(this.isActive)
            }
        }
    }
</script>
<style scoped>
    .navs {
        width: 270px;
        margin-top: 10px;
        background: #eeeeee;
        padding: 0 10px;
    }

    .navs a {
        text-decoration: none;
        color: #000;
        display: inline-block;
        width: 80px;
        text-align: center;
        background: #aaaaaa;
        padding: 10px;
    }
</style>

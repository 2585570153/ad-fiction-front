<template>
    <div class="common-layout-bookrack">
        <el-container>
            <el-header class="header">
                <div class="affix-container">
                    <el-affix target=".affix-container" :offset="0">
                        <navigation ref="navigationRef" navid="4"/>
                    </el-affix>
                </div>
            </el-header>
            <p class="fiction-rankinglist-p">首页 > 书架</p>
            <el-main class="bookrack-centre">
            <Book />
            <br><br><br>
            </el-main>
            <el-footer class="fiction-footer">
                <fictionfooter />
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
document.title = "书架"+"-fiction中文网,小说,小说网,最新热门小说,阅读网站";
import { ref, onMounted } from 'vue';
import Storage from "responsive-storage";

import Fictionfooter from "@/components/fictionfooter.vue";
import Navigation from "@/views/Layout/components/Navigation.vue";
import Book from "@/views/BookRack/components/book.vue"
const navigationRef = ref(null);
onMounted(() => {
    if (!Storage.get("fiction_userInfo")) {
        // 假设 navigation 组件中有一个名为 someReactiveValue 的 ref
        navigationRef.value.centerDialogVisible = true;
    }
});
</script>

<style scoped>
.affix-container {
    text-align: center;
    /*设置导航固定的隐藏宽度*/
    height: 400px;
}
.header{
    padding: 0;
}
.el-main{
    min-height: 520px;
}
.fiction-rankinglist-p{
    font-size: 14px;
    left: 50px;
    padding-left: 160px;
}
.bookrack-centre{
    padding-left: 160px;
    padding-right: 50px;
}
.fiction-footer{
    height: 250px;
    padding: 0;
}
</style>
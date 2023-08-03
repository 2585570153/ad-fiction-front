<template>
    <div class="common-layout-search">
        <el-container>
            <el-header class="header">
                <div class="affix-container">
                    <el-affix target=".affix-container" :offset="0">
                        <navigation navid="0"/>
                    </el-affix>
                </div>
            </el-header>
            <p class="fiction-rankinglist-p">首页 > 书名</p>
            <el-main class="search-centre">
                <br>
                <img src="http://cloud.aiheadn.cn/fiction/assets/logo.png"
                     class="search-img-index"
                >
            <search />
                <br>
                <br>
            <Catalogue />

            </el-main>
            <el-footer class="fiction-footer">
                <fictionfooter />
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>

import Navigation from "@/views/Layout/components/Navigation.vue";
import Catalogue from "@/views/Search/components/Catalogue.vue";
import Search from "@/views/Search/components/search.vue";
import Fictionfooter from "@/components/fictionfooter.vue";
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
.fiction-rankinglist-p{
    font-size: 14px;
    left: 50px;
    padding-left: 160px;
}
.search-centre{
    padding-left: 250px;
    padding-right: 250px;
    /*height: 375px;*/
}
.fiction-footer{
    height: 250px;
    padding: 0;
}
.search-img-index{
    width:400px;
    height:100px;
    padding-left: 320px;

}
</style>
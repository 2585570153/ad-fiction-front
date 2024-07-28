<template>
    <div class="fiction-rankinglist">
      <el-container>
        <el-header class="header">
          <div class="affix-container">
            <el-affix target=".affix-container" :offset="0">
              <navigation navid="3"/>
            </el-affix>
          </div>
        </el-header>
        <p class="fiction-rankinglist-p">首页 > 排行榜</p>
        <br>
        <el-main class="bodymain">
  
        <Catalogue />
        </el-main>
          <br>
          <br>
          <br>
          <el-footer class="fiction-footer">
              <fictionfooter />
          </el-footer>
      </el-container>
    </div>
  </template>
  
  <script setup>
  document.title = "排行榜"+"-fiction中文网,小说,小说网,最新热门小说,阅读网站";
  import Navigation from "@/views/Layout/components/Navigation.vue";
  import Catalogue from "@/views/RankingList/components/Catalogue.vue";
  import {onMounted} from "vue";
  import Fictionfooter from "@/components/fictionfooter.vue";
  function created(){
    window.scrollTo(0, 0);
  }

  onMounted(() => {
    created();
  });
  </script>
  
  <style scoped>
  .affix-container {
    text-align: center;
    /*设置导航固定的隐藏宽度*/
    height: 1000px;
  }
  .bodymain{
  
    padding: 0 159px 0 159px;
  
  
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
  .fiction-footer{
      height: 250px;
      padding: 0;
  }
  </style>
  
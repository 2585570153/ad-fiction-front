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
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import Navigation from "@/views/Layout/components/Navigation.vue";
  import Catalogue from "@/views/RankingList/components/Catalogue.vue";
  import {onMounted} from "vue";
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
  .fiction-rankinglist-p{
    font-size: 14px;
    left: 50px;
    padding-left: 160px;
  }
  
  </style>
  
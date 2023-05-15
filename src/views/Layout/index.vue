<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">
        <div class="affix-container">
          <el-affix target=".affix-container" :offset="1">
        <navigation />
          </el-affix>
        </div>
      </el-header>
      <el-main class="bodymain">
        <Banner />
        <News/>
        <Boutique title="男生精选" sub-title="强力推荐，品质保证" href="url(/src/assets/column-bg1.png)"/>
        <RankingList href="url(/src/assets/rank-bg0.png)"/>
        <Boutique title="女生精选" sub-title="强力推荐，品质保证" href="url(/src/assets/column-bg2.png)"/>
        <RankingList href="url(/src/assets/rank-bg1.png)"/>
        <Boutique title="出版精选" sub-title="强力推荐，品质保证" href="url(/src/assets/column-bg3.png)"/>
        <RankingList href="url(/src/assets/rank-bg2.png)"/>

      </el-main>
      <el-footer>
        <el-backtop :right="100" :bottom="100" />
        Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Navigation from "@/views/Layout/components/Navigation.vue";
import Banner from "@/views/Layout/components/Banner.vue";
import News from "@/views/Layout/components/News.vue";
import Boutique from "@/views/Layout/components/Boutique.vue";
import RankingList from "@/views/Layout/components/RankingList.vue";
</script>

<style scoped>

.bodymain{

  padding: 30px 159px;

}
.header{
  padding: 0;
}
.affix-container {
  text-align: center;
  /*设置导航固定的隐藏宽度*/
  height: 4000px;

  border-radius: 1px;
}
</style>

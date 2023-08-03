<template>

  <div class="detail">
    <el-container>
      <el-header class="header">
        <div class="affix-container">
          <el-affix target=".affix-container" :offset="0">
            <navigation navid="0"/>
          </el-affix>
        </div>
      </el-header>
      <el-main class="bodymain">
        <br>
        <HomePage />
        <br><br>
        <Chapter />
      </el-main>
        <el-footer class="fiction-footer">
            <fictionfooter />
        </el-footer>
    </el-container>
  </div>


</template>

<script setup>

import Navigation from "@/views/Layout/components/Navigation.vue";
import HomePage from "@/views/detail/components/HomePage.vue";
import Chapter from "@/views/detail/components/Chapter.vue";
import {onMounted} from "vue";
import Fictionfooter from "@/components/fictionfooter.vue";
function created(){
  window.scrollTo(0, 0);
}
onMounted(() => {
  created();

});
</script>

<style scoped >
.affix-container {
  text-align: center;
  /*设置导航固定的隐藏宽度*/
  height: 1000px;

  border-radius: 1px;
}
.bodymain{

  padding: 30px 159px;
  background-image: url(../assets/bg1.jpg);
  background-repeat: no-repeat;
}
.header{
  padding: 0;
}
.fiction-footer{
    height: 250px;
    padding: 0;
}
</style>

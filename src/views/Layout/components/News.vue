<template>
<div class="new">
    <img class="img" src="http://cloud.aiheadn.cn/fiction/news.png">
  <div class="container" v-for="item in recommendData">
     <router-link :to="'/detail/'+item.fictionId" class="link">
    <p class="title">{{ item.name }}</p>
    <p class="cont">{{item.brief}}</p>
     </router-link>
  </div>
</div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import{getRecommendAPI} from "/src/apis/RecommendAPI";
const recommendData = ref([])
const getrecommend = async () =>{
    const  res = await getRecommendAPI(4,"男生")
    recommendData.value = res.data
}

onMounted(() => {
    getrecommend();
});
</script>

<style scoped lang="scss">
.new {
  background-color: rgb(151, 183, 234, 0.1);
  border-radius: 20px;
  border: 0;
  padding: 7px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 11vh;
}
.img {
  text-align: center;
  width: 80px;
  height: 70px;
  justify-content: space-between;
  display: flex;
}
.container{
  text-align: center;
  padding: 50px;
  width: 158px;
  overflow: hidden;

}
.cont{
  margin: 0 auto;
  height: 30px;
  width:320px;
  overflow: hidden; /* 超出部分隐藏 */
  font-size: 10px;
}
.title{
  margin: 3px;
  font-weight: bold;
  white-space: nowrap;
}
.title:hover{
  color: $xtxColor;
}
</style>

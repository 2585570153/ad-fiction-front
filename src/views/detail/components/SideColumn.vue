<template>
  <div class="sidecolumn">
    <br>
    <div class="sidecolumn-left">
      精选热门书>
      <div class="sidecolumn-item" v-for="item in recommendData">
        <router-link :to="'/detail/'+item.fictionId" class="link">
        <div class="sidecolumn-imges">
        <div class="sidecolumn-caption">&nbsp;免费&nbsp;</div>
        <img  :src= item.prcture>
      </div>
        </router-link>
        <router-link :to="'/detail/'+item.fictionId"  class="link">
      <div class="sidecolumn-content" >
        <div class="sidecolumn-title">{{ item.name }}</div>
        <div class="sidecolumn-author">{{ item.author }}</div>

      </div>
        </router-link>
    </div>

      <br>
    </div>
  </div>

</template>

<script setup>
import {onMounted, ref,watch} from "vue";
import {useRoute} from "vue-router";
import{getRecommendAPI} from "/src/apis/RecommendAPI";
const recommendData = ref([])
const route = useRoute()
const getrecommend = async () =>{
  const  res = await getRecommendAPI(6,1)
  recommendData.value = res.data
}
const reloadPage = () => {
  // 执行刷新页面的逻辑，例如重新加载数据或重新渲染组件等
  // ...
  location.reload(); // 刷新页面
};
watch(
    () => route.params.id,
    (newId, oldId) => {
      // 在 id 参数变化时执行刷新页面的操作
      console.log('id 参数变化了:', newId);
      // 执行刷新页面的逻辑，例如重新加载数据或重新渲染组件等
      reloadPage();
      window.scrollTo(0, 0);
    }
);


onMounted(() => {
  getrecommend();
});

</script>

<style scoped lang="scss">
.link{
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 继承父元素的文本颜色 */
}
.sidecolumn{
  border-radius: 3%; /*圆角 */
  background-color: #F3F3F5FF;
  font-size: 21px;
  font-weight: bold;

}
.sidecolumn-left{
margin-left: 15px;
}
.sidecolumn-item{
  display: flex;
  margin-top: 20px; /* 设置上边距为 20 像素 */

}
.sidecolumn-imges{
  /* */
  border-radius: 5%; /*圆角 */
  width: 100px;
  height: 140px;
  overflow: hidden;  /* 固定图片的大小*/
  position: relative;/*定位 */

}
img{
  width: 100px;
  height: 140px;
  transition: transform 0.4s;  /*圆滑的变回去 */
}
.sidecolumn-imges:hover img{
  transform: scale(1.1);/*放大 */
}
.sidecolumn-caption {
  border-radius: 5px;
  position: absolute; /*相对定位 */
  font-size: 13px;
  color: white;
  background-color: $sucColor;
}
.sidecolumn-title{
  width: 150px;
  color: #3d3d3d;
  margin-top: 35px; /* 设置上边距为 20 像素 */
  margin-left: 15px;
  font-size: 15px;
}
.sidecolumn-author{
  width: 120px;
  margin-top: 20px; /* 设置上边距为 20 像素 */
  margin-left: 15px;
  font-size: 10px;
  color: $xtxColor;
}
</style>

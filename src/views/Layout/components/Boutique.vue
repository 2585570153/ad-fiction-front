<script setup>
defineProps({
  title: {
    type: String
  },
  subTitle: {
    type: String
  },
  href: {
    type: String
  }
})


</script>
<template>
  <div class="Boutique">
  <h2>{{title}}<small>{{subTitle}}</small></h2>
  <div class="list" :style="{ backgroundImage: href}">
    <slot></slot>
  </div>
  </div>



</template>
<style scoped lang="scss">
.Boutique{
  padding-top: 20px;/* 增加上边距 */
  height:400px ;
}
small{
  margin-left: 15px;
  font-size: 12px;
  color: #9d9a9a;
}
h2:hover{
  color: $xtxColor;
}
.list{
  width: 1185px;
  height: 150px;
  display: flex;
  background-image: url(http://cloud.aiheadn.cn/fiction/assets/column-bg1.png);
  border-radius: 10px;
  justify-content: space-between; /* 使子元素平均分布在容器中 */
  background-size: cover; /* 将背景图片缩放到最大值以覆盖整个元素，并保持其宽高比 */
  background-position: center top; /* 将背景图片的中心点对准元素的顶部 */
}

</style>

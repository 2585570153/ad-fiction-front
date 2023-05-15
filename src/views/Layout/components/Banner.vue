<template>
  <el-carousel
      indicator-position="outside"
      height="375px"
      pause-on-hover>
    <el-carousel-item
        v-for="item in bannerList"
        :key="item.id">
<!--      <h3 text="2xl" justify="center">{{ item }}</h3>-->
      <img :src="item.imgurl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #a90a10;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #1f82f3;
}
</style>


<script setup>
import {getBanner} from "@/apis/bannerAPI";
import { ref, onMounted } from 'vue';
const bannerList = ref([]);
onMounted(async () => {
  const res = await getBanner();
  bannerList.value = res.data;
});

</script>


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
        <p class="fiction-detail-p">首页 > 小说详情</p>
        <HomePage :fictionData="fictionData" />
        <br><br>
        <Chapter ref="chapter" :fictionData="fictionData"/>
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
import {ref,onMounted,watch} from "vue";
import Fictionfooter from "@/components/fictionfooter.vue";
import { getFictionAPI } from '/src/apis/fictionAPI';
import {useRoute} from "vue-router";
const route = useRoute();
const fictionData = ref({});
const chapter = ref(null);
function created(){
  window.scrollTo(0, 0);
}
const getFiction = async () =>{
  const  res = await getFictionAPI(route.params.id)
  fictionData.value = res.data
  document.title = res.data.name+"-fiction中文网,小说,小说网,最新热门小说,阅读网站";
  chapter.value.tableName = res.data.tableName
}
onMounted(() => {
  created();
  getFiction();
});
//使用 watch 监测 homePage.value?.fictionData?.bigclass 的变化。确保 fictionData 存在并且能够被监测。
watch(() => fictionData.value?.bigclass, (newVal) => {
  if (newVal === '1') {
    document.querySelector('.bodymain').style.backgroundImage = 'linear-gradient(to bottom, #EBF4F9 0px, #FFFFFF 350px, transparent 100%)'; /* 从上到下的渐变，颜色从白色到浅灰色再到透明 */
  } else if (newVal === '2') {
    document.querySelector('.bodymain').style.backgroundImage = 'linear-gradient(to bottom, #FAEFED 0px, #FFFFFF 350px, transparent 100%)'; /* 从上到下的渐变，颜色从白色到浅粉色再到透明 */
  } else if (newVal === '3') {
    document.querySelector('.bodymain').style.backgroundImage = 'linear-gradient(to bottom, #FBF9F0 0px, #FFFFFF 350px, transparent 100%)'; /* 从上到下的渐变，颜色从白色到浅粉色再到透明 */
  }
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
  background-repeat: no-repeat;
}
.header{
  padding: 0;
}
.fiction-detail-p{
  font-size: 14px;
  margin: 0px;
  transform: translateY(-15px);
}
.fiction-footer{
    height: 250px;
    padding: 0;
}
</style>

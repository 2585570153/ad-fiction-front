<template>
  <div class="read-content">
    <br><br>
    <div class="read-title">
      {{ contentData.title }}
    </div>
    <br>
    <div class="read-author">
      <div class="read-author-name">书名：</div>
      <div class="read-author-text">{{ fictionData.name }}</div>
      <div class="read-author-name">作者名：</div>
      <div class="read-author-text">{{ fictionData.author }}</div>
      <div class="read-author-name">更新时间：</div>
      <div class="read-author-text">{{ fictionData.creatTime }}</div>
      <div class="read-author-name">阅读人数：</div>
      <div class="read-author-text">{{ fictionData.click }}</div>
    </div>
    <el-divider border-style="dashed" />

    <div class="read-fiction-book">
      <div v-html="formattedText"></div>
    </div>
    <div class="read-fiction-get">
      <router-link :to="'/read/'+tempsub" class="link">
      <el-button  color="#0BAEFDFF" class="read-fiction-button"  size="large" type="primary" round>上一章</el-button>
      </router-link>
      <router-link :to="'/detail/'+fictionData.fictionId" class="link">
      <el-button  color="#0BAEFDFF" class="read-fiction-button" size="large" type="primary" round>目录</el-button>
      </router-link>
      <router-link :to="'/read/'+tempadd" class="link">
      <el-button   color="#0BAEFDFF" class="read-fiction-button" size="large" type="primary" round>下一章</el-button>
      </router-link>
    </div>
    <el-divider border-style="dashed" />

  </div>
</template>

<script setup>
import{getcontentAPI} from "/src/apis/contentAPI";
import{getFictionAPI} from "@/apis/fictionAPI";

import {useRoute} from "vue-router";
import {ref, computed, onMounted, watch} from "vue";
const route = useRoute()
const contentData = ref({})
const fictionData = ref({})

const getcontent = async () =>{
  const  res = await getcontentAPI(route.params.id)
  contentData.value = res.data
  text.value = res.data.content
  const fictionId = res.data.fictionId;
  await getfiction(fictionId); // 将fictionId作为参数传递给getfiction函数
}
const getfiction = async (fictionId) => { // 接收fictionId作为参数
  const res = await getFictionAPI(fictionId);
  fictionData.value = res.data;
}
const tempsub = computed(()=>{
  return  Number(route.params.id)-1
})
const tempadd = computed(()=>{
  return  Number(route.params.id)+1
})
const text = ref('');
const formattedText = computed(() => {
  return text.value.replace(/\r\n\r\n/g, "<p class='read-fiction-p'>");
});
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
    }
);
onMounted(() => {
  getcontent();

});
</script>

<style scoped>
.read-content{
  background-color: #EDEAE1FF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.read-title{
  font-size:27px;
  font-weight: bold;
}
.read-author{
  display: flex;
  flex-direction: row;
  font-size: 12px;
}
.read-author-name{
  color: #808080;
}
.read-author-text{
  margin-right: 40px; /* 设置合适的右边距值 */
}
.read-fiction-book{
  width:93%;
  font-size:24px;
  text-indent: 3em; /* 设置缩进量，可以根据需要调整 */
  line-height: 3; /* 设置行间距，可以根据需要调整 */
}
.read-fiction-button{
  color: white;
  margin-right: 40px; /* 设置合适的右边距值 */
  width: 200px;
}
</style>

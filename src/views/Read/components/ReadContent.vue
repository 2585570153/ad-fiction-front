<template>
  <div class="read-content">
    <br><br>
    <div class="read-title">
      {{ contentData.title }}
    </div>
    <br>
    <div class="read-author">
      <div class="read-author-name">书名：</div>
      <div class="read-author-text">藏国</div>
      <div class="read-author-name">作者名：</div>
      <div class="read-author-text">高月</div>
      <div class="read-author-name">更新时间：</div>
      <div class="read-author-text">2023-03-30 10:10:05</div>
      <div class="read-author-name">阅读人数：</div>
      <div class="read-author-text">21794</div>
    </div>
    <el-divider border-style="dashed" />

    <div class="read-fiction-book">
      <div v-html="formattedText"></div>

    </div>
    <el-divider border-style="dashed" />
  </div>
</template>

<script setup>
import{getcontentAPI} from "/src/apis/contentAPI";
import {useRoute} from "vue-router";
import {ref, computed, onMounted} from "vue";
const route = useRoute()
const contentData = ref({})
const getcontent = async () =>{
  const  res = await getcontentAPI(route.params.id)
  contentData.value = res.data
  text.value = res.data.content
}

const text = ref('');
const formattedText = computed(() => {
  return text.value.replace(/\r\n\r\n/g, "<p class='read-fiction-p'>");
});
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

</style>

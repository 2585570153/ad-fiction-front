<template>
  <div class="chapter">
    <el-container>
      <el-aside width="850px">

        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane class="mulu"  name="first">
            <template #label>
              <span class="custom-tabs-label"><span>书籍详细</span></span>
            </template>
            <el-card shadow="never" class="box-card">
              <div class="card-header">
            <span class="pinlun">书友吧</span>
            <el-button class="button" text>快去评论吧 ></el-button>
              </div>
            </el-card>

            <div class="content">
              <div class="chapter-title1">{{ contentData.title }}</div>
              <div class="chapter-text" >

                {{formattedText}}

              </div>
            </div>

          </el-tab-pane>

          <el-tab-pane class="mulu"  name="second">
            <template #label>
              <span class="custom-tabs-label"><span>目录</span></span>
            </template>
            <div class="title">

              <div class="chapter-item" v-for="item in chapterData">
                <router-link :to="'/read/'+item.chapterId" class="link">
                {{ item.title }}
                </router-link>
              </div>

            </div>

          </el-tab-pane>
        </el-tabs>

      </el-aside>
      <el-main>

        <SideColumn />

      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed, onMounted} from 'vue'
import SideColumn from "/src/views/detail/components/SideColumn.vue";

import{getchapterAPI} from "/src/apis/chapterAPI";
import{getcontentAPI} from "/src/apis/contentAPI";
import {useRoute} from "vue-router";
const chapterData = ref([])
const contentData = ref({})
const route = useRoute()
const getchapter = async () =>{
  const  res = await getchapterAPI(route.params.id)
  chapterData.value = res.data
}
const getcontent = async () =>{
  const  res = await getcontentAPI(route.params.id+"0001")
  contentData.value = res.data
  originalText.value = res.data.content
}

onMounted(() => {
  getchapter();
  getcontent();
});

const activeName = ref('first')

const originalText = ref('');
const formattedText = computed(() => {
  // 在计算属性的函数体内进行计算
  // 这里假设你想要将空格替换为&nbsp;
  return originalText.value.replace(/\r\n\r\n/g, "\n");
  // /\r\n\r\n/g 这个是一会用的
  //  /\\r\\n\\r\\n/g
});


</script>

<style lang="scss" >
.custom-tabs-label{
  font-size: 25px;
  font-weight: bold;
}
.custom-tabs-label:hover{
  color: $xtxColor;
}
.title{
  display: flex;
  flex-wrap: wrap;
}
.chapter-item {
  font-size: 15px;
  width: 400px;
  height: 30px;
  margin: 10px;
}
.chapter-item:hover{
  color: $xtxColor;
}
.box-card{
  margin-top:20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pinlun{
  font-size: 20px;
  font-weight: bold;
}
.content{
  margin-top:20px;
}
.chapter-title1{
  font-size:27px;
  font-weight: bold;
}
.chapter-text{
  width: 870px;
  margin-top:20px;
  line-height: 4;
  font-size: 19px;
  white-space: pre-wrap; /* 允许换行 */
}
</style>

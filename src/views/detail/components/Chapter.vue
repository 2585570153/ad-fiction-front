<template>
  <div class="chapter">
    <el-container>
      <el-aside width="850px">

        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane class="mulu"  name="first">
            <template #label>
              <span class="custom-tabs-label"><span>书籍详细</span></span>
            </template>
            <el-card shadow="never" class="box-card">
              <div class="card-header">
            <span class="pinlun">书友吧</span>
            <el-button class="button" @click="getComment()" text>快去评论吧 ></el-button>
              </div>
            </el-card>

            <div class="content">
              <div class="chapter-title1">{{ contentData.title }}</div>
              <div class="chapter-text" >

                  <div v-html="formattedText"></div>

              </div>
            </div>

          </el-tab-pane>

          <el-tab-pane class="mulu"  name="second">
            <template #label>
              <span class="custom-tabs-label"><span>目录</span></span>
            </template>
            <el-row justify="end">
                    <el-col :span="4">
                        <el-button @click="toggleOrder()" :icon="Sort">{{ ascending ? '倒序显示' : '正序显示' }}</el-button>
                    </el-col>
            </el-row>
            <div class="title">

              <div class="chapter-item" v-for="item in chapterData">
                <router-link :to="'/read/'+tableName+'/'+route.params.id+'/'+item.chapterId" class="link">
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
import {ref, computed,watch,defineExpose,onMounted} from 'vue'
import SideColumn from "/src/views/detail/components/SideColumn.vue";
import{getchapterAPI} from "/src/apis/chapterAPI";
import{getcontentTXTAPI} from "/src/apis/contentAPI";
import {Sort} from '@element-plus/icons-vue'
import {useRoute,useRouter} from "vue-router";
const props = defineProps({
  fictionData: Object
})
const chapterData = ref([])
const contentData = ref({})
const route = useRoute();
const router = useRouter();
const ascending = ref(true) // 初始状态为正序显示
const tableName = ref('');  //ref控制通信
const getchapter = async () =>{
  console.log(props.fictionData.tableName)
  const  res = await getchapterAPI(route.params.id,props.fictionData.tableName)
  chapterData.value = res.data
  // 父组件通过ref控制通信
  // const  resTXT = await getcontentTXTAPI(chapterData.value[0].chapterId,tableName.value)
  const  resTXT = await getcontentTXTAPI(chapterData.value[0],props.fictionData.tableName)
  contentData.value = resTXT.data
  originalText.value = resTXT.data.content
  console.log(props.fictionData.tableName)
}
const toggleOrder = () => {
    ascending.value = !ascending.value;
    if (ascending.value) {
      chapterData.value.sort((a, b) => a.chapterIndex - b.chapterIndex); // 正序排列
    } else {
      chapterData.value.sort((a, b) => b.chapterIndex - a.chapterIndex); // 倒序排列
    }
  }
// const getcontent = async () =>{
//   const  res = await getcontentTXTAPI(chapterData.value[0].chapterId)
//   contentData.value = res.data
    // const url = res.data.content;
    // const txtResponse = await axios.get("http://static.aiheadn.cn/txt"+url, { responseType: "arraybuffer" });
// 将返回的数据视为 ArrayBuffer，然后进行解码
    // const decoder = new TextDecoder("GBK");
    // const decodedText = decoder.decode(new Uint8Array(txtResponse.data));
    //  originalText.value = res.data.content
// }

const getComment = () =>{
    const newRoute = {
          path: '/comment/'+route.params.id// 新的路由路径，将 currentPage 作为路径的一部分
      };
    router.push(newRoute);
}
//检测传递值的变化
watch(() =>props.fictionData.tableName,(newVal) => {
  if (newVal) {
    getchapter();
  }
});
const activeName = ref('first')
const originalText = ref('');
const formattedText = computed(() => {
  // 在计算属性的函数体内进行计算
  // 这里假设你想要将空格替换为&nbsp;
  return originalText.value.replace(/\n/g, "<p>");
  // /\r\n\r\n/g 这个是一会用的
  //  /\\r\\n\\r\\n/g
});
// 重点！！这里需要使用defineExpose暴露出去
defineExpose({
  tableName
})
</script>

<style lang="scss" scoped>
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
  text-indent: 3em; /* 设置缩进量，可以根据需要调整 */
  line-height: 3;
  font-size: 19px;
}
.el-main {
    margin-left: 20px;
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: 10px;
}
</style>

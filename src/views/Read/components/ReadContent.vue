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
      <el-button  color="#0BAEFDFF" class="read-fiction-button"  size="large" type="primary" @click="getSwitchChapter('1')" round>上一章</el-button>
      <router-link :to="'/detail/'+fictionData.fictionId" class="link">
      <el-button  color="#0BAEFDFF" class="read-fiction-button" size="large" type="primary" round>目录</el-button>
      </router-link>
      <el-button  color="#0BAEFDFF" class="read-fiction-button" size="large" type="primary" @click="getSwitchChapter('2')" round>下一章</el-button>
    </div>
    <el-divider border-style="dashed" />

  </div>
</template>

<script setup>
import{switchChapterAPI} from "/src/apis/chapterAPI";
import{getcontentTXTAPI} from "/src/apis/contentAPI";
import{getFictionAPI} from "@/apis/fictionAPI";
import { storeToRefs } from 'pinia'
import {useReadStore} from "@/stores/readstores"
import {useRoute, useRouter} from "vue-router";
import {ref, computed, onMounted, watch, onBeforeMount} from "vue";

const ReadStore = useReadStore();
let { readid } = storeToRefs(ReadStore);
const route = useRoute()
const contentData = ref({})
const fictionData = ref({})
const router = useRouter()

const text = ref('');

const getSwitchChapter = (type) =>{
  switchChapterAPI(type,route.params.id,"").then(response => {
    if( response.code==1){
      const newRoute = {
            path: '/read/'+response.data.chapterId// 新的路由路径，将 currentPage 作为路径的一部分
        };
        router.push(newRoute);
    }else{
      // eslint-disable-next-line no-undef
      ElMessage({message: response.msg,type: 'error',});
    }
    })
    .catch(error => {
        console.error('API error:', error);
    });
}

const getcontent = async () =>{
  const  res = await getcontentTXTAPI(route.params.id)
    contentData.value = res.data
    // const url = res.data.content;
    // const txtResponse = await axios.get("http://static.aiheadn.cn/txt"+url, { responseType: "arraybuffer" });
// 将返回的数据视为 ArrayBuffer，然后进行解码
    // const decoder = new TextDecoder("GBK");
    // const decodedText = decoder.decode(new Uint8Array(txtResponse.data));
  text.value = res.data.content;
  const fictionId = res.data.fictionId;
    // 存储pinia
    readid.value = fictionId
  await getfiction(fictionId); // 将fictionId作为参数传递给getfiction函数
}

const getfiction = async (fictionId) => { // 接收fictionId作为参数
  const res = await getFictionAPI(fictionId);
  fictionData.value = res.data;
}
const formattedText = computed(() => {
  return text.value.replace(/\n/g, "<p>");
});
const reloadPage = () => {
  // 执行刷新页面的逻辑，例如重新加载数据或重新渲染组件等
  // ...
  location.reload(); // 刷新页面
};
// 监听键盘事件
const handleKeydown = (event) => {
    // handle your keydown event here
    if (event.key=='ArrowLeft') {
      getSwitchChapter('1');

    } else if (event.key=='ArrowRight') {
      getSwitchChapter('2');

    }
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
    window.addEventListener('keydown', handleKeydown.bind(this));
    setTimeout(()=>{
        //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
        document.title = contentData.value.title+"-"+fictionData.value.name+"-fiction中文网,小说,小说网,最新热门小说,阅读网站";
        //延迟时间：1秒
    },500)

});
onBeforeMount(() => {
    window.removeEventListener('keydown', handleKeydown);
})
</script>

<style scoped>
.read-content{
  background-color: #ebe8e0;
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

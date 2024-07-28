
  <template>
    <div class="homepage">
      <el-container>
        <el-aside width="200px">
          <div class="item">
            <div class="imges">
              <div class="caption">&nbsp;免费&nbsp;</div>
              <img  :src= "fictionData.prcture">
            </div>
          </div>

        </el-aside>

        <el-main class="main">
          <div class="title" >
            <div class="fiction">{{ fictionData.name }}&nbsp;&nbsp;</div>
            <div class="author">{{ fictionData.author }} 著</div>
            <div class="fictiontime">&nbsp;&nbsp;更新时间:{{ fictionData.creatTime }}</div>
          </div >
          <div class="bigclass" >
            <el-tag size="large" class="fiction-detail-tag">{{classifyLabel}}</el-tag>
            <el-tag size="large" class="fiction-detail-tag">{{bigclassLabel}}</el-tag>
          </div >
          <div class="brief">{{fictionData.brief}}...</div>
          <div class="get">
            <el-button  color="#0BAEFDFF" class="button1"  size="large" type="primary" round @click="getOneChapter">开始阅读</el-button>
            <el-button  color="#E0F3FCFF" class="button2" size="large" type="danger" round :plain="true" @click="open1">加入书架</el-button>
<!--            <el-button   class="button3" size="large" type="danger" round>等待更新</el-button>-->
          </div>
        </el-main>
      </el-container>
    </div>
  </template>



<script lang="ts" setup >
const props = defineProps({
  fictionData: Object
})
import {onMounted, ref,computed} from 'vue'
import { getclick } from '/src/apis/rankinglistAPI'
import {saveBookIdAPI} from '/src/apis/bookrankAPI'
import {getchapterOneAPI} from '/src/apis/chapterAPI'
import {useRoute,useRouter} from "vue-router";
import { ClassifyEnum, BigClassEnum } from '/src/enums/enums.js'; // 导入枚举

const route = useRoute()
const router = useRouter();

const getsavebook = async ()=>{
    const res = await saveBookIdAPI(route.params.id)
    if(res.code==1){
      ElMessage({
        message: res.msg,
        type: 'success',
    });
    }else{
      ElMessage({
        message: res.msg,
        type: 'error',
    });
    }
}
const getOneChapter = () =>{
  getchapterOneAPI(route.params.id,props.fictionData.tableName).then(response => {
    if( response.code==1){
      const newRoute = {
            path: '/read/'+props.fictionData.tableName+'/'+route.params.id+'/'+response.data.chapterId// 新的路由路径，将 currentPage 作为路径的一部分
        };
        router.push(newRoute);
    }else{
      ElMessage({message: response.msg,type: 'error',});
    }
    })
    .catch(error => {
        console.error('API error:', error);
    });
}
const getCkick = async () =>{
    await getclick(route.params.id)
}
const open1 = () => {
    getsavebook();
}
    // 根据枚举转换 classify 和 bigclass
const classifyLabel = computed(() => ClassifyEnum[props.fictionData.classify] || props.fictionData.classify);
const bigclassLabel = computed(() => BigClassEnum[props.fictionData.bigclass] || props.fictionData.bigclass);

onMounted(()=>{
    getCkick()
})
</script>
<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;/* 垂直布局 */
}
.title{
  margin-top: -15px; /* 设置上边距为 20 像素 */
  display: flex;        /* 设置为flex容器 */
  flex-direction: row;  /* 水平布局 */
}
.item{
  width: 180px;
  height: 240px;
}
.imges{
  /* */
  border-radius: 5%; /*圆角 */
  width: 170px;
  height: 240px;
  overflow: hidden;  /* 固定图片的大小*/
  position: relative;/*定位 */
}
img{
  width: 170px;
  height: 240px;
  transition: transform 0.4s;  /*圆滑的变回去 */
}
.imges:hover img{
  transform: scale(1.1);/*放大 */
}
.caption {
  border-radius: 5px;
  position: absolute; /*相对定位 */
  font-size: 13px;
  color: white;
  background-color: $sucColor;
}
.author{
  color: $xtxColor;
  margin-top: 8px; /* 设置上边距为 20 像素 */
}
.fiction{
  font-size: 25px;
}
.fictiontime{
  color: #757373;
  margin-top: 8px; /* 设置上边距为 20 像素 */
}
.bigclass{
  margin-top: 15px; /* 设置上边距为 20 像素 */
}
.mx-1{
  margin-right: 10px; /* 设置右侧外边距为 10 像素 */
}
.brief{
  margin-top: 20px; /* 设置上边距为 20 像素 */
  width: 610px;
  height: 124px;
  color: #595858;
  overflow: hidden; /* 超出部分隐藏 */

}
.get{
  margin-top: 20px; /* 设置上边距为 20 像素 */
}
.button1{
color: #ffffff;
  width: 120px;
  height: 40px;
  margin-right:10px
}
.button2{
color:$xtxColor;
  width: 120px;
  height: 40px;
  margin-right:10px
}
.button3{
  color:#ffffff;
  width: 120px;
  height: 40px;
}
.fiction-detail-tag{
  margin-left: 10px;

}
</style>

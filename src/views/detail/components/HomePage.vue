
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
            <el-tag size="large" class="fiction-detail-tag">{{fictionData.classify}}</el-tag>
            <el-tag size="large" class="fiction-detail-tag">{{fictionData.bigclass}}</el-tag>
          </div >
          <div class="brief">{{fictionData.brief}}...</div>
          <div class="get">
            <router-link :to="'/read/'+fictionData.fictionId+'0001'"  class="link">
            <el-button  color="#0BAEFDFF" class="button1"  size="large" type="primary" round>开始阅读</el-button>
            </router-link>
            <el-button  color="#E0F3FCFF" class="button2" size="large" type="danger" round :plain="true" @click="open1">加入书架</el-button>
<!--            <el-button   class="button3" size="large" type="danger" round>等待更新</el-button>-->
          </div>
        </el-main>
      </el-container>
    </div>
  </template>



<script lang="ts" setup >
import {onMounted, ref} from 'vue'
import { getFictionAPI } from '/src/apis/fictionAPI'
import { getclick } from '/src/apis/rankinglistAPI'
import {saveBookIdAPI} from '/src/apis/bookrankAPI'
import {useRoute} from "vue-router";
const fictionData = ref({})
const savebook= ref({})
const route = useRoute()
const getsavebook = async ()=>{
    const res = await saveBookIdAPI(route.params.id)
    savebook.value=res.msg
}
const getFiction = async () =>{
  const  res = await getFictionAPI(route.params.id)
  fictionData.value = res.data
  document.title = res.data.name+"-fiction中文网,小说,小说网,最新热门小说,阅读网站";
}
const getCkick = async () =>{
    await getclick(route.params.id)
}
const open1 = () => {
    getsavebook();
    ElMessage({
        message: savebook,
        type: 'success',
    });
}

onMounted(()=>{
    getFiction()
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

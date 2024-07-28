<template>
  <div class="common-layout-category">
    <el-container>
      <el-aside class="fiction-cateagory-my-aside" width="208px">

        <el-menu
        class="fiction-rankinglist-el-menu"
        @open="handleOpen"
        @close="handleClose"
      >
      <h3 class="fiction-rankinglist-h2">男生排行榜</h3>
        <el-menu-item index="1">
            <router-link to="/rankinglist/1/1/collect" class="link">
          <span>收藏榜</span>
            </router-link>
        </el-menu-item>
        <el-menu-item index="2" >
            <router-link to="/rankinglist/1/1/click" class="link">
          <span>点击榜</span>
            </router-link>
        </el-menu-item>
        <el-menu-item index="3">
            <router-link to="/rankinglist/1/1/recommend" class="link">
          <span>推荐榜</span>
            </router-link>
        </el-menu-item>
              <h3 class="fiction-rankinglist-h2">女生排行榜</h3>
        <el-menu-item index="4">
            <router-link to="/rankinglist/2/1/collect" class="link">
          <span>收藏榜</span>
            </router-link>
        </el-menu-item>
        <el-menu-item index="5" >
            <router-link to="/rankinglist/2/1/click" class="link">
          <span>点击榜</span>
            </router-link>
        </el-menu-item>
        <el-menu-item index="6">
            <router-link to="/rankinglist/2/1/recommend" class="link">
          <span>推荐榜</span>
            </router-link>
        </el-menu-item>
              <h3 class="fiction-rankinglist-h2">出版排行榜</h3>
        <el-menu-item index="7">
            <router-link to="/rankinglist/3/1/collect" class="link">
          <span>收藏榜</span>
            </router-link>
        </el-menu-item>
        <el-menu-item index="8" >
            <router-link to="/rankinglist/3/1/click" class="link">
          <span>点击榜</span>
            </router-link>
        </el-menu-item>
        <el-menu-item index="9">
            <router-link to="/rankinglist/3/1/recommend" class="link">
          <span>推荐榜</span>
            </router-link>
        </el-menu-item>
      </el-menu>
      </el-aside>

      <el-main class="fiction-cateagory-my-main" >
        小说列表
        <el-divider />
        <div class="common-for" v-for="item in fictionList" >
          <router-link :to="'/detail/'+item.fictionId" class="link">
          <el-container class="fiction-cateagory-for-container">
            <el-aside width="120px">
              <div class="fiction-cateagory-item">
                <div class="fiction-cateagory-imges">
                  <div class="fiction-cateagory-caption">&nbsp;免费&nbsp;</div>
                  <img class="fiction-cateagory-img" :src= item.prcture>
                </div>
              </div>
            </el-aside>
            <el-main class="fiction-cateagory-my-main-main">
              {{ item.name }}
              <div class="fiction-cateagory-brief">
                {{item.brief}}
               </div>
              <div class="fiction-cateagory-author">
                {{item.author}} 著 {{item.creatTime}}
              </div>
              <div class="fiction-cateagory-click">
                收藏量：{{item.collect}} 点击量：{{item.click}}
              </div>
            </el-main>
          </el-container>
          </router-link>
        </div>
        <br>
        <el-pagination
            class="fiction-cateagory-pagination"
            background layout="prev, pager, next"
            :current-page="newcurrentPage"
            :total="fictiontotal"
            @current-change="handlePageChange"
        />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { onMounted,ref,watch} from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { getfictioncollectAPI,getfictionclickAPI } from '/src/apis/rankinglistAPI'
import{ getRecommendpageAPI } from "/src/apis/RecommendAPI";
import {useRoute, useRouter} from "vue-router";
const route = useRoute()
const router = useRouter()
const data = ref({
  page:route.params.id,
  size:10,
  bigclass:route.params.bigclass,
})
const fictionList = ref([])
const fictiontotal = ref('')
const rankinglist = ref(null);
const newcurrentPage = ref(parseInt(route.params.id));
const getfictioncollect = async () =>{
    const  res = await getfictioncollectAPI(data.value)
    fictionList.value = res.data
    fictiontotal.value = res.total
}
const getfictionclick = async () =>{
    const  res = await getfictionclickAPI(data.value)
    fictionList.value = res.data
    fictiontotal.value = res.total
}
const getRecommendpage = async () =>{
    const  res = await getRecommendpageAPI(data.value)
    fictionList.value = res.data
    fictiontotal.value = res.total
}

const handlePageChange = (currentPage) => {
  console.log("当前页码:", currentPage);
  // 在这里更新数据或执行其他操作
    const newRoute = {
        path: `/rankinglist/${route.params.bigclass}/${currentPage}/${route.params.rankinglist}`, // 新的路由路径，将 currentPage 作为路径的一部分
    };
    router.push(newRoute);

};
const reloadPage = () => {
  // 执行刷新页面的逻辑，例如重新加载数据或重新渲染组件等
  // ...
  location.reload(); // 刷新页面
};

watch(
    () => ({
      bigclass: route.params.bigclass,
      rankinglist: route.params.rankinglist,
      id: route.params.id,
    }),
    (newParams, oldParams) => {
      console.log('参数变化了:', newParams);
      // 执行其他操作...
      reloadPage();
      window.scrollTo(0, 0);//加入后可以回到原始位置
    }
);
onMounted(() => {
    rankinglist.value = route.params.rankinglist;
    if(rankinglist.value === 'collect'){
        getfictioncollect();
    }else if(rankinglist.value === 'click'){
        getfictionclick();
    }else if (rankinglist.value === 'recommend'){
        getRecommendpage();
    }
});


const activeName = ref(route.params.bigclass)
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.fiction-cateagory-my-aside {
  border-right: 1px solid #d3d3d3;
}
.fiction-cateagory-my-main{
  font-size: 20px;
  font-weight: bold;
  padding: 0 0 0 50px;
}
.fiction-cateagory-item{
  width: 120px;
  height: 160px;
}
.fiction-cateagory-imges{
  /* */
  border-radius: 5%; /*圆角 */
  width: 120px;
  height: 160px;
  overflow: hidden;  /* 固定图片的大小*/
  position: relative;/*定位 */
}
.fiction-cateagory-img{
  width: 120px;
  height: 160px;
  transition: transform 0.4s;  /*圆滑的变回去 */
}
.fiction-cateagory-imges:hover img{
  transform: scale(1.1);/*放大 */
}
.fiction-cateagory-caption {
  border-radius: 5px;
  position: absolute; /*相对定位 */
  font-size: 13px;
  color: white;
  background-color: $sucColor;
}
.fiction-cateagory-for-container{
  padding-top: 20px;
}
.fiction-cateagory-my-main-main{
  padding: 0 0 0 20px;
  font-size: 20px;
  font-weight: normal;
}
.fiction-cateagory-brief{
  padding-top: 12px;
  font-size: 15px;
  max-width: 800px;
  height: 60px;
  color: #595858;
  overflow: hidden; /* 超出部分隐藏 */
}
.fiction-cateagory-author{
  padding-top: 10px;
  font-size: 15px;
  color: #b0b0b0;
}
.fiction-cateagory-author:hover{
  color: $xtxColor;
}
.fiction-cateagory-click{
  padding-top: 10px;
  font-size: 15px;
  color: #b0b0b0;
}
.fiction-cateagory-pagination{
  padding-top: 10px;
  padding-left: 400px;
}
.fiction-category-list-classify{
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  width: 208px;
}
.fiction-category-item-classify{
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
}
.fiction-rankinglist-el-menu{
  padding-left: 75px;
}
.fiction-rankinglist-h2{

}
</style>

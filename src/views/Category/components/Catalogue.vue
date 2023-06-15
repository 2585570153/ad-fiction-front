<template>
  <div class="common-layout-category">
    <el-container>
      <el-aside class="fiction-cateagory-my-aside" width="208px">

        <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
        >
          <el-tab-pane  name="nansheng">
              <template v-slot:label>
                  <router-link to="/category/nansheng/1" class="link">男生</router-link>
              </template>
            <div class="fiction-category-list-classify">
              <router-link to="/category/nansheng/1/junshi" class="link"><div class="fiction-category-item-classify">军事</div></router-link>
              <router-link to="/category/nansheng/1/dushi" class="link"><div class="fiction-category-item-classify">都市</div></router-link>
              <router-link to="/category/nansheng/1/youxi" class="link"> <div class="fiction-category-item-classify">游戏</div></router-link>
              <router-link to="/category/nansheng/1/xianxia" class="link"><div class="fiction-category-item-classify">仙侠</div></router-link>
              <router-link to="/category/nansheng/1/xvanhuan" class="link"><div class="fiction-category-item-classify">玄幻</div></router-link>
              <router-link to="/category/nansheng/1/lishi" class="link"><div class="fiction-category-item-classify">历史</div></router-link>
              <router-link to="/category/nansheng/1/wuxia" class="link"><div class="fiction-category-item-classify">武侠</div></router-link>
              <router-link to="/category/nansheng/1/kehuan" class="link"><div class="fiction-category-item-classify">科幻</div></router-link>
              <router-link to="/category/nansheng/1/xvanyi" class="link"><div class="fiction-category-item-classify">悬疑</div></router-link>
            </div>
          </el-tab-pane>
            <el-tab-pane  name="nvsheng">
                <template v-slot:label>
                    <router-link to="/category/nvsheng/1" class="link">女生</router-link>
                </template>
            <div class="fiction-category-list-classify">
              <router-link to="/category/nvsheng/1/xyzt" class="link"><div class="fiction-category-item-classify">悬疑侦探</div></router-link>
              <router-link to="/category/nvsheng/1/xdyq" class="link"> <div class="fiction-category-item-classify">现代言情</div></router-link>
              <router-link to="/category/nvsheng/1/gdyq" class="link"><div class="fiction-category-item-classify">古代言情</div></router-link>
              <router-link to="/category/nvsheng/1/yxjj" class="link"><div class="fiction-category-item-classify">游戏竞技</div></router-link>
              <router-link to="/category/nvsheng/1/khkj" class="link"><div class="fiction-category-item-classify">科幻空间</div></router-link>
              <router-link to="/category/nvsheng/1/xxqy" class="link"><div class="fiction-category-item-classify">仙侠奇缘</div></router-link>
            </div>

          </el-tab-pane>
          <el-tab-pane  name="chuban">
              <template v-slot:label>
                  <router-link to="/category/chuban/1" class="link">出版</router-link>
              </template>
            <div class="fiction-category-list-classify">
              <router-link to="/category/chuban/1/qingchun" class="link"><div class="fiction-category-item-classify">青春</div></router-link>
              <router-link to="/category/chuban/1/xiaoshuo" class="link"> <div class="fiction-category-item-classify">小说</div></router-link>
              <router-link to="/category/chuban/1/falv" class="link"><div class="fiction-category-item-classify">法律</div></router-link>
              <router-link to="/category/chuban/1/wenxve" class="link"><div class="fiction-category-item-classify">文学</div></router-link>
              <router-link to="/category/chuban/1/chuanji" class="link"><div class="fiction-category-item-classify">传记</div></router-link>
            </div>
          </el-tab-pane>
        </el-tabs>
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
            :total="fictiontotal"
            :current-page="newcurrentPage"
            @current-change="handlePageChange"
        />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { onMounted,ref,watch} from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { getCategoryAPI } from '/src/apis/fictionAPI'
import {useRoute,useRouter} from "vue-router";
const route = useRoute()
const router = useRouter()
const data = ref({
  page:route.params.id,
  size:10,
  bigclass:route.params.bigclass,
  classify:route.params.classify
})
const fictionList = ref([])
const fictiontotal = ref('')
const newcurrentPage = ref(parseInt(route.params.id)); // 使用 ref 创建响应式的 currentPage 变量
const getFiction = async () =>{
  const  res = await getCategoryAPI(data.value)
  fictionList.value = res.data
  fictiontotal.value = res.total
}
const handlePageChange = (currentPage) => {
  console.log("当前页码:", currentPage);

  // 在这里更新数据或执行其他操作
    const newRoute = {
        path: `/category/${route.params.bigclass}/${currentPage}/${route.params.classify}`, // 新的路由路径，将 currentPage 作为路径的一部分
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
      classify: route.params.classify,
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
  getFiction()

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
</style>

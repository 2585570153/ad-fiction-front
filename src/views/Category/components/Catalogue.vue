<template>
  <div class="common-layout-category">
    <el-container>
      <el-aside class="fiction-cateagory-my-aside" width="209px">

        <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
        >
        <el-tab-pane
          v-for="tab in tabs"
          :key="tab.code"
          :name="tab.code"
        >
          <template v-slot:label>
            <router-link :to="`/category/${tab.code}/1`" class="link">{{ tab.name }}</router-link>
          </template>
          <div class="fiction-category-list-classify">
            <router-link
              v-for="item in (categories[tab.code] || [])"
              :key="item.code"
              :to="`/category/${tab.code}/1/${item.code}`"
              class="link"
            >
              <div class="fiction-category-item-classify"
              :class="{ 'active-tab': activeTab === item.code }"
              >{{ item.name }}</div>
            </router-link>
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
import { getclassifyAPI } from '/src/apis/classifyAPI'
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
const tabs = ref([]);
const categories = ref({});
const activeTab = ref(route.params.classify);
const getclassify = async () => {
      try {
        // 获取主分类数据
        const res = await getclassifyAPI(1, "");
        tabs.value = res.data;

        // 获取每个主分类的子分类数据
        const categoryPromises = res.data.map(async (tab) => {
          const resSon = await getclassifyAPI(2, tab.code);
          categories.value[tab.code] = resSon.data;
        });

        // 等待所有子分类数据请求完成,如果任何一个请求失败，Promise.all 会立即返回失败的状态
        await Promise.all(categoryPromises);

      } catch (error) {
        console.error("Failed to fetch classifications:", error);
      }
   };
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
  getFiction();
  getclassify();

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
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 12px;
  margin-top: 12px;


}
.active-tab {
  background-color: #E7F5FF;
  color: #0AAFFF;
  border-radius: 10px;  /* 调整为椭圆形 */
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
  display: inline-block;
}
</style>

<template>
    <div class="common-for" v-for="item in fictionList" >
        <router-link :to="'/detail/'+item.fictionId" class="link">
            <el-container class="fiction-search-for-container">
                <el-aside width="120px">
                    <div class="fiction-search-item">
                        <div class="fiction-search-imges">
                            <div class="fiction-search-caption">&nbsp;免费&nbsp;</div>
                            <img class="fiction-search-img" :src= item.prcture>
                        </div>
                    </div>
                </el-aside>
                <el-main class="fiction-search-my-main-main">
                    {{ item.name }}
                    <div class="fiction-search-brief">
                        {{item.brief}}
                    </div>
                    <div class="fiction-search-author">
                        {{item.author}} 著 {{item.creatTime}}
                    </div>
                    <div class="fiction-search-click">
                        收藏量：{{item.collect}} 点击量：{{item.click}}
                    </div>
                </el-main>
            </el-container>
        </router-link>
    </div>
    <br>
    <el-pagination
            class="fiction-search-pagination"
            background layout="prev, pager, next"
            :current-page="newcurrentPage"
            :total="fictiontotal"
            @current-change="handlePageChange"
    />
</template>

<script lang="ts" setup>
import { onMounted,ref,watch} from 'vue'
import {useRoute, useRouter} from "vue-router";
import {searchAPI} from '/src/apis/searchAPI'
const route = useRoute()
const router = useRouter()
const data = ref({
    page:route.params.id,
    size:10,
    search:route.params.name,
})
const fictionList = ref([])
const fictiontotal = ref('')

const newcurrentPage = ref(parseInt(route.params.id));


const getsearchAPI = async () =>{
    const  res = await searchAPI(data.value)
    fictionList.value = res.data
    fictiontotal.value = res.total
}

const handlePageChange = (currentPage) => {
    console.log("当前页码:", currentPage);
    // 在这里更新数据或执行其他操作
    const newRoute = {
        path: `/search/${route.params.name}/${route.params.id}`, // 新的路由路径，将 currentPage 作为路径的一部分
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
        name: route.params.name,
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
    getsearchAPI()

});

</script>

<style scoped lang="scss">
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
.fiction-search-my-aside {
    border-right: 1px solid #d3d3d3;
}
.fiction-search-my-main{
    font-size: 20px;
    font-weight: bold;
    padding: 0 0 0 50px;
}
.fiction-search-item{
    width: 120px;
    height: 160px;
}
.fiction-search-imges{
    /* */
    border-radius: 5%; /*圆角 */
    width: 120px;
    height: 160px;
    overflow: hidden;  /* 固定图片的大小*/
    position: relative;/*定位 */
}
.fiction-search-img{
    width: 120px;
    height: 160px;
    transition: transform 0.4s;  /*圆滑的变回去 */
}
.fiction-search-imges:hover img{
    transform: scale(1.1);/*放大 */
}
.fiction-search-caption {
    border-radius: 5px;
    position: absolute; /*相对定位 */
    font-size: 13px;
    color: white;
    background-color: $sucColor;
}
.fiction-search-for-container{
    padding-top: 20px;
}
.fiction-search-my-main-main{
    padding: 0 0 0 20px;
    font-size: 20px;
    font-weight: normal;
}
.fiction-search-brief{
    padding-top: 12px;
    font-size: 15px;
    max-width: 1319px;
    height: 60px;
    color: #595858;
    overflow: hidden; /* 超出部分隐藏 */
}
.fiction-search-author{
    padding-top: 10px;
    font-size: 15px;
    color: #b0b0b0;
}
.fiction-search-author:hover{
    color: $xtxColor;
}
.fiction-search-click{
    padding-top: 10px;
    font-size: 15px;
    color: #b0b0b0;
}
.fiction-search-pagination{
    padding-top: 10px;
    padding-left: 400px;
}

</style>
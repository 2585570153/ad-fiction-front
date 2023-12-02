<template>
    <div class="bookrank-book">
        <div class="bookrank-item" v-for="item in bookRankData">
            <router-link :to="'/detail/'+item.fictionId" class="link">
            <div class="bookrank-imges">
                <div class="bookrank-caption">&nbsp;免费&nbsp;</div>
                <img class="bookrank-img" :src= "item.prcture">
            </div>
            <div class="bookrank-name">{{ item.name }}</div>
            <div class="bookrank-author">{{ item.author }}</div>
            </router-link>
            <el-button class="bookrank-book-ml-2"  type="danger" :icon="Delete" circle @click="getdeleteBookId(item.fictionId)" />

        </div>
        <div class="bookrank-book-null" v-if="!bookRankData">
        <img src="/public/assets/logo.png"
             width="400"
             height="100"
        >
        <h3>空空如也</h3>
        <h3>赶快用好书塞满书架</h3>
        <router-link to="/category/nansheng/1" class="link">
        <el-button size="large"
                   type="primary"
                   round>去找书</el-button>
        </router-link>
        </div>
    </div>

</template>

<script setup>
import {getBookRankAPI,deleteBookIdAPI} from "@/apis/bookrankAPI";
import {onMounted, ref} from "vue";
import {
    Delete,
} from '@element-plus/icons-vue'
const bookRankData = ref([])
const getBookRank = async ()=>{
    const res = await getBookRankAPI()
    bookRankData.value = res.data
}
const getdeleteBookId= async (id)=>{
    const res = await deleteBookIdAPI(id)
    location.reload();
}
onMounted(()=>{
    getBookRank();
})
</script>

<style scoped lang="scss">
.bookrank-book{
    display: flex;
    flex-wrap: wrap; /* 当项目水平排满时换行 */
    max-width: 1300px; /* 适当设置容器的最大宽度 */
}
.bookrank-book-null{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 335px;
    width: 1200px;
}

.bookrank-item{
    width: 140px;
    height: 180px;
    padding-top: 10px;
    padding-bottom: 100px;
    padding-left: 0px;
    padding-right: 40px;
}
.bookrank-imges{
    /* */
    border-radius: 5%; /*圆角 */
    overflow: hidden;  /* 固定图片的大小*/
    position: relative;/*定位 */
    width: 100%; /* 图片宽度填满容器 */
    height: 100%; /* 图片高度填满容器 */
    object-fit: cover; /* 缩放和剪裁图片以填充容器 */
}
.bookrank-img{
    width: 100%; /* 图片宽度填满容器 */
    height: 100%; /* 图片高度填满容器 */
    object-fit: cover; /* 缩放和剪裁图片以填充容器 */
}
.bookrank-imges:hover .bookrank-img{
    transform: scale(1.1);/*放大 */
}
.bookrank-caption {
    border-radius: 5px;
    position: absolute; /*相对定位 */
    font-size: 13px;
    color: white;
    background-color: $sucColor;
}
.bookrank-name{
    padding-top: 10px;
}
.bookrank-author{
    padding-top: 10px;
    color: #757373;
    font-size: 13px;
}
.bookrank-name:hover{
    color:$xtxColor;
}
.bookrank-author:hover{
    color:$xtxColor;
}
.bookrank-book-ml-2{
    margin-left: 110px;
    margin-top:-50px;
}
</style>
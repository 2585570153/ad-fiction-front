<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">
        <div class="affix-container">
          <el-affix target=".affix-container" :offset="0">
        <navigation navid="1"/>
          </el-affix>
        </div>
      </el-header>
      <el-main class="bodymain">
        <Banner />
        <News/>

        <Boutique title="男生精选" sub-title="强力推荐，品质保证" href="url(../assets/column-bg1.png)">
            <div class="item"
                 v-for="item in recommendData1"
            >
              <router-link :to="'/detail/'+item.fictionId" class="link">
              <div class="home-imges">
                <div class="caption">&nbsp;免费&nbsp;</div>
                <img  :src=item.prcture>
              </div>
              <div class="font1">{{ item.name }}</div>
              <div class="font2">{{item.brief}}</div>
              <div class="container">
                <div class="font3">{{item.author}}</div>
                <div class="font4">{{ item.click }}读过</div>
              </div>
              </router-link>
            </div>
        </Boutique>
        <RankingList href="url(../assets/rank-bg0.png)" bclass="nansheng"/>
          <br><br><br><br><br><br><br><br><br><br><br><br><br>

          <Boutique title="女生精选" sub-title="强力推荐，品质保证" href="url(../assets/column-bg2.png)">
          <div class="item"
               v-for="item in recommendData2"
          >
            <router-link :to="'/detail/'+item.fictionId" class="link">
            <div class="home-imges">
              <div class="caption">&nbsp;免费&nbsp;</div>
              <img  :src=item.prcture>
            </div>
            <div class="font1">{{ item.name }}</div>
            <div class="font2">{{item.brief}}</div>
            <div class="container">
              <div class="font3">{{item.author}}</div>
              <div class="font4">{{ item.click }}读过</div>
            </div>
            </router-link>
          </div>
        </Boutique>
        <RankingList href="url(../assets/rank-bg1.png)" bclass="nvsheng"/>
         <br><br><br><br><br><br><br><br><br><br><br><br><br>

          <Boutique title="出版精选" sub-title="强力推荐，品质保证" href="url(../assets/column-bg3.png)">
          <div class="item"
               v-for="item in recommendData3"
          >
            <router-link :to="'/detail/'+item.fictionId" class="link">
            <div class="home-imges">
              <div class="caption">&nbsp;免费&nbsp;</div>
              <img  :src=item.prcture>
            </div>
            <div class="font1">{{ item.name }}</div>
            <div class="font2">{{item.brief}}</div>
            <div class="container">
              <div class="font3">{{item.author}}</div>
              <div class="font4">{{ item.click }}读过</div>
            </div>
            </router-link>
          </div>
        </Boutique>
        <RankingList href="url(../assets/rank-bg2.png)" bclass="chuban"/>
          <br><br><br><br><br><br><br><br><br><br><br><br><br>

      </el-main>
      <el-footer class="fiction-footer">
        <fictionfooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Navigation from "@/views/Layout/components/Navigation.vue";
import Banner from "@/views/Layout/components/Banner.vue";
import News from "@/views/Layout/components/News.vue";
import Boutique from "@/views/Layout/components/Boutique.vue";
import RankingList from "@/views/Layout/components/RankingList.vue";
import {onMounted, ref} from "vue";
import{getRecommendAPI} from "/src/apis/RecommendAPI";
import Fictionfooter from "@/components/fictionfooter.vue";
const recommendData1 = ref([])
const recommendData2 = ref([])
const recommendData3 = ref([])

const getrecommend1 = async () =>{
  const  res = await getRecommendAPI(6,"男生")
  recommendData1.value = res.data
}
const getrecommend2 = async () =>{
  const  res = await getRecommendAPI(6,"女生")
  recommendData2.value = res.data
}
const getrecommend3 = async () =>{
  const  res = await getRecommendAPI(6,"出版")
  recommendData3.value = res.data
}

function created(){
  window.scrollTo(0, 0);
}

onMounted(() => {
  getrecommend1();
  getrecommend2();
  getrecommend3();
  created();
});
</script>

<style scoped lang="scss">

.bodymain{

  padding: 30px 159px;
  background-image: url(../assets/bg.jpg);
  background-repeat: no-repeat;

}

.link{
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 继承父元素的文本颜色 */
}
.header{
  padding: 0;
}
.affix-container {
  text-align: center;
  /*设置导航固定的隐藏宽度*/
  height: 4000px;

  border-radius: 1px;
}


.item{
  width: 140px;
  height: 200px;
  margin: auto; /* 将左右外边距都设置为自动，从而使该元素在其父容器中水平居中 */
  padding-top: 30px;/* 增加上边距 */
}
.home-imges{
  /* */
  border-radius: 5%; /*圆角 */
  width: 140px;
  height: 188px;
  overflow: hidden;  /* 固定图片的大小*/
  position: relative;/*定位 */
}
.home-imges img {
  width: 100%; /* 图片宽度填满容器 */
  height: 100%; /* 图片高度填满容器 */
  object-fit: cover; /* 缩放和剪裁图片以填充容器 */
}
img{
  transition: transform 0.4s;  /*圆滑的变回去 */
}
.home-imges:hover img{
  transform: scale(1.1);/*放大 */
}
.caption {
  border-radius: 5px;
  position: absolute; /*相对定位 */
  font-size: 13px;
  color: white;
  background-color: $sucColor;
}
.font1{
  padding-top: 10px;/* 增加上边距 */
  font-weight: bold;
  margin-bottom: 10px;/* 增加下边距 */
}
.font1:hover{
  color: $xtxColor;
}
.font2{
  width:140px;
  font-size: 10px;
  color: #777575;
  margin-bottom: 5px;/* 增加下边距 */
  white-space: nowrap;/*设置元素中的空白如何处理 不容许换行*/
  overflow: hidden;/*裁切字数，搭配宽度使用*/
  text-overflow: ellipsis;/*表示用省略号来表示被裁剪的文本。*/
}
.container{
  overflow: hidden;   /* 消除浮动 两个div合并在一块*/
}
.font3{
  display: inline-block;  /* 消除浮动 两个div合并在一块*/
  color: #a99e9e;
  font-size: 10px;
  float: left;  /* 左对齐*/
}
.font3:hover{
  color: $xtxColor;
}
.font4{
  display: inline-block;  /*消除浮动 两个div合并在一块 */
  color: #fda718;
  font-size: 10px;
  float: right;  /*右对齐 */
}
.fiction-footer{
  height: 250px;
  padding: 0;
}
</style>

<script setup>
import { onMounted,ref} from 'vue'
import { getfictioncollectAPI,getfictionclickAPI } from '/src/apis/rankinglistAPI'
import{ getRecommendpageAPI } from "/src/apis/RecommendAPI";

const propss = defineProps({
  href:{
    type: String,
  },
  bclass:{
    type: String,
  },
})



const data = ref({
    page:1,
    size:10,
    bigclass:propss.bclass,
})
const fictioncollectList = ref([])
const fictionclickList = ref([])
const fictionRecommendpageList = ref([])
const getfictioncollect = async () =>{
    const  res = await getfictioncollectAPI(data.value)
    fictioncollectList.value = res.data
}
const getfictionclick = async () =>{
    const  res = await getfictionclickAPI(data.value)
    fictionclickList.value = res.data
}
const getRecommendpage = async () =>{
    const  res = await getRecommendpageAPI(data.value)
    fictionRecommendpageList.value = res.data
}
onMounted(() => {
        getfictioncollect();
        getfictionclick();
        getRecommendpage();
});
</script>
<template>
  <div class="rankinglist">
    <div class="item">
      <h2>收藏榜 ></h2>
      <div class="container" v-for="(item, index) in fictioncollectList" :key="index">
          <router-link :to="'/detail/'+item.fictionId" class="link">
          <div class="icon">
          <img  :src="'../assets/'+index+'.png'" alt="" v-if="index === 0 || index === 1 || index === 2">

          <div class="caption1" v-if="index === 9">&nbsp;{{ index+1 }}&nbsp;</div>
          <div class="caption" v-if="index !== 0 && index !== 1 && index !== 2 && index !== 9">&nbsp;{{ index+1 }}&nbsp;</div>

         <img class="img2" src="/public/assets/4.png" alt="" v-if="index !== 0 && index !== 1 && index !== 2">
        </div>
          <div class="title">
          <p>{{ item.name }}</p>
          <div class="content"></div>
        </div>
          <div class="bookhome" :style="{ backgroundImage: href}" v-if="index === 0 || index === 1 || index === 2">
            <div class="text">
                {{item.brief}}
            </div>
            <div class="text2">{{item.author}}</div>
            <div class="imgbook1">
                <div class="book1"></div>
                <img  class="book2" :src="item.prcture" alt="">
            </div>
        </div>
          <div class="book" v-if="index !== 0 && index !== 1 && index !== 2">
              <div class="text">
                  {{item.brief}}
              </div>
              <div class="text2">{{item.author}}</div>
              <div class="imgbook1">
                  <div class="book1"></div>
                  <img  class="book2" :src="item.prcture" alt="">
              </div>
          </div>
          </router-link>
      </div>
   </div>
    <div class="item">
          <h2>点击榜 ></h2>
          <div class="container" v-for="(item, index) in fictionclickList" :key="index">
              <router-link :to="'/detail/'+item.fictionId" class="link">
                  <div class="icon">
                      <img  :src="'../assets/'+index+'.png'" alt="" v-if="index === 0 || index === 1 || index === 2">
                      <div class="caption1" v-if="index === 9">&nbsp;{{ index+1 }}&nbsp;</div>
                      <div class="caption" v-if="index !== 0 && index !== 1 && index !== 2 && index !== 9">&nbsp;{{ index+1 }}&nbsp;</div>
                      <img class="img2" src="/public/assets/4.png" alt="" v-if="index !== 0 && index !== 1 && index !== 2">
                  </div>
                  <div class="title">
                      <p>{{ item.name }}</p>
                      <div class="content"></div>
                  </div>
                  <div class="bookhome" :style="{ backgroundImage: href}" v-if="index === 0 || index === 1 || index === 2">
                      <div class="text">
                          {{item.brief}}
                      </div>
                      <div class="text2">{{item.author}}</div>
                      <div class="imgbook1">
                          <div class="book1"></div>
                          <img  class="book2" :src="item.prcture" alt="">
                      </div>
                  </div>
                  <div class="book" v-if="index !== 0 && index !== 1 && index !== 2">
                      <div class="text">
                          {{item.brief}}
                      </div>
                      <div class="text2">{{item.author}}</div>
                      <div class="imgbook1">
                          <div class="book1"></div>
                          <img  class="book2" :src="item.prcture" alt="">
                      </div>
                  </div>
              </router-link>
          </div>
      </div>
    <div class="item">
          <h2>推荐榜 ></h2>
          <div class="container" v-for="(item, index) in fictionRecommendpageList" :key="index">
              <router-link :to="'/detail/'+item.fictionId" class="link">
                  <div class="icon">
                      <img  :src="'../assets/'+index+'.png'" alt="" v-if="index === 0 || index === 1 || index === 2">
                      <div class="caption1" v-if="index === 9">&nbsp;{{ index+1 }}&nbsp;</div>
                      <div class="caption" v-if="index !== 0 && index !== 1 && index !== 2 && index !== 9">&nbsp;{{ index+1 }}&nbsp;</div>
                      <img class="img2" src="/public/assets/4.png" alt="" v-if="index !== 0 && index !== 1 && index !== 2">
                  </div>
                  <div class="title">
                      <p>{{ item.name }}</p>
                      <div class="content"></div>
                  </div>
                  <div class="bookhome" :style="{ backgroundImage: href}" v-if="index === 0 || index === 1 || index === 2">
                      <div class="text">
                          {{item.brief}}
                      </div>
                      <div class="text2">{{item.author}}</div>
                      <div class="imgbook1">
                          <div class="book1"></div>
                          <img  class="book2" :src="item.prcture" alt="">
                      </div>
                  </div>
                  <div class="book" v-if="index !== 0 && index !== 1 && index !== 2">
                      <div class="text">
                          {{item.brief}}
                      </div>
                      <div class="text2">{{item.author}}</div>
                      <div class="imgbook1">
                          <div class="book1"></div>
                          <img  class="book2" :src="item.prcture" alt="">
                      </div>
                  </div>
              </router-link>
          </div>
      </div>



  </div>
</template>

<style scoped lang="scss">
.rankinglist{
  padding-top: 20px;/* 增加上边距 */
  display: flex;/* 水平布局 */
  width: 1185px;

}
.item{
  height:850px;
  width: 395px;
  margin: auto; /* 将左右外边距都设置为自动，从而使该元素在其父容器中水平居中 */

}
h2:hover{
  color: $xtxColor;
}
.container{
  position: relative; /* 设置父容器相对定位 */
  overflow: hidden;   /* 消除浮动 两个div合并在一块*/
}
.icon{
  display: inline-block;  /* 消除浮动 两个div合并在一块*/
  position: relative;/*定位 */
}
.title{
  position: absolute; /* 设置子元素绝对定位 */
  left: 35px; /* 相对于父容器左侧偏移100像素 */
  display: inline-block;  /* 消除浮动 两个div合并在一块*/
  font-size: 16px;
  margin-left: 20px;  /* 左边距为40像素 */ /* 上右下左依次为10 20 30 40像素 */
}
img{
width: 40px;
}
.img2{
  width: 40px;
  height: 50px;
}
p{
  width: 280px;
  white-space: nowrap;/*设置元素中的空白如何处理 不容许换行*/
  overflow: hidden;/*裁切字数，搭配宽度使用*/
  text-overflow: ellipsis;/*表示用省略号来表示被裁剪的文本。*/
}
.caption {
  position: absolute; /*相对定位 */
  font-size: 22px;
  color: white;
  top: 20%;
  left: 15%;

}
.caption1 {
  position: absolute; /*相对定位 */
  font-size: 22px;
  color: white;
  top: 20%;

}
p:hover{
  color: $xtxColor;
}

.bookhome{
  display: block;
  background-image: url(../assets/rank-bg0.png);
  border-radius: 20px; /* 设置圆角 */
  position: relative; /* 设置父容器相对定位 */
  overflow: hidden;   /* 消除浮动 两个div合并在一块*/
  height: 131px;
  width: 370px;
}
.book{
  display: none;
  background-image: url(../assets/rank-bg0.png);
  border-radius: 20px; /* 设置圆角 */
  position: relative; /* 设置父容器相对定位 */
  overflow: hidden;   /* 消除浮动 两个div合并在一块*/
  height: 131px;
  width: 370px;
}
.text{
  position: absolute; /* 设置绝对定位 */
  display: inline-block;  /* 消除浮动 两个div合并在一块*/
  width: 210px;
  height: 70px;
  overflow: hidden; /* 设置溢出内容隐藏 */
  font-size: 14px;
  line-height: 1.6;
  color: #626262;
  transform: translate(15%, 25%); /* 居中显示 */

}
.text2{
  position: absolute; /* 设置绝对定位 */
  top: 90px;
  left: 30px;
  color: #9d9a9a;
}
.text2:hover{
  color: $xtxColor;
}
.imgbook1{
  display: inline-block;  /* 消除浮动 两个div合并在一块*/
  float: right;
}


.book1{
  position: absolute; /* 设置绝对定位 */
  top: 5px;
  left: 260px;
  height:125px;
  width:100px;
  background-image: url(../assets/cube-book.9e71db9.png);
  background-size: contain;

}
.book2{
  position: absolute; /* 设置绝对定位 */
  height:112px;
  width:92px;
  left: 253px;
  top: 10px;
  transform: rotateY(45deg) rotateX(2deg) rotateZ(2deg);/*立体效果*/
}
.title:hover + .book {
  display: block;
  opacity: 1;
  animation: fadeIn 1s; /* 添加动画效果 */
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

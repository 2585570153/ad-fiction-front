<script setup>
defineProps({
  title: {
    type: String
  },
  subTitle: {
    type: String
  },
  href: {
    type: String
  }
})


</script>
<template>
  <div class="Boutique">
  <h2>{{title}}<small>{{subTitle}}</small></h2>
  <div class="list" :style="{ backgroundImage: href}">
    <div class="item">
      <div class="imges">
        <div class="caption">&nbsp;免费&nbsp;</div>
      <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/1.jpg">
      </div>
      <div class="font1">斗罗:乖孙快来爷爷我是封号斗罗</div>
      <div class="font2">叶天得了癌症，时日无多。未曾想，去世三年去世三年去世三年去世三年去世三年去世三年去世三年去世三年</div>
      <div class="container">
      <div class="font3">颍川种花兔</div>
      <div class="font4">0读过</div>
      </div>
    </div>
    <div class="item">
      <div class="imges">
        <div class="caption">&nbsp;免费&nbsp;</div>
      <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/2.jpg">
      </div>
      <div class="font1">人在斗破写日记萧董儿爱上了我</div>
      <div class="font2">萧默穿越到斗破苍弯的世界，写日记就能变</div>
      <div class="container">
        <div class="font3">兼蕾儿啾咪</div>
        <div class="font4">0读过</div>
      </div>
    </div>
    <div class="item">
      <div class="imges">
        <div class="caption">&nbsp;免费&nbsp;</div>
      <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/6.jpg">
      </div>
      <div class="font1">重生药王</div>
      <div class="font2">一代药王，重生幼年。舍生忘死影响他一生的</div>
      <div class="container">
        <div class="font3">贼公子</div>
        <div class="font4">0读过</div>
      </div>
    </div>
    <div class="item">
      <div class="imges">
        <div class="caption">&nbsp;免费&nbsp;</div>
      <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/5.jpg">
      </div>
      <div class="font1">重回1980: 请再爱我一次</div>
      <div class="font2">[重生年代+渣男悔过+宠妻日常+商战]大</div>
      <div class="container">
        <div class="font3">麻将君</div>
        <div class="font4">0读过</div>
      </div>
    </div>
    <div class="item">
      <div class="imges">
        <div class="caption">&nbsp;免费&nbsp;</div>
      <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/4.jpg">
      </div>
      <div class="font1">星河之上</div>
      <div class="font2">科技发展至瓶颈，人类发现能够让其纵横星河.</div>
      <div class="container">
        <div class="font3">柳下挥</div>
        <div class="font4">0读过</div>
      </div>
    </div>
    <div class="item">
      <div class="imges">
        <div class="caption">&nbsp;免费&nbsp;</div>
      <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/3.jpg">
      </div>
      <div class="font1">人在斗罗，开局遭雷劈</div>
      <div class="font2">废武魂蓝银草?变异的都只有0.5级先天魂...</div>
      <div class="container">
        <div class="font3">爆炒齐天椒</div>
        <div class="font4">0读过</div>
      </div>
    </div>
  </div>
  </div>



</template>
<style scoped lang="scss">
.Boutique{
  padding-top: 20px;/* 增加上边距 */
  height:400px ;
}
small{
  margin-left: 15px;
  font-size: 12px;
  color: #9d9a9a;
}
h2:hover{
  color: $xtxColor;
}
.list{
  width: 1185px;
  height: 150px;
  display: flex;
  background-image: url(/src/assets/column-bg1.png);
  border-radius: 10px;
  justify-content: space-between; /* 使子元素平均分布在容器中 */
  background-size: cover; /* 将背景图片缩放到最大值以覆盖整个元素，并保持其宽高比 */
  background-position: center top; /* 将背景图片的中心点对准元素的顶部 */
}
.item{
  width: 140px;
  height: 200px;
  margin: auto; /* 将左右外边距都设置为自动，从而使该元素在其父容器中水平居中 */
  padding-top: 30px;/* 增加上边距 */
}
.imges{
  /* */
  border-radius: 5%; /*圆角 */
  width: 140px;
  height: 188px;
  overflow: hidden;  /* 固定图片的大小*/
  position: relative;/*定位 */
}
img{
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
</style>

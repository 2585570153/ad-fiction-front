<template>
  <div class="sidecolumn">
    <br>
    <div class="sidecolumn-left">
      精选热门书>
      <div class="sidecolumn-item">
      <div class="sidecolumn-imges">
        <div class="sidecolumn-caption">&nbsp;免费&nbsp;</div>
        <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/3.jpg">
      </div>
      <div class="sidecolumn-content">
        <div class="sidecolumn-title">这是一个书名1111</div>
        <div class="sidecolumn-author">这是一个作者</div>
      </div>
    </div>
      <div class="sidecolumn-item">
        <div class="sidecolumn-imges">
          <div class="sidecolumn-caption">&nbsp;免费&nbsp;</div>
          <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/3.jpg">
        </div>
        <div class="sidecolumn-content">
          <div class="sidecolumn-title">这是一个书名1111</div>
          <div class="sidecolumn-author">这是一个作者</div>
        </div>
      </div>
      <div class="sidecolumn-item">
        <div class="sidecolumn-imges">
          <div class="sidecolumn-caption">&nbsp;免费&nbsp;</div>
          <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/3.jpg">
        </div>
        <div class="sidecolumn-content">
          <div class="sidecolumn-title">这是一个书名1111</div>
          <div class="sidecolumn-author">这是一个作者</div>
        </div>
      </div>
      <br>
    </div>
  </div>

</template>

<script setup>


</script>

<style scoped lang="scss">

.sidecolumn{
  border-radius: 3%; /*圆角 */
  background-color: #F3F3F5FF;
  font-size: 21px;
  font-weight: bold;

}
.sidecolumn-left{
margin-left: 15px;
}
.sidecolumn-item{
  display: flex;
  margin-top: 20px; /* 设置上边距为 20 像素 */

}
.sidecolumn-imges{
  /* */
  border-radius: 5%; /*圆角 */
  width: 100px;
  height: 140px;
  overflow: hidden;  /* 固定图片的大小*/
  position: relative;/*定位 */

}
img{
  width: 100px;
  height: 140px;
  transition: transform 0.4s;  /*圆滑的变回去 */
}
.sidecolumn-imges:hover img{
  transform: scale(1.1);/*放大 */
}
.sidecolumn-caption {
  border-radius: 5px;
  position: absolute; /*相对定位 */
  font-size: 13px;
  color: white;
  background-color: $sucColor;
}
.sidecolumn-title{
  width: 150px;
  color: #3d3d3d;
  margin-top: 35px; /* 设置上边距为 20 像素 */
  margin-left: 15px;
  font-size: 15px;
}
.sidecolumn-author{
  width: 120px;
  margin-top: 20px; /* 设置上边距为 20 像素 */
  margin-left: 15px;
  font-size: 10px;
  color: $xtxColor;
}
</style>

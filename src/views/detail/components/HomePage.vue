
  <template>
    <div class="homepage">
      <el-container>
        <el-aside width="200px">
          <div class="item">
            <div class="imges">
              <div class="caption">&nbsp;免费&nbsp;</div>
              <img  src="http://cloud.aiheadn.cn/fiction/fengmian/news/1.jpg">
            </div>
          </div>

        </el-aside>

        <el-main class="main">
          <div class="title" >
            <div class="fiction">斗罗：乖孙快来爷爷我是封号斗罗&nbsp;&nbsp;</div>
            <div class="author">颍川种花兔 著</div>
            <div class="fictiontime">&nbsp;&nbsp; 更新时间：2023-05-16 22:27:32</div>
          </div >
          <div class="bigclass" >
            <el-tag
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                class="mx-1"
                effect="dark"
                size="large"
            >
              {{ item.label }}
            </el-tag>
          </div >
          <div class="brief">叶天得了癌症，时日无多。未曾想，去世三年的爷爷，忽然联系上了叶天。爷爷说当年他死后，转生斗罗大陆。如今晋级封号斗罗，即将成为武魂殿长老，让叶天赶快过去。叶天感慨人心不古，他都快死了，竟被电话诈骗。直至大限将行，再次睁眼。“玩真的？！”………………爷爷是封号斗罗，扶持爷爷上位武魂殿。</div>
          <div class="get">
            <el-button  color="#0BAEFDFF" class="button1"  size="large" type="primary" round>开始阅读</el-button>
            <el-button  color="#E0F3FCFF" class="button2" size="large" type="danger" round>加入书架</el-button>
            <el-button   class="button3" size="large" type="danger" round>等待更新</el-button>
          </div>
        </el-main>
      </el-container>
    </div>
  </template>



<script lang="ts" setup >

import { ref } from 'vue'
import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: '', label: '轻小说' },
  { type: '', label: '男生' }
])
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
  color: #595858;

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

</style>

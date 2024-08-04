
  <template>
    <div class="homepage">
      <el-container>
        <el-aside width="100px">
          <router-link :to="'/detail/'+fictionData.fictionId" class="link">
            <div class="item">
              <div class="imges">
                <div class="caption">&nbsp;免费&nbsp;</div>
                <img  :src= "fictionData.prcture">
              </div>
            </div>
        </router-link>


        </el-aside>

        <el-main class="main">
        <div class="content">
        <h1 class="title">{{fictionData.name}}</h1>
        <p class="author">{{fictionData.author}}·{{classifyLabel }}·{{bigclassLabel }}</p>
        <el-button type="primary" @click="open1" round>加入书架</el-button>
      </div>
        </el-main>
      </el-container>
    </div>
  </template>



<script lang="ts" setup >
const props = defineProps({
  fictionData: Object
})
import {onMounted,computed} from 'vue'
import {saveBookIdAPI} from '/src/apis/bookrankAPI'
import {useRoute,useRouter} from "vue-router";
import { ClassifyEnum, BigClassEnum } from '/src/enums/enums.js'; // 导入枚举

const route = useRoute()
const router = useRouter();

const getsavebook = async ()=>{
    const res = await saveBookIdAPI(route.params.id)
    if(res.code==1){
      ElMessage({
        message: res.msg,
        type: 'success',
    });
    }else{
      ElMessage({
        message: res.msg,
        type: 'error',
    });
    }
}
const open1 = () => {
    getsavebook();
}
    // 根据枚举转换 classify 和 bigclass
const classifyLabel = computed(() => ClassifyEnum[props.fictionData.classify] || props.fictionData.classify);
const bigclassLabel = computed(() => BigClassEnum[props.fictionData.bigclass] || props.fictionData.bigclass);

onMounted(()=>{

})
</script>
<style scoped lang="scss">
.homepage{
  border-radius: 15px; /* 更大的圆角 */
  margin: 20px;
  padding: 20px;

  background-color: #f5f5f7;
}
.main {
  display: flex;
  flex-direction: column;/* 垂直布局 */
}
.item{
  width: 100px;
  height: 140px;
}
.imges{
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
.mx-1{
  margin-right: 10px; /* 设置右侧外边距为 10 像素 */
}
.el-main {
  flex: 1;
  display: flex;
  align-items: flex-start; /* 垂直方向上方对齐 */
  justify-content: center; /* 水平方向左对齐 */
  padding: 20px; /* 可根据需要调整 */
}

.content {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: flex-start; /* 居左对齐 */
}

.title {
  margin: 0 0 10px 0; /* 调整标题的下边距 */
  font-weight: bold;
  font-size: 25px;
}

.author {
  margin: 0 0 10px 0; /* 调整作者的下边距 */
  color: #b2b2b2;
  font-size: 12px;
}

</style>

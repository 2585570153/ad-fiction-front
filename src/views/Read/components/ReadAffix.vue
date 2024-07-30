

<script setup>
import {useReadStore} from "@/stores/readstores"
import {storeToRefs} from "pinia";
import{getchapterAPI} from "/src/apis/chapterAPI";
import {ref,onMounted,nextTick} from 'vue'
import {useRoute} from "vue-router";
import {Sort} from '@element-plus/icons-vue'
import Storage from "responsive-storage";

const route = useRoute()
const ReadStore = useReadStore();
let { readid } = storeToRefs(ReadStore);
const directoryVisible = ref(false)
const chapterData = ref([])
const readCentre = ref()
const ascending = ref(true) // 初始状态为正序显示
const scrollbarRef = ref();
function inputSlider (item)  {
    if(route.params.id == item.chapterId){
        console.log(scrollbarRef.value); // 检查 scrollbarRef.value 的值
        scrollbarRef.value.setScrollTop(Number(1000));
    }
}
const getchapter = async () =>{
 // 获取元素对象
let element = document.getElementById('readCentre');
// 获取计算后的样式对象
let computedStyle = window.getComputedStyle(element);
// 获取宽度值
let width = computedStyle.getPropertyValue('width');
readCentre.value=width
 if(!directoryVisible.value){
    const  res = await getchapterAPI(readid.value,route.params.tableName)
    chapterData.value = res.data
  }
  directoryVisible.value = !directoryVisible.value
}
const circleStyle = (id) => ({
    fontSize: '16px',
    height: '60px',
    borderBottom: '1px solid rgba(220, 218, 218, 0.2)',
    color: route.params.id == id ? '#5b9cf6':''
});

const toggleOrder = () => {
    ascending.value = !ascending.value;
    if (ascending.value) {
      chapterData.value.sort((a, b) => a.chapterIndex - b.chapterIndex); // 正序排列
    } else {
      chapterData.value.sort((a, b) => b.chapterIndex - a.chapterIndex); // 倒序排列
    }
  }
var userObj = Storage.get("fiction_userInfo");
</script>
<template>
    <template v-if="userObj">
        <el-affix :offset="20">
            <div class="fiction-read-left-head">
                <router-link to="/info" class="link">
                    <span>
                    <el-avatar
                            :src=userObj.data.headPortrait
                    />
                    </span>
                </router-link>
            </div>
        </el-affix>
    </template>
        <el-affix :offset="100">
            <div class="fiction-read-left">
                <router-link to="/" class="link">
                    <svg-icon  iconName="icon-book" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        首页
                    </div>
                </router-link>
            </div>
        </el-affix>
        <el-affix :offset="180">
            <div class="fiction-read-left">

                <router-link :to="'/detail/'+readid" class="link">
                    <svg-icon  iconName="icon-book2" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        详细
                    </div>
                </router-link>

            </div>
        </el-affix>
        <el-affix :offset="260">
            <el-popover 
            :visible="directoryVisible" 
            placement="right" 
            :width="readCentre" 
            title="目录" 
            id="readPopover"
            popper-class="read-directory-popover">
            <template #reference>
            <div class="fiction-read-left" @click="getchapter()">
                <svg-icon  iconName="icon-menu" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                <div class="fiction-read-affix-font">
                    目录
                </div>
            </div>
            </template>
            <template #default>
                <el-scrollbar max-height="100%" ref="scrollbarRef">
                    <el-row justify="end">
                        <el-col :span="3">
                            <el-button @click="toggleOrder" :icon="Sort">{{ ascending ? '倒序显示' : '正序显示' }}</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col 
                        :span="11" 
                        :offset="1" 
                        v-for="item in chapterData" 
                        :key="item.chapterId" 
                        :id="inputSlider(item)" 
                        :style="circleStyle(item.chapterId)" 
                        class="chapter-item">
                            <router-link :to="'/read/'+route.params.tableName+'/'+route.params.fictionId+'/'+item.chapterId" class="link" >
                                {{ item.title }}

                            </router-link>
                        </el-col>
                    </el-row>
                 </el-scrollbar>
            </template>
            </el-popover>
        </el-affix>


</template>
<style scoped lang="scss">

.fiction-read-left{

  display: flex;
  background-color: var(--read-background-color1);
  box-shadow: 0 0 1px #a19e9e;
  float: right;
  width: 75px;
  height: 75px;
  margin-right: 8px;
  border-radius: 10%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.fiction-read-left-head{

display: flex;
float: right;
width: 75px;
height: 75px;
margin-right: 8px;
border-radius: 10%;
justify-content: center;
align-items: center;
flex-direction: column;
cursor: pointer;
}
.fiction-read-affix-font{
  font-size: 15px;
  color: #626262;
}
.fiction-read-affix-font:hover{
  color: $xtxColor;
}
.fiction-read-affix-ico{
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chapter-item:hover {
    color: $xtxColor;
}
</style>

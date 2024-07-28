<template>


        <el-affix :offset="240">
            <div class="fiction-read-right" @click="getsavebook()">
                <svg-icon  iconName="icon-shelf" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                <div class="fiction-read-affix-font">
                    加入书架
                </div>
            </div>
        </el-affix>

        <el-affix :offset="320">
            <el-popover :visible="fontVisible" placement="left" :width="240" title="布局" popper-class="read-popover">
                 <div style="display: flex;  margin-bottom: 10px;">
                   <div style="font-size: 17px; width: 60px;">字号：</div><el-input-number v-model="fontSize" :min="18" :max="48" @change="fontHandleChange" />
                </div>
                <div style="display: flex;">
                    <div style="font-size: 17px; width: 60px;">间距：</div><el-input-number v-model="fontSpace" :min="1" :max="6" @change="spaceHandleChange" />
                </div>
                <template #reference>
                <div class="fiction-read-right" @click="toggleVisibility('font')">
                    <svg-icon  iconName="icon-A" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        字号
                    </div>
                </div>
                </template>
            </el-popover>
        </el-affix>


        <el-affix :offset="400">
            <el-popover :visible="brightVisible" placement="left" :width="400" title="背景" popper-class="read-popover">
                <div class="color-container">
                    <div
                    v-for="(color, index) in state.colors"
                    :key="index"
                    :style="circleStyle(color, index === state.selectedIndex)"
                    @click="handleColorClick(color)"
                    ></div>
                </div>
                <template #reference>
                    <div class="fiction-read-right" @click="toggleVisibility('bright')">
                        <svg-icon  iconName="icon-bright" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                        <div class="fiction-read-affix-font">
                            背景
                        </div>
                    </div>
                </template>
            </el-popover>
        </el-affix>
        <el-affix :offset="480">
            <div class="fiction-read-right" @click="getSwitchChapter('1')">
                <svg-icon  iconName="icon-back" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                <div class="fiction-read-affix-font">
                    上一章
                </div>
            </div>
        </el-affix>
        <el-affix :offset="560">
            <div class="fiction-read-right" @click="getSwitchChapter('2')">
                <svg-icon  iconName="icon-forward" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                <div class="fiction-read-affix-font">
                    下一章
                </div>
            </div>
        </el-affix>

</template>

<script setup>
import{switchChapterAPI} from "/src/apis/chapterAPI";
import {useRoute, useRouter} from "vue-router";
import { ref,reactive} from 'vue'
import Storage from "responsive-storage";
import {storeToRefs} from "pinia";
import {useReadStore} from "@/stores/readstores"
import {saveBookIdAPI} from '/src/apis/bookrankAPI'
const ReadStore = useReadStore();
let { readid } = storeToRefs(ReadStore);
const state = reactive({
      colors: ['#EFEBE2', '#F0EFEF', '#F4F6F1', '#FBF6F6','#EDEFF2'], // 示例颜色
      selectedIndex: Storage.get("fiction_cssReadBackgroundColorIndex"), // 假设第三个颜色是选中状态
    });

const fontVisible = ref(false)
const brightVisible = ref(false)
function toggleVisibility(target) {
  if (target === 'font') {
    fontVisible.value = !fontVisible.value
    if (fontVisible.value && brightVisible.value) {
      brightVisible.value = false
    }
  } else if (target === 'bright') {
    brightVisible.value = !brightVisible.value
    if (brightVisible.value && fontVisible.value) {
      fontVisible.value = false
    }
  }
}
const getsavebook = async ()=>{
    const res = await saveBookIdAPI(readid.value)
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
const fontSize = ref(Storage.getData("cssReadFontSize","fiction_"))
const fontSpace = ref(Storage.getData("cssReadFontSpace","fiction_"))
const route = useRoute();
const router = useRouter();
const getSwitchChapter = (type) =>{
  switchChapterAPI(type,route.params.id,"",route.params.tableName,route.params.fictionId).then(response => {
    if( response.code==1){
      const newRoute = {
            path: '/read/'+route.params.tableName+'/'+route.params.fictionId+'/'+response.data.chapterId// 新的路由路径，将 currentPage 作为路径的一部分
        };
        router.push(newRoute);
    }else{
      ElMessage({message: response.msg,type: 'error',});
    }
    })
    .catch(error => {
        console.error('API error:', error);
    });
}
const root = document.documentElement;
const fontHandleChange = (value) => {
    // 获取根元素
    root.style.setProperty('--read-font-size', value+'px');
    Storage.set("fiction_cssReadFontSize",value)
    }
const spaceHandleChange = (value) => {
    // 获取根元素
    root.style.setProperty('--read-font-space', value);
    Storage.set("fiction_cssReadFontSpace",value)
}

// 处理颜色块点击事件
const handleColorClick = (color) => {
    const index = state.colors.indexOf(color);
    var color0;
    var color1;
    if( index == 0){
        color0='#DED9C6';
        color1='#EFEBE2';
    } else if( index == 1){
        color0='#E0E0E0';
        color1='#F0EFEF';
    }else if( index == 2){
        color0='#E6EFE4';
        color1='#F4F6F1';
    }else if( index == 3){
        color0='#F6EFEF';
        color1='#FBF6F6';
    }else if( index == 4){
        color0='#D9E0E8';
        color1='#EDEFF2';
    }
    root.style.setProperty('--read-background-color0', color0);
    root.style.setProperty('--read-background-color1', color1);
    Storage.set("fiction_cssReadBackgroundColor",{"color0":color0,"color1":color1});
    Storage.set("fiction_cssReadBackgroundColorIndex",index);
    state.selectedIndex = index;

};

// 动态生成样式的函数
const circleStyle = (color, isSelected) => ({
    backgroundColor: color,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'inline-block',
    cursor: 'pointer',
    border: isSelected ? '3px solid rgb(36 177 237 / 65%)' : 'none', // 示例：选中状态添加边框
});
</script>

<style scoped lang="scss">

.fiction-read-right{
  display: flex;
  background-color: var(--read-background-color1);
  box-shadow: 0 0 1px #a19e9e;
  float: left;
  width: 75px;
  height: 75px;
  margin-left: 8px;
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
    padding-left: 12px;
    padding-right: 12px;
    width: 30px;
    height: 30px;
}
.color-container {
  display: flex;
  justify-content: space-between; /* 元素水平分布 */
  gap: 10px; /* 可选：元素之间的间距 */
}
</style>
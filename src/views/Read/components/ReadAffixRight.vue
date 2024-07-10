<template>


        <el-affix :offset="240">
            <div class="fiction-read-right">
                <svg-icon  iconName="icon-shelf" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                <div class="fiction-read-affix-font">
                    加入书架
                </div>
            </div>
        </el-affix>

        <el-affix :offset="320">
            <el-popover :visible="fontVisible" placement="left" :width="500" title="字号-请选择字号大小">
                <div style="text-align: right; margin: 0">
                    <el-input-number v-model="fontNum" :min="18" :max="48" @change="handleChange" />
                </div>
                <template #reference>
                <div class="fiction-read-right" @click="fontVisible = !fontVisible">
                    <svg-icon  iconName="icon-A" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        字号
                    </div>
                </div>
                </template>
            </el-popover>
        </el-affix>


        <el-affix :offset="400">
            <div class="fiction-read-right">
                <svg-icon  iconName="icon-bright" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                <div class="fiction-read-affix-font">
                    背景
                </div>
            </div>
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
import { ref } from 'vue'
const fontVisible = ref(false)
const fontNum = ref(21)

const route = useRoute();
const router = useRouter();
const getSwitchChapter = (type) =>{
  switchChapterAPI(type,route.params.id,"").then(response => {
    if( response.code==1){
      const newRoute = {
            path: '/read/'+response.data.chapterId// 新的路由路径，将 currentPage 作为路径的一部分
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
</script>

<style scoped lang="scss">

.fiction-read-right{
  display: flex;
  background-color: #EDEAE1FF;
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

</style>
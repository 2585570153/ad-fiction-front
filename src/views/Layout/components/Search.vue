<template>
  <!-- <div>
    <el-input
        v-model="input2"
        class="w-50 m-2 "
        placeholder="输入你要搜索的书籍"
        size="large"
        :suffix-icon="Search"
        @keyup.enter="handleEnter"
    />
  </div> -->
  <div class="search">
        <form>
            <input v-model="input2" placeholder="输入你要搜索的书籍..." name="keyword" type="text" @keyup.enter="handleEnter()">
            <button type="submit" @click="handleEnter()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path fill="#ffffff" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            </button>
        </form>
  </div>
</template>

<script lang="ts" setup>
import { ref} from 'vue'
import { Search } from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
const router = useRouter()
const input2 = ref('')


function handleEnter() {
    const newRoute = {
        path: `/search/${input2.value}/1`// 新的路由路径，将 currentPage 作为路径的一部分
    };
    router.push(newRoute);
}
</script>
<style scoped>
/* :deep(.el-input__wrapper){
  display: inline-flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 1px 11px;
  background-color: var(--el-input-bg-color, var(--el-fill-color-blank));
  background-image: none;
  border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
  transition: var(--el-transition-box-shadow);
  transform: translate3d(0, 0, 0);
  margin-left: 220px;
  margin-right: 40px;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
  width: 270px;
} */
* {
    box-sizing: border-box;  /*宽度和高度会包括内边距和边框*/
}

div.search {
    padding: 10px 0;
    margin-left: 220px;
    margin-right: 40px;
}

form {
    position: relative;
    width: 300px;
    margin: 0 auto;  /*设置宽度后，居中*/
}

input,button {
    border: none;   /*无边框样式；元素的总宽度和高度包括边框的宽度 */
    outline: none;  /*无轮廓样式；轮廓是在元素周围绘制的一条线，在边框之外并且可能与其他内容重叠，以凸显元素，元素的总宽度和高度不受轮廓线宽度的影响。*/
}

.search input {
    width: 100%;
    height: 42px;
    padding-left: 13px;
    border: 2px solid var(--el-menu-border-color);
    border-radius: 19px;   /*border-radius 属性用于向元素添加圆角边框：*/
    background: transparent;  /*背景透明*/
}

.search button {
    height: 42px;
    width: 42px;
    cursor: pointer;  /*cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状*/
    position: absolute;
    background: var(--el-color-primary);
    border-radius: 0 19px 19px 0;
    width: 60px;
    right: 0;
}
.search button:hover {
    background-color: var(--el-color-primary-light-3);  /*点击搜索按钮时的背景颜色*/
}

/* 在<button>元素后面插入内容，并设置所插入内容的样式： */
.search button:before {
    /* content: "搜索";  插入的内容 */
    font-size: 13px;  /*插入内容的字体大小*/
    color: #F9F0DA;  /*插入内容的字体颜色*/
}
</style>
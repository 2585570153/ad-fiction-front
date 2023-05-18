<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <div class="flex-grow" />
    <router-link to="/" class="link"><el-menu-item index="0">fiction中文网</el-menu-item></router-link>
    <div class="flex-grow1" />
    <div class="flex-grow1" />
    <router-link to="/" class="link"><el-menu-item index="1" >首页</el-menu-item></router-link>
    <div class="flex-grow1" />
    <el-menu-item index="2">分类</el-menu-item>
    <div class="flex-grow1" />
    <el-menu-item index="3">排行榜</el-menu-item>
    <div class="flex-grow1" />
    <el-menu-item index="4">书架</el-menu-item>
    <div class="flex-grow" />
      <Search />
    <div class="flex-grow" />
    <el-menu-item index="6">登录|注册</el-menu-item>
    <div class="flex-grow" />
  </el-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Search from "./Search.vue";
const props = defineProps({
  navid:{
    type: String
  }
})
const activeIndex = ref(props.navid);
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


</script>

<style>

.flex-grow {
  flex-grow: 1;

}
.flex-grow1{
  flex-grow: 0.2;
}
.link {
  text-decoration: none; /* 去掉下划线 */
}
</style>

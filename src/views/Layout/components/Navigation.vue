<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <div class="flex-grow" />
    <router-link to="/" class="link"><el-menu-item index="0">
        <img src="http://cloud.aiheadn.cn/fiction/assets/logo.png"
             width="150"
             height="40"
        >
    </el-menu-item></router-link>
    <router-link to="/" class="link"><el-menu-item index="1" >首页</el-menu-item></router-link>
    <div class="flex-grow1" />
    <router-link to="/category/nansheng/1" class="link"><el-menu-item index="2">分类</el-menu-item></router-link>
    <div class="flex-grow1" />
    <router-link to="/rankinglist/nansheng/1/collect" class="link"> <el-menu-item index="3">排行榜</el-menu-item></router-link>
    <div class="flex-grow1" />
    <el-menu-item index="4">书架</el-menu-item>
    <div class="flex-grow" />
      <Search />
    <div class="flex-grow" />
      <router-link to="/login" class="link"><el-menu-item index="6">
          <el-button
                  type="primary"

                  class="register-btn"
          >{{
              activeTab === "login" ? "登录/注册" : "注册/登录"
              }}</el-button>
      </el-menu-item></router-link>
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
  color: inherit; /* 继承父元素的文本颜色 */
}
.el-menu-demo {
    background-color: #F5F5F8FF; /* 修改背景颜色 */
}
</style>

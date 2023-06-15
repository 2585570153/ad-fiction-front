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
      <router-link to="/bookrank" class="link"><el-menu-item index="4">书架</el-menu-item></router-link>
    <div class="flex-grow" />
      <Search />
    <div class="flex-grow" />
      <el-menu-item >
          <br>
          <el-button
                  type="primary"
                  class="register-btn"
                  @click="centerDialogVisible = true"
          >登录/注册
          </el-button>
      </el-menu-item>
    <div class="flex-grow" />
  </el-menu>
    <el-dialog
            v-model="centerDialogVisible"
            title="登录/注册"
            width="30%"
            align-center
    >

        <el-tabs v-model="activeName" class="navigation-demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="登录/注册" name="first">User</el-tab-pane>
            <el-tab-pane label="密码登录" name="second">Config</el-tab-pane>
        </el-tabs>
        <template #footer>
              <div class="navigation-footer">
                    <el-form-item>
                    <el-tooltip
                            content="请阅读并勾选下方协议"
                            placement="top-start"
                            :auto-close="1000"
                            :offset="10"
                    >
                      <el-checkbox
                              class-name="agreement"
                      />
                    </el-tooltip>

                    同意<a href="#" style="color: #30BAFCFF;">《用户协议》</a>和<a href="#" style="color: #30BAFCFF;"
                          >《隐私政策》</a
                          >
                  </el-form-item>
              </div>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Search from "./Search.vue";
const centerDialogVisible = ref(false)
const props = defineProps({
  navid:{
    type: String
  }
})
const activeIndex = ref(props.navid);
const activeName = ref('first')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
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
.navigation-footer{
    padding-right: 80px;
}
.navigation-demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>

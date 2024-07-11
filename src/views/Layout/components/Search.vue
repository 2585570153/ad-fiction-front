<template>
  <div>
    <el-input
        v-model="input2"
        class="w-50 m-2 "
        placeholder="输入你要搜索的书籍"
        size="large"
        :suffix-icon="Search"
        @keyup.enter="handleEnter"
    />
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
:deep(.el-input__wrapper){
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
  margin-left: 150px;
  margin-right: 50px;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
  width: 270px;
}

</style>

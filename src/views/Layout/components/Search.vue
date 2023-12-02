<template>
  <div class="demo-input-size">
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
.demo-input-size{
  margin: 10px 20px;
}

</style>

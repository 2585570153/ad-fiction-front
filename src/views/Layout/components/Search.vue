<template>
  <div class="demo-input-size">
    <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="输入你要搜索的书籍"
        size="large"
        :suffix-icon="Search"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input2 = ref('')

</script>

<style scoped>
.demo-input-size{
  margin: 10px 20px;
}
</style>

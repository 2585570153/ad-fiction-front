<template>
  <div class="common-layout-read">
    <el-container>
      <el-aside class="read-left" width="250px">
      <ReadAffix />
      </el-aside>
      <el-main class="read-centre">
       <ReadContent />
      </el-main>
      <el-aside width="250px" class="read-right">

      </el-aside>
    </el-container>
  </div>
</template>

<script setup>

import ReadContent from "@/views/Read/components/ReadContent.vue";
import ReadAffix from "@/views/Read/components/ReadAffix.vue"
</script>

<style scoped>

.common-layout-read{
  background-color: #DCD7C4FF;
}
.read-centre{
  padding: 0;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1); /* 设置投影效果 */
}
</style>

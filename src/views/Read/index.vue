<template>
  <div class="common-layout-read">
    <el-container>
      <el-aside width="250px">
      <ReadAffix />
      </el-aside>
      <el-main class="read-centre" id="readCentre">
       <ReadContent />
      </el-main>
      <el-aside width="250px" >
      <ReadAffixRight />
      </el-aside>
    </el-container>
  </div>
</template>

<script setup>
import ReadContent from "@/views/Read/components/ReadContent.vue";
import ReadAffix from "@/views/Read/components/ReadAffix.vue";
import ReadAffixRight from "@/views/Read/components/ReadAffixRight.vue";

</script>

<style scoped>

.common-layout-read{
  background-color: var(--read-background-color0);
}
.read-centre{
  padding: 0;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1); /* 设置投影效果 */
  max-width: 1200px;
  min-width: 800px;
}
</style>

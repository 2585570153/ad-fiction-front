<template>
  <div class="fiction-category">
    <el-container>
      <el-header class="header">
        <div class="affix-container">
          <el-affix target=".affix-container" :offset="1">
            <navigation navid="2"/>
          </el-affix>
        </div>
      </el-header>
      <el-main class="bodymain">
        <br>

      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Navigation from "@/views/Layout/components/Navigation.vue";

</script>

<style scoped>

</style>

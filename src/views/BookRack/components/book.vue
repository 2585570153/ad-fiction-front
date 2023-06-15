<template>
    <div class="bookrank-book">
        <img src="http://cloud.aiheadn.cn/fiction/assets/logo.png"
             width="400"
             height="100"
        >
        <h3>空空如也</h3>
        <h3>赶快用好书塞满书架</h3>
        <router-link to="/category/nansheng/1" class="link">
        <el-button size="large"
                   type="primary"
                   round>去找书</el-button>
        </router-link>
    </div>

</template>

<script setup>

</script>

<style scoped>
.bookrank-book{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 335px;
}
</style>
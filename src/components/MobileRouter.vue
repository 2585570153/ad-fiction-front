<template>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import { useRouter } from 'vue-router';
const isMobile = ref(false);
// const router = useRouter();
function goToExternalSite() {
    // 使用 window.location.href 跳转到外部网址
    window.location.href = 'http://book.aiheadn.cn/h5/';
}
    onMounted(() => {
      const userAgent = navigator.userAgent.toLowerCase();
      isMobile.value = userAgent.includes('mobile');
      if (isMobile.value) {
          goToExternalSite();
      }
    });

</script>

<style>

</style>
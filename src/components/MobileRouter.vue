<template>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const isMobile = ref(false);
const router = useRouter();

    onMounted(() => {
      const userAgent = navigator.userAgent.toLowerCase();
      isMobile.value = userAgent.includes('mobile');
      if (isMobile.value) {
        router.push('/mobile');
      }
    });
</script>

<style>

</style>
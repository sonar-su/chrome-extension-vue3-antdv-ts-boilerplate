<script setup lang="ts">
import Inspector from "~/popup/components/TestPage.vue";
</script>

<template>
  <div class="text-center m-4">
    <h1 class="text-3xl font-bold underline pb-6">Hello world from Popup!</h1>
    <RouterLink to="/about">About</RouterLink>
    <Inspector />
  </div>
</template>

<style scoped>
</style>

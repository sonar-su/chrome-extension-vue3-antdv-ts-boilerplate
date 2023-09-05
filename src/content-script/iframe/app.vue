<script setup lang="ts"></script>

<template>
  <RouterView class="iframe-inside"></RouterView>
</template>

<style scoped>
  .iframe-inside {
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    background-color: white;
  }
</style>

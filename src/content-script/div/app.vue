<script setup lang="ts">
import {onMounted} from "vue";
import {useListener} from "~/content-script/div/hooks/useListener";

onMounted(() => {
  useListener()
})

</script>
<template>
  <div></div>
</template>

<style scoped></style>

<script setup lang="ts">
import {sendMsgFromContentToBackground, sendMsgFromDivContentToIframeContent} from "~/message";

const openPopupBubble = () => {
  sendMsgFromContentToBackground('read-element-info', {}, (res) => {
    sendMsgFromDivContentToIframeContent('print-element-info', res)
  })
}
</script>
<template>
  <div @click="openPopupBubble">click</div>
</template>

<style scoped>
#dot {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background-color: red;
  z-index: 999;
}
</style>

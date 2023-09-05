<script setup lang="ts">

import {sendMsgFromPopupToContent} from "~/message";
import {extensionElements} from "~/constant/element";

const displayIframe = async () => {
  sendMsgFromPopupToContent('displayIframe', {id: extensionElements.dragIframePanel}, (response: string) => {
    console.log(response)
  })
}
const hideIframe = async () => {
  sendMsgFromPopupToContent('hideIframe', {id: extensionElements.dragIframePanel}, (response: string) => {
    console.log(response)
  })
}

const routerToOption = () => {
  chrome.runtime.openOptionsPage()
}
</script>

<template>
  <a-button @click="displayIframe">
    openFloatingWindow
  </a-button>
  <a-button @click="hideIframe">
    closeFloatingWindow
  </a-button>
  <a-button @click="routerToOption">
    Option
  </a-button>
</template>

<style scoped>

</style>

import { createApp } from 'vue'
import App from './div/app.vue'
import {extensionElements} from "~/constant/element";
// onMessageFromContentScript()
(() => {
  const container = document.createElement('div')
  container.id = extensionElements.divOperator
  container.className = extensionElements.divOperator
  const root = document.createElement('div')
  const shadowDOM = container.attachShadow?.({ mode: 'open' }) || container
  shadowDOM.appendChild(root)

  document.body.appendChild(container)
  const app = createApp(App)
  console.log(app)
  app.config.globalProperties.$app = {
    context: '',
  }
  // Provide access to `app` in script setup with `const app = inject('app')`
  app.provide('app', app.config.globalProperties.$app)
  app.mount(root)
})()


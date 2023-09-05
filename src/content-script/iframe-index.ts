import './index.scss'
import {moveElement} from "~/utils/elementOperator";
import {extensionElements} from "~/constant/element";

// const src = chrome.runtime.getURL('src/content-script/iframe/index.html')
// const draggableIframe = new DOMParser().parseFromString(
//   `<div id="drag-iframe-panel" draggable="true">
//           <div id=extensionElements.dragBar>123</div>
//           <iframe id=extensionElements.crxIframe class=extensionElements.crxIframe src="${src}"></iframe>,
//         </div>`,
//   'text/html'
// ).body.firstElementChild

const draggableIframe = document.createElement('div')
draggableIframe.id = extensionElements.dragIframePanel
draggableIframe.className = extensionElements.dragIframePanel
draggableIframe.draggable = true
// draggableIframe.style.backgroundColor = 'transparent'
const dragBar = document.createElement('div')
dragBar.id = extensionElements.dragBar
dragBar.className = extensionElements.dragBar

const iframe = document.createElement('iframe')
iframe.id = 'iframe-panel'
iframe.className = 'iframe-panel'
iframe.src = chrome.runtime.getURL('src/content-script/iframe/index.html')

draggableIframe.appendChild(dragBar)
draggableIframe.appendChild(iframe)

if (draggableIframe) {
  document.body?.append(draggableIframe)

  // 隐藏drag-iframe-panel，占位的那种
  draggableIframe.style.display = 'none'

  moveElement(extensionElements.dragIframePanel)
}






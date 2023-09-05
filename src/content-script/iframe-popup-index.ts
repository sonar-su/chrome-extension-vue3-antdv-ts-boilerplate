import './index.scss'
import {moveElement} from "~/utils/elementOperator";
import {extensionElements} from "~/constant/element";

const draggableIframe = document.createElement('div')
draggableIframe.id = extensionElements.dragPopupIframePanel
draggableIframe.className = extensionElements.dragPopupIframePanel
draggableIframe.draggable = true

const dragBar = document.createElement('div')
dragBar.className = extensionElements.dragBar

const iframe = document.createElement('iframe')
iframe.id = 'popup-iframe'
iframe.className = 'popup-iframe'
iframe.src = chrome.runtime.getURL('src/content-script/iframe-popup/index.html')
draggableIframe.appendChild(dragBar)
draggableIframe.appendChild(iframe)

if (draggableIframe) {
  document.body?.append(draggableIframe)
  draggableIframe.style.display = 'none'
  moveElement(extensionElements.dragPopupIframePanel)
}






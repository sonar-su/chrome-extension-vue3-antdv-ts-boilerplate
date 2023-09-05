import {displayElement, excludeElement, hideElement} from "~/utils/elementOperator";
import {extensionElements} from "~/constant/element";

export const usePopup = () => {
  const hoverTimeoutId = ref()
  const isPopupBubbleMode = ref(false)
  window.addEventListener('click', (event) => {
    if (excludeElement(event)) {
      return
    }
    if (isPopupBubbleMode.value) {
      hideElement(extensionElements.popupBubble)
      hideElement(extensionElements.dragPopupIframePanel)
      hideElement(extensionElements.dragIframePanel)
      isPopupBubbleMode.value = false
    }
  })
  window.addEventListener('mouseover', (event) => {
    // 清除之前的定时器（如果存在）
    clearTimeout(hoverTimeoutId.value);
    if (excludeElement(event)) {
      return
    }
    // 设置一个新的定时器，在5秒后触发事件
    hoverTimeoutId.value = setTimeout(function() {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      console.log(mouseX + ',' + mouseY)
      if (event.target.id === extensionElements.popupBubble) {
        return
      }
      displayPopupBubble(mouseX, mouseY)
    }, 600);
  })
  document.addEventListener('mouseout', function() {
    // 清除定时器，以避免事件在鼠标离开时触发
    clearTimeout(hoverTimeoutId.value);
  });

  const displayPopupBubble = (mouseX: number, mouseY: number) => {
    const toolTip = document.getElementById(extensionElements.popupBubble)
    displayElement(extensionElements.popupBubble)
    if (toolTip) {
      toolTip.style.left = mouseX - 50 + 'px';
      toolTip.style.top = mouseY - 40 + 'px';
      toolTip.addEventListener('click', (e) => {
        isPopupBubbleMode.value = true
        const popupIframe = document.getElementById(extensionElements.dragPopupIframePanel)
        if (popupIframe) {
          popupIframe.style.display = 'block'
          popupIframe.style.position = 'fixed';
          popupIframe.style.left = mouseX - 30 + 'px';
          popupIframe.style.top = mouseY - 30 + 'px';
        }
      })
    }
  }
}



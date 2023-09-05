import {extensionElements} from "~/constant/element";
import {hideElement} from "~/utils/elementOperator";

export const generateHiddenPopupBubble = () => {
  const toolTip = document.getElementById(extensionElements.popupBubble)
  if (toolTip) {
    toolTip.style.position = 'fixed';
    toolTip.style.backgroundColor = 'black';
    toolTip.style.color = 'white';
    toolTip.style.zIndex = '99';
    toolTip.style.borderRadius = '50%'
    toolTip.style.width = '30px'
    toolTip.style.height = '30px'
    toolTip.style.lineHeight = '30px'
    toolTip.style.cursor = 'pointer'
  }
  hideElement(extensionElements.popupBubble)
}


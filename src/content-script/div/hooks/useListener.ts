import { regMsgFromPopupToContent} from "~/message";
import {usePopup} from "~/content-script/div/hooks/usePopup";
import {displayElement, hideElement} from "~/utils/elementOperator";
import {ElementLocationAttributes} from "~/types/element";

const handleElementDisplay = (msg: ElementLocationAttributes) => {
  displayElement(msg.id)
}

const closeElementDisplay = (msg: ElementLocationAttributes) => {
  hideElement(msg.id)
}
export const useListener = () => {
  regMsgFromPopupToContent('displayIframe', handleElementDisplay)
  regMsgFromPopupToContent('hideIframe', closeElementDisplay)
  usePopup()
}

import {Popup} from "~/message/page/popup";
import {Background} from "~/message/page/background";
import {Content} from "~/message/page/content";

export const sendMsgFromPopupToBackground = (action: string, msg: any, callback?: any) => {
  Popup.getInstance().sendMsgToBackground(action, msg, callback)
}

export const sendMsgFromPopupToContent = (action: string, msg: any, callback?: any) => {
  Popup.getInstance().sendMsgToContent(action, msg, callback)
}
export const transitMsgFromPopupToContentInBackground = (action: string, msg: any, callback?: any) => {
  Background.getInstance().transitMsgToContent(action, msg, callback)
}


export const sendMsgFromBackgroundToPopup = (action: string, msg: any, callback?: any) => {
  Background.getInstance().sendMsgToPopup(action, msg, callback)
}

export const sendMsgFromBackgroundToContent = (action: string, msg: any, callback?: any) => {
  Background.getInstance().sendMsgToContent(action, msg, callback)
}

export const sendMsgFromContentToPopup = (action: string, msg: any, callback?: any) => {
  Content.getInstance().sendMsgToPopup(action, msg, callback)
}

export const sendMsgFromContentToBackground = (action: string, msg: any, callback?: any) => {
  Content.getInstance().sendMsgToBackground(action, msg, callback)
}

export const sendMsgFromDivContentToIframeContent = (action: string, msg: any, callback?: any) => {
  Content.getInstance().sendMsgToIframeContent(action, msg, callback)
}

export const sendMsgFromIframeContentToDivContent = (action: string, msg: any, callback?: any) => {
  Content.getInstance().sendMsgToDivContent(action, msg, callback)
}

export const regMsgFromPopupToBackground = (action: string, callback?: any) => {
  Background.getInstance().regMsgFromPopup(action, callback)
}

export const regMsgFromPopupToContent = (action: string, callback?: any) => {
  Content.getInstance().regMsgFromPopup(action, callback)
}

export const regMsgFromBackgroundToPopup = (action: string, callback?: any) => {
  Popup.getInstance().regMsgFromBackground(action, callback)
}

export const regMsgFromBackgroundToContent = (action: string, callback?: any) => {
  Content.getInstance().regMsgFromBackground(action, callback)
}

export const regMsgFromContentToPopup = (action: string, callback?: any) => {
  Popup.getInstance().regMsgFromContent(action, callback)
}

export const regMsgFromContentToBackground = (action: string, callback?: any) => {
  Background.getInstance().regMsgFromContent(action, callback)
}

export const regMsgFromDivContentToIframeContent = (action: string, callback?: any) => {
  Content.getInstance().regMsgFromDivContent(action, callback)
}

export const regMsgFromIframeContentToDivContent = (action: string, callback?: any) => {
  Content.getInstance().regMsgFromIframeContent(action, callback)
}


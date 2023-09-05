import {Transit} from "~/message/page/transit";

export interface IPopup {
  sendMsgToBackground: (action: string, msg: any, callback: any) => void
  sendMsgToContent: (action: string, msg: any, callback: any) => void
  regMsgFromBackground: (action: string, event: any) => void
  regMsgFromContent: (action: string, event: any) => void
}

export interface IBackground {
  sendMsgToPopup: (action: string, msg: any, callback: any) => void
  sendMsgToContent: (action: string, msg: any, tabId: number, callback: any) => void
  regMsgFromPopup: (action: string, event: any) => void
  regMsgFromContent: (action: string, event: any) => void
}

export interface IContent {
  sendMsgToPopup: (action: string, msg: any, callback: any) => void
  sendMsgToBackground: (action: string, msg: any, callback: any) => void
  sendMsgToIframeContent: (action: string, msg: any, callback: any) => void
  regMsgFromPopup: (action: string, event: any) => void
  regMsgFromBackground: (action: string, event: any) => void
  regMsgFromDivContent: (action: string, event: any) => void
  regMsgFromIframeContent: (action: string, event: any) => void
}

export interface IframeContent {
  sendMsgToDivContent: (action: string, msg: any, callback: any) => void
}

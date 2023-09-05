import {AbsExtractor} from "~/message/page/base";
import {IContent} from "~/message/types/page";
import {WindowMessage} from "~/message/window/iframe";

export class Content extends AbsExtractor implements IContent {
  // 单例模式
  private static instance: Content
  private constructor() {
    super()
  }
  public static getInstance() {
    if (!Content.instance) {
      Content.instance = new Content()
    }
    return Content.instance
  }

  regMsgFromBackground(action: string, event: any): void {
    this.regAction('background-content', action, event)
  }

  regMsgFromDivContent(action: string, event: any): void {
    this.regAction('content(div-iframe)', action, event)
  }

  regMsgFromIframeContent(action: string, event: any): void {
    WindowMessage.getInstance().regAction(action, event)
  }

  regMsgFromPopup(action: string, event: any): void {
    this.regAction('popup-content', action, event)
  }

  sendMsgToBackground(action: string, msg: any, callback: any): void {
    this.sendMessage('content-background', action, msg, callback)
  }

  sendMsgToDivContent(action: string, msg: any, callback: any): void {
    WindowMessage.getInstance().sendParentMessage(action, msg, callback)
  }

  sendMsgToIframeContent(action: string, msg: any, callback: any): void {
    this.sendMessage('content(div-iframe)', action, msg, callback)
  }

  sendMsgToPopup(action: string, msg: any, callback: any): void {
    this.sendMessage('content-popup', action, msg, callback)
  }

}



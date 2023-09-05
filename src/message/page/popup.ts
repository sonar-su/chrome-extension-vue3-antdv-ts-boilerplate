import {AbsExtractor} from "~/message/page/base";
import {IPopup} from "~/message/types/page";

export class Popup extends AbsExtractor implements IPopup {
  // 单例模式
  private static instance: Popup
  private constructor() {
    super()
  }
  public static getInstance() {
    if (!Popup.instance) {
      Popup.instance = new Popup()
    }
    return Popup.instance
  }

  regMsgFromBackground(action: string, event: any): void {
    this.regAction('background-popup', action, event)
  }

  regMsgFromContent(action: string, event: any): void {
    this.regAction('content-popup', action, event)
  }

  sendMsgToBackground(action: string, msg: any, callback: any): void {
    this.sendMessage('popup-background', action, msg, callback)
  }

  sendMsgToContent(action: string, msg: any, callback: any): void {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const tabId = Number(tabs[0].id)
      this.sendMessageToTab('popup-content', tabId, action, msg, callback)
    })
    // this.sendMessage('popup-content', action, msg, callback)
  }

}

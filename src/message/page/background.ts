import {AbsExtractor} from "~/message/page/base";
import {IBackground} from "~/message/types/page";

export class Background extends AbsExtractor implements IBackground{
  private static instance: Background
  private constructor() {
    super();
  }
  public static getInstance() {
    if (!Background.instance) {
      Background.instance = new Background()
    }
    return Background.instance
  }

  regMsgFromContent(action: string, event: any): void {
    this.regAction('content-background', action, event)
  }

  regMsgFromPopup(action: string, event: any): void {
    this.regAction('popup-background', action, event)
  }

  sendMsgToContent(action: string, msg: any, callback: any): void {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const tabId = Number(tabs[0].id)
      this.sendMessageToTab('background-content', tabId, action, msg, callback)
    })
  }

  transitMsgToContent(action: string, msg: any, callback: any): void {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const tabId = Number(tabs[0].id)
      this.sendMessageToTab('popup-content', tabId, action, msg, callback)
    })
  }

  sendMsgToPopup(action: string, msg: any, callback: any): void {
    this.sendMessage('background-popup', action, msg, callback)
  }

}

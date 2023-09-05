import {Message} from "~/types/message";
import {Base} from "~/message/types/base";
import {Flow} from "~/message/constant";

export abstract class AbsExtractor implements Base{
  protected static handlers: any = {}
  protected constructor() {
    this.onMsgListener()
  }

  private handleListener(message: Message, sender, sendResponse) {
    const { flow, action, msg, tabId } = message
    if (!AbsExtractor.handlers[flow]) {
      return
    }
    const handler = AbsExtractor.handlers[flow][action]
    let returnValue
    if (handler) {
      const { msg } = message
      returnValue = handler(msg, sender);
    }
    sendResponse(returnValue)
    return true
  }
  onMsgListener = () => {
    if (!chrome.runtime.onMessage.hasListener(this.handleListener)) {
      chrome.runtime.onMessage.addListener(this.handleListener)
    }
  }

  regAction = (flow: Flow, action: string, event: any) => {
    AbsExtractor.handlers[flow] = AbsExtractor.handlers[flow] || {};
    AbsExtractor.handlers[flow][action] = event
  }

  sendMessage = (flow: Flow, action: string, msg: any, callback: any) => {
    chrome.runtime.sendMessage({
      action: action, msg: msg, flow: flow
    }, callback)
  }

  sendMessageToTab = (flow: Flow, tabId: number, action: string, msg: any, callback: any) => {
    chrome.tabs.sendMessage(tabId, { flow, action, msg }, callback)
  }
}

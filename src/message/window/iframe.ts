export class WindowMessage {
  // 单例模式
  private static instance: WindowMessage
  private static hasListener = false
  private static handlers: any = {}

  public static getInstance() {
    if (!WindowMessage.instance) {
      WindowMessage.instance = new WindowMessage()
      this.onMsgListener()
    }
    return WindowMessage.instance
  }

  sendParentMessage(action: string, msg: any, callback: any): void {
    const message:Record<string, any> = {}
    message['action'] = action
    message['msg'] = msg
    window.parent.postMessage(message, '*');
  }
  private static handleListener = (event) => {
    const { action, msg } = event.data
    if (!WindowMessage.handlers[action]) {
      console.log('未注册数据来源')
      return
    }
    const handler = WindowMessage.handlers[action]
    if (handler) {
      handler(msg);
    }
    return true
  }

  regAction = (action: string, event: any) => {
    WindowMessage.handlers[action] = event
  }

  private static onMsgListener() {
    if (!WindowMessage.hasListener) {
      window.addEventListener('message', this.handleListener)
      WindowMessage.hasListener = true
    }
  }
}

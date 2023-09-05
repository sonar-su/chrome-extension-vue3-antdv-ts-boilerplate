import {Flow} from "~/message/constant";

export interface Message {
  action: string
  msg: any
  tabId: number
  flow: Flow
}

import {ActionTypeEnum, ElementTypeEnum} from "~/constant/enum";
import {ElementLocationAttributes} from "~/types/element";
export type ScriptActionParams = 'actionType' | 'elementType' | 'elementValue' | 'inputText'
export interface StepScriptParam {
  index: number
  key: string
  value: string
}

export interface StepScript {
  id: number
  actionType: ActionTypeEnum
  elementType: ElementTypeEnum
  elementValue: string
  elementTypeGroup: ElementLocationAttributes
  inputText: string
}

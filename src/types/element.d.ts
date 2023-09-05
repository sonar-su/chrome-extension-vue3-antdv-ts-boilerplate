export interface ElementLocationAttributes {
  id?: string
  class?: string
  xpath?: string
}

export interface ElementAttributes {
  elementLocation: ElementLocationAttributes
  type: string
  tagName: string
}
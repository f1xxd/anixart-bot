export interface ITypesResult {
  code: number
  types: ITypes[]
}

export interface ITypes {
  "@id": number
  id: number
  name: string
  icon: unknown
  workers: string | unknown
  is_sub: boolean
  episodes_count: number
  view_count: number
  pinned: boolean
}

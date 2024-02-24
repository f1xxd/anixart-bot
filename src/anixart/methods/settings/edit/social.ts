import { call } from "@/anixart"
import { EDIT_SOCIAL as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IEditSocialRequest, IEditSocialResponse } from "@/anixart/schemas/settings"

export interface IEditSocialParams extends IBaseApiParams {
  token: string
  discord?: string
  instagram?: string
  telegram?: string
  tiktok?: string
  vk?: string
}

export async function editSocial(params: IEditSocialParams): Promise<boolean> {
  const body: IEditSocialRequest = {
    discordPage: params.discord,
    instPage: params.instagram,
    tgPage: params.telegram,
    ttPage: params.tiktok,
    vkPage: params.vk,
  }

  const response = await call<IEditSocialResponse>({
    path: endpoint,
    token: params.token,
    json: body,
    ...params.request,
  })

  return response.code === 0
}

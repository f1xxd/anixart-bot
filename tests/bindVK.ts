import { bindVK as func } from "@/anixart/methods"
import * as env from "./env"

const bind = await func({
  token: env.token,
  vkToken: env.vkToken,
})

console.log(bind)

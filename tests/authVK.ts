import { authVK as func } from "@/anixart/methods"
import * as env from "./env"

const auth = await func({
  token: env.token,
  vkToken: env.vkToken,
})

console.log(auth)

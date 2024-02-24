import { bindGoogle as func } from "@/anixart/methods"
import * as env from "./env"

const bind = await func({
  token: env.token,
  googleToken: env.googleToken,
})

console.log(bind)

import { unbindGoogle as func } from "@/anixart/methods"
import * as env from "./env"

const unbind = await func({
  token: env.token,
})

console.log(unbind)

import { changePassword as func } from "@/anixart/methods"
import * as env from "./env"

const change = await func({
  token: env.token,
  current: env.password,
  new: "_18122008Vadd",
})

console.log(change)

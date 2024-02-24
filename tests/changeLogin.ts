import { changeLogin as func } from "@/anixart/methods"
import * as env from "./env"

const change = await func({
  token: env.token,
  new: "",
})

console.log(change)

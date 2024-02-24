import { changeEmail as func } from "@/anixart/methods"
import * as env from "./env"

const change = await func({
  token: env.token,
  password: env.password,
  current: env.email,
  new: "",
})

console.log(change)

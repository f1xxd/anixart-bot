import { profile as func } from "@/anixart/methods"
import * as env from "./env"

const profile = await func({
  token: env.token,
  id: 1940929,
})

console.log(profile)

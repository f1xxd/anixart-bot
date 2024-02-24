import { authGoogle as func } from "@/anixart/methods"
import * as env from "./env"

const auth = await func({
  token: env.token,
  googleToken: env.googleToken,
})

console.log(auth)

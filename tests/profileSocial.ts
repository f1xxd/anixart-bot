import { profileSocial as func } from "@/anixart/methods"
import * as env from "./env"

const profileSocial = await func({
  token: env.token,
  id: 3700477,
})

console.log(profileSocial)

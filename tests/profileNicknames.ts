import { profileNicknames as func } from "@/anixart/methods"
import * as env from "./env"

const profileNicknames = await func({
  token: env.token,
  id: 3700477,
  page: 0,
})

console.log(profileNicknames)

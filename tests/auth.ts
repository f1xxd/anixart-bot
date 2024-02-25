import { signIn as func } from "@/anixart/methods"
import * as env from "./env"

const auth = await func({
  login: env.login,
  password: env.password,
})

console.log(auth)

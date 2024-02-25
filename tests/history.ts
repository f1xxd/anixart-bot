import { history as func } from "@/anixart/methods"
import * as env from "./env"

const history = await func({
  token: env.token,
  page: 0,
})

console.log(history)

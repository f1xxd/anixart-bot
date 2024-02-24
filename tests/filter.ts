import { filter as func } from "@/anixart/methods"
import * as env from "./env"

const filter = await func({
  token: env.token,
  page: 1,
  extendedMode: true,
})

console.log(filter)

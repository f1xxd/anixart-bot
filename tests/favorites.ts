import { favorites as func } from "@/anixart/methods"
import * as env from "./env"

const favorites = await func({
  token: env.token,
  page: 0,
})

console.log(favorites)

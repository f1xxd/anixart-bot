import { searchProfile as func } from "@/anixart/methods"
import * as env from "./env"

const searchProfile = await func({
  token: env.token,
  page: 0,
  query: "flxpr",
})

console.log(searchProfile)

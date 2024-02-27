import { searchRelease as func } from "@/anixart/methods"
import * as env from "./env"

const searchRelease = await func({
  token: env.token,
  page: 4,
  query: "one piece",
})

console.log(searchRelease)

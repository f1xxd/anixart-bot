import { discoverRecommendations as func } from "@/anixart/methods"
import * as env from "./env"

const discoverRecommendations = await func({
  token: env.token,
  page: 0,
  previousPage: 0,
})

console.log(discoverRecommendations)

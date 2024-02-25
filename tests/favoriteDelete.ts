import { favoriteDelete as func } from "@/anixart/methods"
import * as env from "./env"

const favoriteDelete = await func({
  token: env.token,
  releaseId: 1,
})

console.log(favoriteDelete)

import { favoriteAdd as func } from "@/anixart/methods"
import * as env from "./env"

const favoriteAdd = await func({
  token: env.token,
  releaseId: 1,
})

console.log(favoriteAdd)

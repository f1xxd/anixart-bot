import { episodeTypes as func } from "@/anixart/methods"
import * as env from "./env"

const types = await func({
  token: env.token,
  releaseId: 3,
})

console.log(types)

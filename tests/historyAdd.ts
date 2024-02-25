import { historyAdd as func } from "@/anixart/methods"
import * as env from "./env"

const historyAdd = await func({
  token: env.token,
  releaseId: 1234,
  sourceId: 8,
  episode: 1,
})

console.log(historyAdd)

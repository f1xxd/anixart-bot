import { historyDelete as func } from "@/anixart/methods"
import * as env from "./env"

const historyDelete = await func({
  token: env.token,
  releaseId: 1234,
})

console.log(historyDelete)

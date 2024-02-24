import { types as func } from "@/anixart/methods"
import * as env from "./env"

const types = await func({
  token: env.token,
  releaseId: "all",
})

console.log(types)

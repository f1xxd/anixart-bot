import { release as func } from "@/anixart/methods"
import * as env from "./env"

const release = await func({
  token: env.token,
  releaseId: 2,
})

console.log(release)

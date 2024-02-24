import { episodeSources as func } from "@/anixart/methods"
import * as env from "./env"

const sources = await func({
  token: env.token,
  releaseId: 3,
  typeId: 1,
})

console.log(sources)

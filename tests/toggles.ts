import { toggles as func } from "@/anixart/methods"
import * as env from "./env"

const toggles = await func({
  versionCode: env.versionCode,
})

console.log(toggles)

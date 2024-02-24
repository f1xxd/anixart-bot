import { editSocial as func } from "@/anixart/methods"
import * as env from "./env"

const edit = await func({
  token: env.token,
  discord: "123489",
})

console.log(edit)

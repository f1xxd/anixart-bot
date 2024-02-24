import { editStatus as func } from "@/anixart/methods"
import * as env from "./env"

const edit = await func({
  token: env.token,
  status: "",
})

console.log(edit)

import { discoverWatching as func } from "@/anixart/methods"

const discoverWatching = await func({
  page: 0,
})

console.log(discoverWatching)

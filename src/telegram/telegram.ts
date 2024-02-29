import { Bot } from "gramio"
import { get } from "@/redis"

export const bot = new Bot(process.env.BOT_TOKEN as string)
  .derive("message", (context) => ({ user: get(`tg:${context.senderId}`) }))
  .on("message", async(context) => {
    return context.send("what")
  })

bot.start().then(() => console.log("started"))

import { Bot } from "gramio"
import { redis } from "./redis"

export const bot = new Bot(process.env.BOT_TOKEN!)

bot.updates.on("message", async(context) => {
  const user = JSON.parse(await redis.get(`tg:${context.senderId}`) as string)

  if(user) {
    redis.set(`tg:${context.senderId}`, JSON.stringify({
      editedAt: new Date(),
      createdAt: user.createdAt,
    }))
  } else {
    redis.set(`tg:${context.senderId}`, JSON.stringify({
      editedAt: new Date(),
      createdAt: new Date(),
    }))
  }

  return context.send("what")
})

bot.updates.startPolling()
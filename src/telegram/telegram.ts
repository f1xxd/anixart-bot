import { Bot } from "gramio"

export const bot = new Bot(process.env.BOT_TOKEN as string)

bot.updates.on("message", async(context) => {
  return context.send("what")
})

bot.updates.startPolling()
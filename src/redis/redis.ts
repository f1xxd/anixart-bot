import { createClient } from "redis"
import { type ValueType } from "@/redis/types"

export const redis = await createClient({
  url: process.env.REDIS,
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect()

export async function get(key: string): Promise<ValueType | null> {
  const value = await redis
    .get(key)
    .then((value) => JSON.parse(String(value)))

  return value
}

export async function set<V, R>(key: string, value: V): Promise<R> {
  await redis.set(key, JSON.stringify(value))
  return await get(key) as R
}

export async function del(key: string): Promise<boolean> {
  const value: number = await redis.del(key)
  return value === 1
}

export async function edit<V, R>(key: string, value: V): Promise<R> {
  let current = await get(key)
  if(!current) current = { editedAt: new Date().toUTCString(), createdAt: new Date().toUTCString() }

  return await set(key, { ...current, ...value, editedAt: new Date().toUTCString() })
}

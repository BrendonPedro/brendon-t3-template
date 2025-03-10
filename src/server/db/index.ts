// src/server/db/index.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema"; // Makes querying against the drizzle database easier

// For application usage (pooled connection)
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

// For CLI operations like migrations, push, studio (unpooled connection)
// This is needed because Drizzle operations require direct connections
export const createUnpooledClient = () => {
  const sql = neon(process.env.DATABASE_URL_UNPOOLED!);
  return drizzle(sql, { schema });
};
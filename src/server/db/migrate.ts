import { migrate } from "drizzle-orm/neon-http/migrator";
import { env } from "~/env";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// This file is used for migrations
async function main() {
  const sql = neon(env.DATABASE_URL_UNPOOLED);
  const db = drizzle(sql, { schema });

  console.log("Running migrations...");
  
  await migrate(db, { migrationsFolder: "drizzle" });
  
  console.log("Migrations completed!");
  
  process.exit(0);
}

main().catch((e) => {
  console.error("Migration failed!");
  console.error(e);
  process.exit(1);
}); 
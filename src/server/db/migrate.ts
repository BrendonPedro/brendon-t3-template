import { migrate } from "drizzle-orm/neon-http/migrator";
import { env } from "~/env";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// This file is used for migrations
async function main() {
  // Use DATABASE_URL_UNPOOLED if available, otherwise fall back to DATABASE_URL
  const connectionString = env.DATABASE_URL_UNPOOLED ?? env.DATABASE_URL;
  
  if (!connectionString) {
    throw new Error("No database connection string provided. Please set DATABASE_URL or DATABASE_URL_UNPOOLED in your environment variables.");
  }
  
  const sql = neon(connectionString);
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
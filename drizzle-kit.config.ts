import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

// Load environment variables directly
dotenv.config();

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL_UNPOOLED || '',
  },
  tablesFilter: ["brendon-t3-latest_*"],
}); 
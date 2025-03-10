import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

// Load environment variables directly
dotenv.config();

// Use a fallback for DATABASE_URL_UNPOOLED if it's not available
const dbUrl = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl || '',
  },
  tablesFilter: ["brendon-t3-latest_*"],
}); 
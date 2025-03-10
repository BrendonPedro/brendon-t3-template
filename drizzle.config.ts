import { defineConfig } from 'drizzle-kit';
import { env } from "~/env";

// Make sure we have a valid URL by providing a fallback
const dbUrl = env.DATABASE_URL_UNPOOLED || env.DATABASE_URL;

// Ensure we have a string value for the URL
if (!dbUrl) {
  throw new Error("No database URL provided. Please set DATABASE_URL or DATABASE_URL_UNPOOLED in your environment variables.");
}

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl, // This is now guaranteed to be a string
  },
  tablesFilter: ["brendon-t3-latest_*"],
});
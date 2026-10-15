import { Elysia } from "elysia";
import { connectionPool } from "../db";

export const healthRoutes = new Elysia()
  .get("/", () => ({
    status: "ok",
    message: "Server is running with Bun and ElysiaJS",
    timestamp: new Date().toISOString(),
  }))
  .get("/health/db", async ({ set }) => {
    try {
      const connection = await connectionPool.getConnection();
      await connection.ping();
      connection.release();

      return {
        status: "ok",
        database: "connected",
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      set.status = 503;
      return {
        status: "error",
        database: "disconnected",
        message: error instanceof Error ? error.message : "Database connection failed",
        timestamp: new Date().toISOString(),
      };
    }
  });

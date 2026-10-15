import { Elysia } from "elysia";
import { config } from "./config/env";
import { healthRoutes } from "./routes/health";
import { userRoutes } from "./routes/users";

export const app = new Elysia()
  .use(healthRoutes)
  .use(userRoutes)
  .listen(config.port, ({ hostname, port }) => {
    console.log(`🦊 Elysia server is running at http://${hostname}:${port}`);
  });

export type App = typeof app;

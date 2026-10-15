import { Elysia, t } from "elysia";
import { db } from "../db";
import { users } from "../db/schema";

export const userRoutes = new Elysia({ prefix: "/users" })
  .get("/", async () => {
    return await db.select().from(users);
  })
  .post(
    "/",
    async ({ body, set }) => {
      try {
        const [result] = await db.insert(users).values({
          name: body.name,
          email: body.email,
        });

        set.status = 201;
        return {
          success: true,
          data: {
            id: result.insertId,
            name: body.name,
            email: body.email,
          },
        };
      } catch (error: any) {
        set.status = 400;
        return {
          success: false,
          message: error.message || "Failed to create user",
        };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: "email" }),
      }),
    }
  );

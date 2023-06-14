import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import adverstsRoutes from "./routers/adverts.routes";
import handleAppError from "./errors/handleAppError";
import imagesRoutes from "./routers/images.routes";
import { usersRoutes } from "./routers/users.routes";
import { sessionRoutes } from "./routers/session.routes";

const app: Application = express();
app.use(express.json());
app.use("/adverts", adverstsRoutes);
app.use("/adverts/images", imagesRoutes);
app.use("/login", sessionRoutes)
app.use("/users", usersRoutes);

app.use(handleAppError);

export default app;

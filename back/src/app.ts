import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import adverstsRoutes from "./routers/adverts.routes";
import handleAppError from "./errors/handleAppError";

const app: Application = express();
app.use(express.json());
app.use("/adverts", adverstsRoutes);

app.use(handleAppError);

export default app;

import express from "express";
import swaggerUi from "swagger-ui-express";

import cors from "cors";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database"

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log("Server is running!"));

import express from "express";
import clientsRouters from "./routes/clients.routes.js";

const app = express();

app.use(express.json());
app.use("/api", clientsRouters);

export default app;

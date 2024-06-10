import dotenv from "dotenv";

dotenv.config();

import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from 'cors';

import imobiliariaRouter from "./routes/imobiliaria.js";
import corretorRouter from "./routes/corretor.js";
import funcionarioRouter from "./routes/funcionario.js";
import imovelRouter from "./routes/imovel.js";

const app = express();

import mongoose from "mongoose";
mongoose.connect(process.env.DATABASE_URL);

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/imobiliarias", imobiliariaRouter);
app.use("/corretores", corretorRouter);
app.use("/funcionarios", funcionarioRouter);
app.use("/imoveis", imovelRouter);

export default app;

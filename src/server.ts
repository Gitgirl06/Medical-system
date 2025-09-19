import dotenv, { config } from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import { Config } from "./config";
import ApiRouter from "./api";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(ApiRouter)

async function StartServer() {
    try {
        await mongoose.connect(Config.MongoDB_URL);
        console.log("Database is connected successfully");

        app.listen(Config.Port, () => {
            console.log(`App is running at http://localhost:${Config.Port}/`)
        })
    } catch (error) {
        console.log(`Database error :: ${error}`)
    }
}
StartServer();


import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();

dotenv.config();

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 7910;

app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
    connectMongoDB()
});
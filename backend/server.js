import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
// import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(express.json());
// app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true}));
// app.use(express.urlencoded({ extended: true, limit: "160kb"}));
app.use(cookieParser());
 
app.use("/api/auth", authRoutes);

// app.get('/', (req, res) => {
//     res.send("js hyuedc he")
// })

const PORT = process.env.PORT || 7910;

app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
    connectMongoDB()
});
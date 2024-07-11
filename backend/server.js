import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(express.json());
 
app.use("/api/auth", authRoutes);
// app.use(express.json({ limit: "15mb" }));
// app.use(express.urlencoded({ extended: true}));
// app.use(express.urlencoded({ extended: true, limit: "160kb"}));

// app.use(express.urlencoded({ extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.json({ limit: "15mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "160kb"}));



// app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.send("js hyuedc he")
// })

const PORT = process.env.PORT || 7910;

app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
    connectMongoDB()
});
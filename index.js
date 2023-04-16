import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDatabase } from "./src/database/db.js";

import userRoute from "./src/routes/userRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

connectToDatabase();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoute);

app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");

    next();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
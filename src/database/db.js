import mongoose from "mongoose";

export const connectToDatabase = () => {
    console.log("Waiting connecting to database...");

    const params = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose.connect(process.env.MONGODB_URL, params).then(() => console.log("Connected successfully to the database.")).catch((error) => console.log(error));
};
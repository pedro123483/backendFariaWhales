import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: false,
    },
});

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);

    next();
});

export const userModel = mongoose.model("user", userSchema);
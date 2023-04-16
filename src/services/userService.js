import { userModel } from "../models/user.js";

const create = (body) => userModel.create(body);
const findUser = (email) => userModel.findOne({ email: email });

export default {
    create,
    findUser,
};
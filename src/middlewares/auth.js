import jwt from "jsonwebtoken";

export const auth = async (request, response, next) => {
    try {
        const token = request.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");
        const user = await decodedToken;

        request.user = user;

        next();
    } catch (error) {
        return response.status(401).json({
            message: error.message,
        });
    }
};
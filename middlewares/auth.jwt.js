const jwt = require("jsonwebtoken");
const authConfig = require("../configs/auth.config");
const User = require("../models/user.model");
// const {
//     constant
// } = require("../Utils/constants");

const validateRefreshToken = async(req, res, next) => {
    const refreshToken = req.headers["x-access-token"];

    if (!refreshToken) {
        return res.status(400).send("invalid token");
    }
    try {
        jwt.verify(refreshToken, refreshKy, async(err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "UnAuthorised!",
                });
            }
            console.log(decoded, decoded.id);
            const user = await User.findOne({ userId: decoded.id });
            if (!user) {
                return res.status(400).send({
                    message: "The user that this token belongs to does not exist",
                });
            }
            req.user = user;
            next();
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal server error");
    }
};

const isAdmin = async(req, res, next) => {
    try {
        const user = await User.findOne({ userId: req.userId });
        res.status(403).send({
            message: "Only ADMIN users are allowed to access "
        })
        next();
    } catch (err) {
        console.log("err");
        return res.status(500).send({
            message: "Internal server error while reading the user data"
        })
    }


}

const isValidUserIdInReqParam = async(req, res, next) => {
    try {
        const user = User.find({ userId: req.params.id });
        if (!user) {
            return res.status(400).send({
                message: "UserId passed doesn't exist"
            })
        }
        next();
    } catch (err) {
        console.log("Error while reading the user info", err.message);
        return res.status(500).send({
            message: "Internal server error while reading the user data"
        })
    }
}


const authJwt = {
    validateRefreshToken: validateRefreshToken,
    isAdmin: isAdmin,
    isValidUserIdInReqParam: isValidUserIdInReqParam,


};
module.exports = authJwt;
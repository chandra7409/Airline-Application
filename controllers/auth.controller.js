const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { otp, verfiedUserData } = require("../configs/auth.config");
const mailSend = require("../configs/mail.config");
const authConfig = require("../configs/auth.config");
const User = require("../models/user.model");
const Otp = require("../models/otp.model")
const constant = require("../utils/constants");

exports.registration = async(req, res) => {
    // console.log("DATA");
    const otpGenerated = await otp();
    // console.log(otp(), otpGenerated);
    const obj = {
        name: req.body.name,
        userId: req.body.userId,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        userType: req.body.userType,
        userStatus: constant.userStatus.inProgress,
    };

    try {
        const newUser = await User.create(obj);
        const otpDetails = {
            otpNumber: otpGenerated,
            userEmailId: newUser.email,
        };
        const newOtp = await Otp.create(otpDetails);
        const emailData = {
            to: req.body.email,
            otpGenerated,
        };
        await mailSend(emailData);
        res.status(200).send(
            `An otp has been sent to you please enter that on this link ${authConfig.otpRoute}`
        );
        verfiedUserData(newUser, newOtp);
    } catch (err) {
        console.log(err);
        return res.status(500).send("internal server error");
    }
};

exports.otpCheck = async(req, res) => {
    try {
        let validOtp = await Otp.findOne({ otpNumber: req.body.otp });

        let user = req.user;

        user.userStatus =
            user.userType == constant.userType.customer ?
            constant.userStatus.approved :
            constant.userStatus.pending;
        await Otp.destroy({ id: validOtp.id });
        await validOtp.save();
        await user.save();
        return res.status(201).send(user);
    } catch (err) {
        console.log(err);
        return res.status(500).send("err");
    }
};

exports.login = async(req, res) => {
    try {
        console.log(authConfig.secretKy);
        const accessToken = jwt.sign({ id: req.user.userId }, authConfig.secretKy, {
            expiresIn: "15m",
        });
        console.log(authConfig.refreshKy);
        const refreshToken = jwt.sign({ id: req.user.userId },
            authConfig.refreshKy, {
                expiresIn: "5h",
            }
        );

        return res.status(200).send({ accessToken, refreshToken });
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .send("Internal server error please trya again later");
    }
};

exports.refreshToken = async(req, res) => {
    const accessToken = jwt.sign({ id: req.user.userId }, authConfig.secretKy, {
        expiresIn: "15m",
    });
    try {
        return res.status(200).send(accessToken);
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .send("Internal server error please trya again later");
    }
};
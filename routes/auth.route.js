/**
 * This file will contains the logic for routing request
 * 
 * This file is dedicated to the routing logic for sign up and sign in
 */


const userController = require("../controllers/auth.controller");
const { verifySignUp, authJwt } = require("../middlewares/index.js");
//const authController = require("../controllers/authController");
//const { verifySignUp } = require("../middlewares")
module.exports = (app) => {
    /**
     * POST   /crm/api/v1/auth/signup
     */


    app.post("/flighBooking/ap1/v1/registration", [verifySignUp.registrationValidation], userController.registration);

    //////////////////////////////////
    ////Otp verifying the email
    app.post("/flighBooking/ap1/v1/otp", [verifySignUp.otpVerify], userController.otpCheck);
    /**
     * LOGIN
     * 
     * POST /crm/api/v1/auth/login
     */


    app.post("/flighBooking/ap1/v1/login", [verifySignUp.login], userController.login);

    ////this is route for the refreshAccessToken 

    app.get("/flighBooking/ap1/v1/token", [authJwt.validateRefreshToken], userController.refreshToken);

};
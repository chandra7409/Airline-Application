const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    OtpNumber: {
        type: Number,
        required: true
    },
    userEmailId: {
        type: String,
        required: true,
        unique: true,
    }
}, { timeStamps: true });

const otpModel = new mongoose.model('otpModel', otpSchema);
module.exports = otpModel;
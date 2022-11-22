const mongoose = require('mongoose');
const constants = require("../Utils/constants")
const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        default: constants.userType.customer,
        enum: [constants.userType.admin, constants.userType.customer, constants.userType.flightAdmin]

    },
    userStatus: {
        type: String,
        required: true,
        default: constants.userStatus.approved,
        enum: [constants.userStatus.approved, constants.userStatus.pending, constants.userStatus.cancelled, constants.userStatus.inProgress, constants.userStatus.blackListed, ]
    },

}, { timestamps: true });

// const User = mongoose.model('User', userSchema);

// module.exports = { User };


module.exports = mongoose.model("User", userSchema);
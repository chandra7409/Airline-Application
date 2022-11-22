const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,

        ref: "User",
    },
    comment: {
        type: String,
        minlength: 5,
        required: true,
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId,

        ref: "Flight",
    },
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
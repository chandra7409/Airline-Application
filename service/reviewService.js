const Review = require('../models/review.model');
exports.createreview = async(data) => {
    try {
        const newReview = {
            comment: data.comment,
            user: data.user,
            flight: data.flight
        }
        const response = await new Review(newReview).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

exports.getReview = async(user, flight) => {
    try {
        const response = await review.findOne({ user: user, flight: flight });
        return response;
    } catch (err) {
        console.log(err);
    }
}

exports.destroyReview = async(id) => {
    try {
        const response = await review.findByIdAndDelete(id);
        console.log(response)
        return response;
    } catch (err) {
        console.log(err);
    }
}
exports.getAllReview = async(flight) => {
    try {
        const response = await review.find({ flight: flight });;
        return response;
    } catch (err) {
        console.log(err);
    }
}
const reviewService = require('../service/reviewService');

exports.createreview = async(req, res) => {
    try {
        const review = await ReviewService.createreview(req.body);
        res.status(200).json({
            success: true,
            message: 'Successfully created review',
            data: review
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

exports.getreview = async(req, res) => {
    try {
        const review = await ReviewService.getReview(req.params.userId, req.params.flightId);
        res.status(200).json({
            success: true,
            message: 'Successfully fetched review',
            data: review
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

exports.deletereview = async(req, res) => {
    try {
        const review = await ReviewService.destroyreview(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Successfully cancel review',
            data: review
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}
exports.getAllreview = async(req, res) => {
    try {
        const review = await ReviewService.getAllReview(req.params.flightId);
        res.status(200).json({
            success: true,
            message: 'Successfully fetched all airline',
            data: review
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}
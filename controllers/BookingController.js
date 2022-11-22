const BookingService = require('../service/BookingService');

exports.createBooking = async(req, res) => {
    try {
        const Booking = await BookingService.createBooking(req.body);
        res.status(201).json({
            success: true,
            message: 'Successfully created Booking',
            data: Booking
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}





exports.getBoardingPass = async(req, res) => {
    try {
        const Booking = await BookingService.getBooking(req.params.Id);
        res.status(200).json({
            success: true,
            message: 'Successfully fetched boarding pass',
            data: Booking
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

exports.cancelBooking = async(req, res) => {
    try {
        const Booking = await BookingService.destroyBooking(req.query.Id);
        res.status(200).json({
            success: true,
            message: 'Successfully cancel Booking',
            data: Booking
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}
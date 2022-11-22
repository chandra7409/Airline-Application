const Booking = require('../models/Booking.model');

exports.createBooking = async(data) => {
    try {
        const newBooking = {
            status: data.status,
            id: data.id,
            flight: data.flight,
            user: data.user
        }
        const response = await new Booking(newBooking).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

exports.cancelBooking = async(id) => {
    try {
        const response = await Booking.findOneAndUpdate({ id: id }, { status: 'cancelled' });
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

exports.getBoardingPass = async(id) => {
    try {
        const response = await Booking.findOne({ id: id })
            .populate('flight')
            .populate('user')
            .exec();
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
const flightService = require('../service/flightService');

exports.createflight = async(req, res) => {
    try {
        const flight = await flightService.createflight(req.body);
        res.status(200).json({
            success: true,
            message: 'Successfully created flight',
            data: flight
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

exports.getflight = async(req, res) => {
    try {
        const flight = await flightService.getflight(req.params.flightNumber);
        res.status(200).json({
            success: true,
            message: 'Successfully fetched flight',
            data: flight
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

exports.getAllflights = async(req, res) => {
    try {
        const flights = await flightService.getAllflights(req.query);
        res.status(200).json({
            success: true,
            message: 'Successfully fetched all flight',
            data: flights
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

exports.destroyflight = async(req, res) => {
    try {
        const flight = await flightService.destroyflight(req.query.flightNumber);
        res.status(200).json({
            success: true,
            message: 'Successfully deleted flight',
            data: flight
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}
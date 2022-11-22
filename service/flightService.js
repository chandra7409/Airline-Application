const flight = require("../models/flight.model");

exports.createflight = async(data) => {
    try {
        const newflight = {
            departureAirport: data.departureAirport,
            arrivalAirport: data.arrivalAirport,
            duration: data.duration,
            departureTime: data.departureTime,
            arrivalTime: data.arrivalTime,
            flightNumber: data.flightNumber,
            price: data.price,
            airline: data.airlineId
        }
        const response = await new flight(newflight).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}
exports.updateflight = async(data) => {
    try {
        const response = await flight.findOneAndDelete({ flightNumber: data.flightNumber }, data);
        console.log(response)
        return response;
    } catch (err) {
        console.log(err);
    }
}

exports.destroyflight = async(flightNumber) => {
    try {
        const response = await flight.findOneAndDelete({ flightNumber: flightNumber });
        console.log(response)
        return response;
    } catch (err) {
        console.log(err);
    }
}

exports.getflight = async(flightNumber) => {
    try {
        const response = await flight.findOne({ flightNumber: flightNumber });
        return response;
    } catch (err) {
        console.log(err);
    }
}

exports.getAllFlights = async(data) => {
    try {
        let response;
        if (data.sort) {
            if (data.price) {
                if (data.sort == 'inc')
                    response = await Flight.find().sort('price');
                else
                    response = await Flight.find().sort('-price');
            } else if (data.duration) {
                if (data.sort == 'inc')
                    response = await Flight.find().sort('duration');
                else
                    response = await Flight.find().sort('-duration');
            } else {
                response = await Flight.find();
            }
        } else if (data.filter) {
            if (data.price) {
                if (data.filter == 'lt')
                    response = await Flight.find({ price: { $lt: data.price } });
                else
                    response = await Flight.find({ price: { $gt: data.price } });
            } else if (data.duration) {
                if (data.filter == 'lt')
                    response = await Flight.find({ duration: { $lt: data.duration } })
                else
                    response = await Flight.find({ duration: { $gt: data.duration } });
            } else {
                response = await Flight.find();
            }
        }
        return response;
    } catch (err) {
        console.log(err);
    }
};
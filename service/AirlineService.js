const Airline = require('../models/Airline.model');

exports.createAirline = async(data) => {
    try {
        const newAirline = {
            name: data.name
        }
        const response = await new Airline(newAirline).save();
        return response
    } catch (err) {
        console.log(err);
    }
}

exports.destroyAirline = async(name) => {
    try {
        const response = await Airline.findOneAndDelete({ name: name });
        console.log(response)
        return response;
    } catch (err) {
        console.log(err);
    }
}

exports.getAirline = async(name) => {
    try {
        const response = await Airline.findOne({ name: name });
        return response;
    } catch (err) {
        console.log(err);
    }
}

exports.getAllAirlines = async() => {
    try {
        const response = await Airline.find();;
        return response;
    } catch (err) {
        console.log(err);
    }
}
const mongoose = require("mongoose");
const flightSchema = new mongoose.Schema({
    departureAirport: {
        type: String,
        required: true,

    },
    arrivalAirport: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },

    airline: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
        ref: 'Airline'

    },
    flightDate: {
        type: Date,
        default: Date.now
    },
    departureTime: {
        type: String
    },
    flightNumber: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    boardinGate: {
        type: Number
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now()
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now()
        }
    }
});
const flight = new mongoose.model('flight', flightSchema);
module.exports = { flight }
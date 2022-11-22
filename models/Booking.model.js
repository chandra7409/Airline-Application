const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true

    },
    flight: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
        ref: 'Flight'

    },
    user: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
        ref: 'user'
    },
    status: {
        type: String,
        required: true,
        default: 'in process',
        enum: ["booked", "cancelled", "in process"]
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
module.exports = mongoose.model('Booking', BookingSchema);
//module.exports = { Booking }
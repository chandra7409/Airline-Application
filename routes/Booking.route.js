const BookingController = require("../controllers/BookingController");
const { verifySignUp } = require("../middlewares")
module.exports = (app) => {
    app.post("/Airline/api/v1/booking", BookingController.createBooking);
    app.get("/Airline/api/v1/booking/:id/boardingPass", BookingController.getBoardingPass);
    app.delete("/Airline/api/v1/booking/:id", BookingController.cancelBooking);
}
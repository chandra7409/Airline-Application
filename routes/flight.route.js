const flightController = require("../controllers/flightController");
const { verifySignUp } = require("../middlewares")
module.exports = (app) => {
    app.post("/Airline/api/v1/flight", flightController.createflight);
    app.get("/Airline/api/v1/flight/:flightNumber", flightController.getflight);
    app.get("/Airline/api/v1/flight", flightController.getAllflights);
    app.delete("/Airline/api/v1/flight", flightController.destroyflight);
}
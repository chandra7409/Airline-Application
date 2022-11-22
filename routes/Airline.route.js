const AirlineController = require("../controllers/AirlineController");
const { verifySignUp } = require("../middlewares")
module.exports = (app) => {
    // app.get("/Airline/api/v1/help", helpController.helpDetails);
    app.post("/Airline/api/v1/airline", AirlineController.createAirline);
    app.get("/Airline/api/v1/airline/:name", AirlineController.getAirline);
    app.get("/Airline/api/v1/airline", AirlineController.getAllAirlines);
    app.delete("/Airline/api/v1/airline", AirlineController.destroyAirline);
}
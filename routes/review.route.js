const reviewController = require("../controllers/reviewController");
const { verifySignUp } = require("../middlewares")
module.exports = (app) => {
    app.post("/Airline/api/v1/review ", reviewController.createreview);
    app.get("/Airline/api/v1/review /:flightId ", reviewController.getAllreview);
    app.get("/Airline/api/v1/review/:flightId/:userId", reviewController.getreview);
    app.delete("/Airline/api/v1/review/:flightId", reviewController.deletereview);
}
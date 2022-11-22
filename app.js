const express = require('express'); // this package returns a function using which we can initiate a new express application object
const bodyParser = require('body-parser');
//const passport = require('passport');
const User = require("./models/user.model");

const app = express();


const serverConfig = require("./configs/server.config");

const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");


const bcrypt = require("bcrypt");
/**
 * Register the body-parser middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Initialize the connection to the mongoDB
 */
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
    console.log("Error while connecting to monogoDB ")
});
db.once("open", () => {
    console.log("Connected to mongoDB");
    init();
});

/**
 * Create the ADMIN user at the boot time
 */
async function init() {

    //     /**
    //      * Check if the admin user is already present
    //      */
    try {

        //         /**
        //          * Every time the server starts the collection should be refreshed
        //          *
        //          */

        await User.collection.drop();

        // let user = await User.findOne({ userId: "admin" });
        // if (user) {
        //     console.log("ADMIN user is already present");
        //     return;
        // }



        const user4 = await User.create({
            "name": "TilakSingh",
            "userId": "admin50090971",
            "password": bcrypt.hashSync("Wel77740908", 8),
            "email": "Traraishaha@gmail.com",
            "userType": "ADMIN"
        });
        console.log(user4);
    } catch (err) {
        console.log("err in db initialization , " + err.message);
    }
}
/**
 *  We need to connect router to the server
 * 
 */
require("./routes/auth.route")(app);
require("./routes/Airline.route")(app);
require("./routes/Booking.route")(app);
require("./routes/flight.route")(app);
require("./routes/review.route")(app);

/////this route you check the your application ready for server
app.get("/", (req, res) => {
    console.log("Reached");
    res.status(200).send("Hello Tilak chandra Start your application on the server");
});
app.listen(serverConfig.PORT, () => {
    console.log("Mongo db connected successfully");
    console.log("Server Started Successsfully")
    console.log("Started the server on the PORT number : ", serverConfig.PORT)
});
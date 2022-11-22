const userController = require("../controllers/userController");
const { verifySignUp } = require("../middlewares")
module.exports = (app) => {

    app.get("/crm/api/v1/users", [authJwt.verifyToken, authJwt.isAdmin], userController.findAll);


    app.get("/crm/api/v1/users/:id", [authJwt.verifyToken, authJwt.isValidUserIdInReqParam, authJwt.isAdminOrOwner], userController.findByUserId);
    app.get("/crm/api/v1/users/:id", [authJwt.verifyToken, authJwt.isValidUserIdInReqParam, authJwt.isAdminOrOwner], userController.update);

}
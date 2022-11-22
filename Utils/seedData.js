// const User = require("../model/user.model");

function insertData() {
    let userData = [{
        firstName: "Tialk",
        lastName: "Chandra",
        birthDate: 2000 - 11 - 9,
        password: "Asus#7409",
        emailId: "tilakc434@email.com",
        contact: 8859650758,
    }, ];
    return userData;
}
module.exports = {
    insertData,
};
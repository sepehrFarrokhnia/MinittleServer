const Controller = require('../../Controllers/Users/LogIn');
const security = require("../../Security/Authenticate");

module.exports = (app) => {
    app.post('/users/login', Controller.logIn)
    app.get('/users/login',security.isAuthenticated,Controller.getInformation)
}
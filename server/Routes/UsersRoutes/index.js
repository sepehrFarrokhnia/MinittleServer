const model = require('../../Models/index');
const signUp = require('./SignUp');
const login = require('./LogIn');
const users = require('../../Controllers/Users/Users');
const security = require("../../Security/Authenticate");

module.exports = (app) => {
    app.get('/users',security.isAuthenticated,security.isAdmin,users.allUsers);
    signUp(app);
    login(app);
}
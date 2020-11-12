const controller = require('../../Controllers/Users/SignUp');

module.exports = (app) => {
    app.post('/users/signup',controller.signUp);
}
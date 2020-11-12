const userControllers = require('./UsersRoutes/index');

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("login-security");
    });
    userControllers(app);
}
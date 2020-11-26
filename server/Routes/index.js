const userControllers = require('./UsersRoutes/index');
const spcae = require('./space');

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("login-security");
    });
    userControllers(app);
    spcae(app);
}
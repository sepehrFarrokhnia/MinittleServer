const secrets = require("../Config/security/Config.json");
const jwt = require("jsonwebtoken");

module.exports = {
    isAuthenticated(req, res, next) {
        if (typeof req.headers.auth != "undefined") {
            let token = req.headers.auth;
            jwt.verify(token, secrets.secrets.loginSecret, { algorithm: "HS256" }, (err, user) => {
                if (err) {
                    res.status(400).send({ 0: 400, 1: "unathorized" });
                }
                req.user = user;
                next();
            })
        } else {
            res.status(400).send({ 0: 400, 1: "unathorized" });
        }
    },
    isAdmin(req, res, next) {
        if (req.user.Role != null) {
            let role = req.user.Role;
            if (role == "admin") {
                next();
            } else {
                res.status(403).send({ 0: 403, 1: "unathorized" });
            }

        } else {
            res.status(404).send({ 0: 404, 1: "notFound" })
        }

    }

}
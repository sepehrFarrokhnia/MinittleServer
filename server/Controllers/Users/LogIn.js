const Users = require("../../Models").Users;
const secrets = require("../../Config/security/Config.json");
const jwt = require("jsonwebtoken");
const encrypt = require('crypto-js/sha256');


module.exports = {

    logIn(req, res) {
        const { username, password } = req.body;
        Users.findOne({ where: { username: username, password: encrypt(password).toString() } })
            .then(rsu => {
                if (rsu == null) {
                    res.status(404).json({ status: 404, error: "notFound" });
                } else {
                    console.log(`playload : ${rsu}`)
                    let token = jwt.sign({ id: rsu.id, name: rsu.name, username: rsu.username, Role: rsu.Role }, secrets.secrets.loginSecret, { algorithm: 'HS256' });
                    res.status(200).json({ status: 200, token: token });
                }
            }).catch(err => {
                console.log(err)
                res.status(400).json({ status: 400, error: err })
            })
    },

    getInformation(req, res) {
        const username = req.user.username;
        Users.findOne({
            where: {
                username: username
            }
        }).then(rsu => {
            res.status(200).json({ status: 200, name: rsu.name, username: rsu.username, password: rsu.password });
        }).catch(err => {
            console.error(err);
        })
    }
}
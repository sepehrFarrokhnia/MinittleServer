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
                    res.status(404).json({ 0: 404, 1: "notFound" });
                } else {
                    console.log(`playload : ${rsu}`)
                    let token = jwt.sign({ name: rsu.name, username: rsu.username, password: rsu.password, Role: rsu.Role }, secrets.secrets.loginSecret, { algorithm: 'HS256' });
                    res.status(200).json({ 0: 200, 1: token });
                }
            }).catch(err => {
                console.log(err)
                res.status(400).json({ 0: 400, 1: err })
            })
    },

    getInformation(req, res) {
        const username = req.user.username;
        Users.findOne({
            where: {
                username: username
            }
        }).then(rsu => {
            res.status(200).json({ 0: 200, name: rsu.name, username: rsu.username, password: rsu.password });
        }).catch(err => {
            console.error(err);
        })
    }
}
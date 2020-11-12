const Users = require("../../Models").Users;
const secrets = require("../../Config/security/Config.json");
const jwt = require("jsonwebtoken");


module.exports = {

    logIn(req, res) {
        const { username, password } = req.body;
        Users.findOne({ where: { username: username, password: password } })
            .then(rsu => {
                if (rsu == null) {
                    res.status(404).send("username or password is wring");
                } else {
                    console.log(`playload : ${rsu}`)
                    let token = jwt.sign({ name: rsu.name, username: rsu.username, password: rsu.password , Role: rsu.Role }, secrets.secrets.loginSecret, { algorithm: 'HS256' });
                    res.status(200).send(token);
                }
            }).catch(err => {
                console.log(err)
                res.status(400).send(err)
            })
    },

    getInformation(req, res) {
        const username = req.user.username;
        Users.findOne({
            where: {
                username: username
            }
        }).then(rsu => {
            res.json({ name: rsu.name, username: rsu.username, password: rsu.password });
        }).catch(err => {
            console.error(err);
        })
    }
}
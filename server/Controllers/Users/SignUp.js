const model = require("../../Models");
const securityConfig = require('../../Config/security/Config.json');

module.exports = {
    signUp(req, res) {
        const { username, password } = req.body;
        console.log(req.body);
        model.Users
            .findOne({
                where: {
                    username: username
                }
            }).then(user => {
                if (user == null) {
                    model.Users.create({
                        username: username,
                        password: password,
                    }).then(resualt => {
                        var changedName = "Mashty-" + resualt.id;
                        model.Users.update({ name: changedName }, {
                            where: {
                                username: username
                            }
                        }).then(user1 => {
                            res.status(200).send(changedName);
                        })
                    })
                        .catch(err => {
                            console.error(err);
                            res.status(400).send("couldn't create user")
                        })
                } else {
                    res.status(400).send("user already exist");
                }
            }).catch(err => {
                console.log(err);
                res.status(400).send("some error happend");
            });
    }


}
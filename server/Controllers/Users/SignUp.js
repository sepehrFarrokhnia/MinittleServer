const model = require("../../Models");
const securityConfig = require('../../Config/security/Config.json');
const encrypt = require('crypto-js/sha256');

randomPassword = () => {
    var st = "abcdefghijklmnopqrz123456789"
    var pass = ""
    for (let i = 0; i < 5; i++) {
        pass += st.charAt(Math.floor(Math.random() * st.length));
    }
    return pass;
}

module.exports = {
    signUp(req, res) {

        model.Users
            .create({
                username: "new"
            }).then(reu => {
                const prebuilUsername = "minittleUSers" + reu.id;
                const prebuildPassword = randomPassword();
                const prebuildName = 'users-' + reu.id;
                model.Users
                    .update({
                        username: prebuilUsername,
                        password: encrypt(prebuildPassword).toString(),
                        name: prebuildName
                    }, {
                        where: {
                            username: "new"
                        }
                    }).then(reu1 => {
                        // everything went well
                        res.status(200).json({ status: 200, username: prebuilUsername, password: prebuildPassword });
                    }).catch(err => {
                        //couldn't update the user
                        console.log(err);
                        res.status(500).json({ status: 500, error: err });
                    })
            }).catch(err => {
                console.log(err);
                res.status(500).json({ status: 500, error: err });
            });

    }


}
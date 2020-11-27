const model = require("../../Models");

module.exports = {
    showAll(req, res) {
        model.qwe
            .findAll().then(rsu => {
                res.json({
                    status: 200,
                    all: rsu
                });
            })
    },

    addd(req, res) {
        const { k, b } = req.body;
        model.qwe
            .create({
                title: k,
                score: b
            }).then(rsu => {
                res.json({
                    status:200
                });
            })
    }
}
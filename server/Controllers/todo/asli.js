const model = require("../../Models");

module.exports = {
    showAll(req, res) {
        model.qwe
            .findAll({
                attributes: ['title', 'score'],
                order: [
                    ['score'],
                ],
            }).then(rsu => {
                res.json({
                    alll: rsu
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
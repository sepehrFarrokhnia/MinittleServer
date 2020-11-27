const model = require("../../Models");

module.exports = {
    showAll(req, res) {
        model.qwe
            .findAll({
                order: [
                    ['score', 'DESC'],
                ],
            }).then(rsu => {
                res.json({
                    status: 200,
                    all: rsu.reverse()
                
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
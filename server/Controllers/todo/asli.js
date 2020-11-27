const model = require("../../Models");

module.exports = {
    showAll(req, res) {
        model.qwe
            .findAll({
                attributes: ['title', 'score'],
                order: [
                    ['score', 'DESC'],
                ],
            }).then(rsu => {
                var a = "";
                var i = 0;
                rsu.forEach(e => {
                    if (i > 10) {
                        break;
                    }
                    i++;
                    a += rsu.title + "/" + rsu.score + "-";
                });
                res.status(200).send(a);
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
                    status: 200
                });
            })
    }
}
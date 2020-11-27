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
                for (var i = 0; i < 4; i++) {
                    if(i==9){
                        rsu[i].title + "@" + rsu[i];
                    }else{
                        a += rsu[i].title + "@" + rsu[i].score + "-";
                    }
                }
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
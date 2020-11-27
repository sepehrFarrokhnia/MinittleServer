const { mode } = require("crypto-js");
const model = require("../../Models");

scoresaz = (a) =>{

}

module.exports = {
    showAll(req, res) {

        model.qwe
            .findAll({
                attributes: ['title', 'score'],
                order: [
                    ['score', 'DESC']
                ],
            }).then(rsu => {
                var a = "";
                var j =0 ;
                for (var i = 0; i < 9+j; i++) {
                    if(rsu[i].title == null){
                        j++;
                        continue;
                    }
                    if (i == 9+j) {
                        a += rsu[i].title + "@" + rsu[i].score;
                    } else {
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
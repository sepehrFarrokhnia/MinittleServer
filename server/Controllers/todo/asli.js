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
                    if (i == 8+j) {
                        a += rsu[i].title + "@" + rsu[i].score;
                    } else {
                        a += rsu[i].title + "@" + rsu[i].score + "-";
                    }
                }
                res.status(200).send(a);
            })
    },

    addd(req, res) {
        const { k, b } = req.query;
        console.log(`k = ${k},b = ${b}`);
        console.log(`request b = ${req.b}`);
        console.log(`request body = ${req.bbody}`);
        model.qwe
            .create({
                title: k,
                score: parseInt(b)
            }).then(rsu => {
                res.json({
                    status: 200
                });
            })
    }

}
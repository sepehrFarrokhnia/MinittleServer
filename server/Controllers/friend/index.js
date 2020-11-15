const rq = require('../../Logic/Users/friendRequest');

module.exports = {
    //sending friend request
    sendingRequest(req, res) {
        const { id, friendid } = req.body;
        rq.sendingRequest(res, id, friendid);
    },
    acceptingRequest(req, res) {
        const { id, friendid } = req.body;
        rq.acceptingRequest(res, id, friendid);
    }
    //sending gamming request
}
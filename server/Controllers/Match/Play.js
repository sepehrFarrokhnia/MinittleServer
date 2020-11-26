const lobbyFunc = require('../../Logic/Lobby');
const gameFunc = require('../../Logic/Game/model');
const webSocket = require('websocket').server;

module.exports = {
    findingAMatch(req, res) {
        const user = req.user;
        var result = lobbyFunc.findingAMarch(user);
        if (result === "0") {
            res.status(200).json({ status: 200, resualt: "wait" });
        } else {
            
        }
    }
}

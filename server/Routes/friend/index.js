const friend = require('../../Controllers/friend');
const security = require("../../Security/Authenticate");


module.exports = (app) => {
    app.post('/user/friendRequest',security.isAuthenticated,friend.sendingRequest);
    app.put('/user/friendRequest',security.isAuthenticated,friend.acceptingRequest);
    app.delete();
}
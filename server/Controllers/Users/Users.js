
const Users = require('../../Models').Users;
module.exports = {
    allUsers(req, res) {
       Users
       .findAll()
       .then(rsu => {
           res.status(200).json(rsu);
       }).catch(err =>{
           res.status(404).send("noting found");
       })
    }
}
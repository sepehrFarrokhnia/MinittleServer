const all = require('../Controllers/todo/asli');
const security = require('../Security/Authenticate');
module.exports = (app) => {
    
   app.get('/allspace', security.isAuthenticated ,all.showAll ),
   app.post('/allspace' , security.isAuthenticated, all.addd)
}
const all = require('../Controllers/todo/asli');
const security = require('../Security/Authenticate');
module.exports = (app) => {
    
   app.get('/allspace' ,all.showAll ),
   app.post('/allspace', all.addd)
}
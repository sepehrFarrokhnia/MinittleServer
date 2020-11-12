const users = require('../../server/Models/index').Users;

users.create({
    name: 'admin',
    username: 'admin',
    password: 'admin',
    Role:'admin'
}).then(res => console.log(res));
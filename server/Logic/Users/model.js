var users = require('./users.json'); 

const addUSer = (user) => {
    i = users.length - 1;
    users[i] = {
        name: user.name,
        username: user.username,
        level: user.level,
        score: user.level * user.wins / user.loses,
        gameStatus: [false],
        lobbyStaus: [false],
        online: false,
        role: 'user'
    };
}

const findUser = (username) => {
    let i = 0;
    while (i < users.length) {

        if (users[i].username == username) {
            return users[i];
        }
    }
    return false;
}

const setOnline = (username) => {
    let i = 0;
    let flag = true;
    while (i < users.length) {

        if (users[i].username == username) {
            users[i].online = true;
            flag = false;
        }
    }
    if (flag) {
        return false;
    } else {
        return true;
    }
}

const setOffline = (username) => {
    let i = 0;
    let flag = true;
    while (i < users.length) {

        if (users[i].username == username) {
            users[i].online = false;
            flag = false;
        }
    }
    if (flag) {
        return false;
    } else {
        return true;
    }
}

module.exports = {
    addUSer,
    findUser,
    setOnline,
    setOffline
}
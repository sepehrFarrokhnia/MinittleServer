
//FUNCTIONS TO WORK WITH
addingToLobby = (lobby, user) => {
    let score = (user.level * user.wins) / (user.loses + 1);
    lobby.push({ userId: user.id, score: score });
    sortTheNewItem(lobby);
    return "1";
};

const findingAMarch = (lobby, user) => {
    var opi_s = 6;
    var opi = null;
    let score = (user.level * user.wins) / (user.loses + 1);
    for (let i = 0; i < lobby.length; i++) {
        if (opi_s >= Math.sign(lobby[i].score - score)) {
            opi_s = Math.sign(lobby[i].score - score);
            opi = lobby[i];
        }
    }

    if (opi != null) {
        addingToLobby(lobby, user);
        return "0";
    } else {
        return opi;
    }

};

searchingTheLobby = (lobby, user) => {
    return lobby.indexOf(user);
};

howManyOnline = (user) => {
    return lobby.length;
};

deletingFromLobby = (lobby, user) => {
    for (int = lobby.indexOf(user); i < lobby.length - 1; i++) {
        let a = lobby[i];
        lobby[i] = lobby[i + 1];
        lobby[i + 1] = a;
    }
    lobby.pop();
};

sortTheNewItem = (lobby) => {
    let j = lobby.length - 1;
    for (var i = lobby.length - 2; i >= 0; i--) {
        if (lobby[i].score > lobby[j].score) {
            let user = lobby[i];
            lobby[i] = lobby[j];
            lobby[j] = user;
            j = i;
        } else {
            break;
        }
    }
}

module.exports = {
    findingAMarch,

}

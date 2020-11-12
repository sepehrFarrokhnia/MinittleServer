var lobby = new Array();


//FUNCTIONS TO WORK WITH
const allUsers = ()  =>{
    return lobby;
}

addingToLobby = (user) => {
    let score = (user.rank * user.wins) / (user.loses + 1);
    lobby.set({ userId: user.id, score: score });
    sortTheNewItem();
    return "adding to lobby";
};

 const findingAMarch = (user) => {
    var opi_s = 6;
    var opi = null;
    lobby.forEach(u => {
        if (opi_s >= Math.sign(u.score - user.score)) {
            opi_s = Math.sign(u.score - user.score);
            opi = u;
        }
    });

    if (opi != null) {
        addingToLobby(user);
        return "adding to lobby";
    } else {
        return opi;
    }

};

searchingTheLobby = (user) => {
    return lobby.indexOf(user);
};

howManyOnline = (user) => {
    return lobby.length();
};

deletingFromLobby = (user) => {
    for (int = lobby.indexOf(user); i < lobby.length - 1; i++) {
        let a = lobby[i];
        lobby[i] = lobby[i + 1];
        lobby[i + 1] = a;
    }
    lobby.pop();
};

sortTheNewItem = () => {
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
    allUsers
}

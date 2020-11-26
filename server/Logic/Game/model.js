
const startAGame = (array, userA, userB) => {
    const gameId = userA.id + "-" + userB.id + "-" + array.length - 1;
    array.push({
        userA: {
            id: userA.id,
            infR: null,
            infS: null
        },
        userB: {
            id: userB.id,
            infR: null,
            infS: null
        },
        gameId: gameId,
        map: null,
        isActive: false,
        winner: null,
    });
    return true;
}

const findAGame = (array, gameId) => {
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i].gameId == gameId) {
            return array[i];
        }
    }
    return "0";
}

const sendInformation = (array, gameId, userId) => {
    game = findAGame(array, gameId);
    if (game == "0") {
        return "0";
    } else {
        return (game.userA.id == userId) ? userA.infS : userB.infS;
    }
}

const reciveInformation = (array, gameId, userId, recInfo) => {
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i].gameId == gameId) {
            if (array[i].userA.id == userId) {
                array[i].userA.infR = recInfo;
                var info = recInfo.split("-");
                if (info[0] == "map") {
                    setMap(array, gameId, info[1], 9, 9);
                }

            } else {
                return "0";
            }
        }
    }
 
}

const howManyGame = (array) => {

}

const setMap = (array, gameId, map, x, y) => {
    game = findAGame(array, gameId);
    if (game == "0") {
        return "0";
    } else {
        var dMap = [];
        for (let i = 0; i < x; i++) {
            dMap.push([]);
            for (let j = 0; j < y; j++) {
                dMap[i].push([]);
                dMap[i][j] = map[x][y];
                for (let k = 0; k < 2; k++) {
                    dMap[i][j].push([]);
                }
                if (dMap[i][j] == "R") {
                    dMap[i][j][0] == "200";
                    dMap[i][j][1] == "0";
                } else if (dMap[i][j] == "T") {
                    dMap[i][j][0] == "50";
                    dMap[i][j][1] == "0";
                } else if (dMap[i][j] == "pT") {
                    dMap[i][j][0] == "300";
                    dMap[i][j][1] == "1";
                } else if (dMap[i][j] == "eT") {
                    dMap[i][j][0] == "300";
                    dMap[i][j][1] == "0";
                } else {
                    dMap[i][j][0] == "0";
                    dMap[i][j][1] == "0";
                }
            }
        }
        return dMap;
    }
}

module.exports = {
    startAGame,
    findAGame,
}

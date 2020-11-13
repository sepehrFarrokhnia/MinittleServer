const { request } = require('express');

const Users = require('../../Models/index').Users;

const sendingRequest = (id, friendId) => {
    Users
        .findOne({
            where: {
                id: id
            }
        }).then(fUser => {
            // first user founded
            Users
                .findOne({
                    where: {
                        id: friendId
                    }
                }).then(sUser => {
                    //second user founded
                    if (sUser.friendRequests.CharAt(sUser.friendRequests.length - 1) != "-") {
                        sUser.friendRequests += "-" + fUser.username + "/" + fUser.id + "-";
                    } else {
                        sUser.friendRequests += fUser.username + "/" + fUser.id + "-";
                    }
                    res.status(200).json({ status: 200 });
                }).catch(err => {
                    //second user not found
                    res.status(400).json({ status: 400, error: err });
                })

        }).catch(err => {
            //first user did not found
            res.status(400).json({ status: 400, error: err });
        });
}

const acceptingRequest = (id, friendId) => {
    Users
        .findOne({
            where: {
                id: id
            }
        }).then(fUser => {
            // first user founded
            Users
                .findOne({
                    where: {
                        id: friendId
                    }
                }).then(sUser => {
                    //second user founded
                    if (sUser.friendList.CharAt(sUser.friendList.length - 1) != "-") {
                        sUser.friendList += "-" + fUser.username + "/" + fUser.id + "-";
                    } else {
                        sUser.friendList += fUser.username + "/" + fUser.id + "-";
                    }
                    if (fUser.friendList.CharAt(fUser.friendList.length - 1) != "-") {
                        fUser.friendList += "-" + sUser.username + "/" + sUser.id + "-";
                    } else {
                        fUser.friendList += sUser.username + "/" + sUser.id + "-";
                    }
                    res.status(200).json({ status: 200 });
                }).catch(err => {
                    //second user not found
                    res.status(400).json({ status: 400, error: err });
                })

        }).catch(err => {
            //first user did not found
            res.status(400).json({ status: 400, error: err });
        });
}

module.exports = {
    sendingRequest,
    acceptingRequest
}

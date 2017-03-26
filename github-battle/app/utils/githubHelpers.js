const axios = require('axios')

const id = 'YOUR_CLIENT_ID'
const sec = 'YOU_SECRET_ID'
const param = '?client_id=' + id + '&client_secret=' + sec

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param) //* гет запрос к url at github.com и возвращает массив промисов*/
}
function getRepos(username) {
    // fetch usernames repos
    return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}
function getTotalStars(repos) {
    // calc all stars in all repos
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count
    }, 0)
}
function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function(totalStars) {
            return {
                followers: player.followers,
                totalStars: totalStars,
            }
        })
}
function calculateScores(players) {
    // return scores after determine a winner
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars,
    ]
}
const helpers = {
    getPlayersInfo: function(players) {
    // resolving an array of promises
        return axios.all(
            players.map(function(username) {  // loop over every username of our players array
                return getUserInfo(username)
                    })).then(function (info) {  // когда функция resolves - обрабатывается инфа из профиля юзера
                return info.map(function (user) { // проходит по всем данынм пользователя и возвращает массив .data которая отправляется в ConfirmBattleContainer
                    return user.data               //   и там invoke getPlayersInfo
                })
            }).catch(function (err) { // в случае любой ошибки в промисах
                console.log('Error in getPlayersInfo', err)
            })
    },
    battle: function (players) {
        const playerOneData = getPlayersData(players[0])
        const playerTwoData = getPlayersData(players[1])

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function (err) {
                console.log('Error in getPlayersData:', err);
            })
    }
}
module.exports = helpers

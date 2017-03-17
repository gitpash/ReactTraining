const axios = require('axios');

const id = 'YOUR_CLIENT_ID'
const sec = 'YOU_SECRET_ID'
const param = '?client_id=' + id + '&client_secret=' + sec

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param) //* гет запрос к url at github.com и возвращает массив промисов*/
}
const helpers = {
  getPlayersInfo: function (players) {
    // resolving an array of promises
    return axios.all(
      players.map(function (username) {  // loop over every username of our players array
      return getUserInfo(username)
    })).then(function (info) {  // когда функция resolves - обрабатывается инфа из профиля юзера
        return info.map(function (user) { // проходит по всем данынм пользователя и возвращает массив .data которая отправляется в ConfirmBattleContainer
          return user.data               //   и там invoke getPlayersInfo
        })
    }).catch(function (err) { // в случае любой ошибки в промисах
      console.log('Error in getPlayersInfo', err);
    })
  }
}
module.exports = helpers

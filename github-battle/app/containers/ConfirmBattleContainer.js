const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');
const githubHelpers = require('../utils/githubHelpers');

const ConfirmBattleContainer =  React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount() {
    console.log('componentWillMount');
  },
  componentDidMount() {
    console.log('componentDidMount');
    const query = this.props.location.query
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    // возврящает промис и после его выполнения(resolve) возвращается его значение(data)
      .then(function (players) {
        this.setState({ // изменяем состояние загрузки на ложное и добавляем пользователей
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this)) // это для переопределения this внутри функции
  },
  handleInitiateBattle() {
    this.content.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo // это пушит все данные пользователя в route /results
      }
    })
  },
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount() {
    console.log('componentWillUnmount');
  },
  render() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo}
      onInitiateBattle={this.handleInitiateBattle} />
    );
  }

});

module.exports = ConfirmBattleContainer

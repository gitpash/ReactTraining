const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');
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
    // fetch info from GitHub then update the state
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
      playersInfo={this.state.playersInfo} />
    );
  }

});

module.exports = ConfirmBattleContainer

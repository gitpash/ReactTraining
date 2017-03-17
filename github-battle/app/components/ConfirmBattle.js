const React = require('react');
const PropTypes = React.PropTypes

function puke (obj) {
   return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> loading... </p>
    : <div> Confirm Battle!: {puke(props)} </div>
};

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}
module.exports = ConfirmBattle

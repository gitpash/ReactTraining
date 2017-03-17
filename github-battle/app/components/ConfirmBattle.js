const React = require('react');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> loading... </p>
    : <p> Confirm Battle! </p>
};
module.exports = ConfirmBattle

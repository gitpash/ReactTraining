const React = require('react')
const ReactRouter = require('react-router')
const MainContainer = require('./MainContainer')

const Link = ReactRouter.Link
const Home = React.createClass({
    render: function() {
        return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="Lead">Some dfssdf</p>
          <Link to="/playerOne">
            <button className="btn btn-lg btn-success">Start Game</button>
          </Link>
      </MainContainer>
        )
    },
})
module.exports = Home

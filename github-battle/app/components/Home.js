const React = require('react')
const transparentBg = require('../styles').transparentBg
const ReactRouter = require('react-router')
const Link = ReactRouter.Link
const Home =  React.createClass({
  render: function () {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Github Battle</h1>
        <p className='Lead'>Some dfssdf</p>
          <Link to='/playerOne'>
            <button className='btn btn-lg btn-success'>Start Game</button>
          </Link>
      </div>
    )
  }
})
module.exports = Home

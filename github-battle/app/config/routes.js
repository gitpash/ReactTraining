let React = require('react')
let ReactRouter = require('react-router')
let Router = ReactRouter.Router
let Route = ReactRouter.Route
let IndexRoute = ReactRouter.IndexRoute
let hashHistory = ReactRouter.hashHistory
let Main = require('../components/Main')
let Home = require('../components/Home')

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
       <IndexRoute component={Home} />
    </Route>
  </Router>
)

module.exports = routes;

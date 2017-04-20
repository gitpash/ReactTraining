import React from "react";
import Popular from "./popular";
import { ReactRouter, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route path='/popular' component={Popular} />
        </div> 
        </Router>
    );
  }
}

export default App;

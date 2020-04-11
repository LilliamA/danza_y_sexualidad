import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/about" render={ ()=> <Home></Home>}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App

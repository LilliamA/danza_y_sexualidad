import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Home from './Home'
import configureStore from '../configureStore'



import HelloWorld from './HelloWorld'

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/about" render={ ()=> <Home></Home>}/>
            <Route exact path="/hello" render={ ()=> <HelloWorld greeting="Friend"></HelloWorld>}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App

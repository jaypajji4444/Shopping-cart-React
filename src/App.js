import React, { Component } from 'react'
import {  Route, Switch } from "react-router-dom"
import Navi from './component/Navi' 
import Home from "./container/Home"


export default class App extends Component {
  render() {
    return (

        <div>
        <Navi />
      
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        </div>
     

    )
  }
}

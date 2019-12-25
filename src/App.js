import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Navi from './component/Navi'
import Home from "./container/Home/Home"
import Cart from "./container/cart/Cart"
import "./App.css"


export default class App extends Component {
  render() {
    return (
      
      <div id="outer">
      <Navi />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      </Switch>
      </div>
      )
    }
  }
  
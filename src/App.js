import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import GetToken from './container/GetToken'
import ArtistBrowser from './container/ArtistBrowser'
export default class App extends Component {
  render() {
    return (
      <Router>  
        <Route path="/" exact component={GetToken} />
        <Route path="/search" exact component={ArtistBrowser} />
      </Router>
    )
  }
}

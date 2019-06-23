import React, { Component } from 'react'
import LoginPage from '../components/LoginPage'
export default class GetToken extends Component {
componentDidMount() {
  window.location.assign(
    encodeURI('https://accounts.spotify.com/authorize?client_id=a38a57c8f7db4f4bbe3d5e8482b85ab1&response_type=token&redirect_uri=http://localhost:3000/search')
    )
}

  render() {
    return (
      <div>
        <LoginPage/>        
      </div>
    )
  }
}

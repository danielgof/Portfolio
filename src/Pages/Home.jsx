import React, { Component } from 'react'
import back from './logo/b.png'
import './home.css'

const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${back})`,
  backgroundSize: 'cover'  
};

export default class Home extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h3 align="center">Welcome to my page !</h3>
        <p class="home"> My name is Daniil Gofman</p>
        <p class="home"> I'm a Software Engineer</p>
      </div>
    )
  }
}

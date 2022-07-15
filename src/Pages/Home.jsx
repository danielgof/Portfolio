import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import back from './logo/b.png'
import './home.css'
import photo from './bio.png'

const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${back})`,
  backgroundSize: 'cover'  
};

export default class Home extends Component {
  render() {
    return (
      <div className="home" style={divStyle}>
        <h3 align="center">Welcome to my page !</h3>
        <img className="bio" src={photo} alt="Logo" />
        <p class="home"> My name is Daniil Gofman</p>
        <p class="home"> I'm a Software Engineer</p>
        <h3 align="center">Education</h3>
        <Card>
            <Card.Body>
              <p class="text-start"> Computer Science	2019 — Present (3rd year)</p>
              <p class="text-start"> National Research Nuclear University MEPHI</p>
              <p class="text-center"> Key Courses: Data Structures and Algorithms, Languages of Programming, Object-Oriented Programming, Databases, Mathematical Statistics, Linear Algebra & Multivariable Equations, Integrals & Differential Equations, Design of Information Systems, GPA(86,625/100)</p>
            </Card.Body>
        </Card>
      </div>
    )
  }
}

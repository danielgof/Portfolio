import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import back from './logo/b.png'

const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${back})`,
  backgroundSize: 'cover'  
};


export default class Education extends Component {
  render() {
    return (
      <div style={divStyle}>
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

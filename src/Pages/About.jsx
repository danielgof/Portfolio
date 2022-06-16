import React, { Component } from 'react'
import { Nav, Container, Row, Col, Card, Tab } from 'react-bootstrap'

import RC from './logo/RC.png'
import DC from './logo/DC.png'
import PP from './logo/PP.png'
import back from './logo/b.png'

const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${back})`,
  backgroundSize: 'cover'  
};


export default class About extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1 align="center">My Projects</h1>
        <Container>
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Cafe Software</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">ReestrConnect</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Project "Procurements"</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                            <h2>Software for managing a chain restaurant (February 2021 – now, Moscow). </h2>
                                <img src={DC} alt="DC"/>
                                <Card>
                                    <Card.Body>
                                        <p class="text-center">The software`s main features are:
                                        pre-orders (technology stack used: Apache Kafka, PostgerSQL for client’s database, MongoDB for preorder’s database, Spring Boot for backend, React JS for frontend),
                                        analytics of clients’ behavior (technology stack used: PostgerSQL, Python(Flask), Scikit-Learn, SciPy, ReactJS),
                                        user area including history of orders, preferred choices, recommendations based on AI (technology stack used: Apache Kafka, PostgerSQL for client’s database, MongoDB for preorder’s database, Spring Boot for backend, React JS for frontend);
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                            <h2> ReestrConnect </h2>
                                <img src={RC} alt="RC"/>
                                <Card>
                                    <Card.Body>
                                        <p class="text-center">
                                        Desktop application for forming and exchanging of data via HTTP (Fall 2021, Moscow);
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <h2>Project 'Procurements'</h2>
                                <img src={PP} alt="Project 'Procurements'"/>
                                <Card>
                                    <Card.Body>
                                        <p class="text-center">
                                        A software for monitoring of financial data dealing with procurements (technology stack used: Python, Ruby on Rails).
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
      </div>
    )
  }
}

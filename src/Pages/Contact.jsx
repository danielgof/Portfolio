import React, { Component } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import YouTube from './logo/YouTube.png'
import GitHub from './logo/GitHub.png'
import LinkedIn from './logo/538.png'




export default class Contact extends Component {
  render() {
    return (
        <Container>
            <h1 align="center">Contact Me</h1>
            {/* <div class="embed-responsive embed-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_jjpFZpkcqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
            <Row>
                <Col md={9}>
                    <Card>
                        <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src={LinkedIn}
                        />
                        <Card.Body>
                            <p class="text-center">There you can find link to my LinkedIn profile</p>
                            <a href="https://www.linkedin.com/in/daniil-gofman-647768191/" class="link-primary">linkedin</a>
                        </Card.Body>
                    </Card>
                    <Card>
                        <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src={YouTube}
                        />
                        <Card.Body>
                            <p class="text-center">There you can find link to my YouTube channel</p>
                            <a href="https://www.youtube.com/channel/UCRuNMIxgiVB6gHW4j-QV0QQ" class="link-danger">YouTube</a>
                        </Card.Body>
                    </Card>
                    <Card>
                        <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src={GitHub}
                        />
                        <Card.Body>
                            <p class="text-center">There you can find link to my GitHub profile</p>
                            <a href="https://github.com/danielgof" class="link-dark">GitHub</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
  }
}

import React from 'react'
import {Row, Col,Card,Button,Container} from "react-bootstrap"
import img1 from "./img-1.jpg"
import img2 from "./img-2.jpg"
import img3 from "./img-3.jpg"


import './Buy.css'
import { Link } from "react-router-dom";
const Buy = () => {
    return (
        <div className="main">
          <br></br>
          <br></br>
          <br></br>
      <Container className="btn" fluid>
        <Row>
          <Col>
            <Card className="main-btn-grid">
              <Card.Img variant="top" src={img1}/>
              <Card.Body>
                <Card.Title><b>BLINDING LIGHTS</b></Card.Title>
                <Card.Text>
                <h5>Date:20-December-2022</h5>
                  <h5>Venue: Chennai</h5>
                </Card.Text>
                <Button variant="primary" size="lg">
                      <Link to={"/buyform"} className="btn-btn-form">
                        PROCEED
                      </Link>
                    </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="main-btn-grid"  >
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title><b>MOVIE BASH</b></Card.Title>
                <Card.Text>
                  <h5>Date: 05-September-2022</h5>
                  <h5>Venue: Mumbai</h5>
                </Card.Text>
                <Button variant="primary" size="lg">
                      <Link to={"/buyform"} className="btn-btn-form">
                        PROCEED
                      </Link>
                    </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="main-btn-grid">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title><b>HACK REX 3.0</b></Card.Title>
                <Card.Text>
                <h5>Date: 09-November-2022</h5>
                  <h5>Venue: Jaipur</h5>
                </Card.Text>
                <Button variant="primary" size="lg">
                      <Link to={"/buyform"} className="btn-btn-form">
                        PROCEED
                      </Link>
                    </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>

      </div>
    )
}

export default Buy;

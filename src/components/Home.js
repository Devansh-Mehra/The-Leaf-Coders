import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./Home.css";
import image from "./image-1.jpg.jpg";
import { Link,Routes,Route } from "react-router-dom";
import Register from './Register'
import Buy from './Buy'
const Home = () =>{
    return (
        <div>
        <div className="hero-container">
        <Container fluid className="main-container">
          <Row>
            <Col style={{ display: "flex", justifyContent: "left" }}>
              <div className="main-heading">
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className="btn--button">
                  <div className="mb-2">
                    <Button variant="primary" size="lg">
                      <Link to="buy" className="btn-but-ticket">
                        BUY TICKET
                      </Link>
                    </Button>
                    <Button variant="secondary" size="lg">
                      <Link to="sell" className="btn-but-ticket">
                        SELL TICKET
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="btn--image">
              <img src={image} className="home-image"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Routes>
               
               
                <Route  exact path ="/sell" element={<Register />} />
                <Route  exact path ="/buy" element={<Buy/>} />
                
            </Routes> */}
      </div>
    )
}

export default Home;
import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img_1 from "./about-img.png";
import "./About.css";
const About = () => {
    return (
        <div className="btn--main">
        <Container fluid className="container-btn-main-bg">
          <Row>
            <Col md={7} className="main--heading">
              <h1 className="About">About Us</h1>
              <p className="Body">
                We are a team of four members from SRM Institute of Science
                and Technology, we all are creative people working in our
                respective fields and trying to bring out the best possible
                solutions for the world. In this project, we have created a
                website that allows the resale of any event ticket by
                converting them to NFTs which will ensure that the seller who
                is in a dread emergency to sell the ticket as he is unable to
                attend the event and also the buyers who were unable to buy
                the tickets from the respective event website but want to
                visit the event. We at DLeaf try to make this possible for all
                users. There is also an option to host an event whose all the
                tickets will be provided in the form of NFT.
              </p>
            </Col>

            <Col md={5}>
              <div className="btn123">
                <img src={img_1} width="500px" />
              </div>
            </Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Row>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </div>
    )
}

export default About;

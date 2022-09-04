import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Routes,Route,Link} from 'react-router-dom';


const NavBar = (props) =>{

    return (
        <div>
            {props.loggedIn?
            (<Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">D-Leaf</Navbar.Brand>
            <Nav className="ml-auto">
            <Link to="/profile" className="nav-link">Profle</Link>
            </Nav>
            </Container>
            </Navbar> )
            :(<Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">D-Leaf</Navbar.Brand>
                <Nav className="ml-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About Us</Link>
                <Link to="/buy" className="nav-link">Buy</Link>
                <Link to="/sell" className="nav-link">Sell</Link>
                <Link to="/faq" className="nav-link">FAQ</Link>
                
                
                </Nav>
                </Container>
            </Navbar>)}
                
            {/* <Routes>
                <Route  exact path ="/" element={<Home />} />
                <Route  exact path ="/login" element={<Login loginHandler={props.loginHandler}/>} />
                <Route  exact path ="/register" element={<Register />} />
                <Route  exact path ="/profile" element={<Profile/>} />
                <Route  exact path ="/about" element={<About/>} />
            </Routes> */}

        </div>
    )
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
//bootstrap components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/">
                    <Navbar.Brand>Gal-Anonim</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/login">
                        <Button variant="outline-light">Login</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
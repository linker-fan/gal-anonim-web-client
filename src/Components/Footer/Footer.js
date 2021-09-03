import React from 'react';
import "./footer.css";
//bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return (
        <div id="footer">
            <Container className="pt-5">
                <Row>
                    <Col>
                        <h4>Footer</h4>
                    </Col>
                </Row>
                <Row>
                    <div className="text-center p-4">
                        © 2021 Copyright:
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
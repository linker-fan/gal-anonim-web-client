import React, { useState } from 'react';

//bootstrap components
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState();

    return (
        <Container>
            <h1>Login Page</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username"/>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default Login;
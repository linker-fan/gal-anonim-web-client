import React, { useState } from 'react';

//bootstrap components
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const payload = {
            "username": username,
            "password": password
        }

        console.log(payload);
    };

    return (
        <Container>
            <h1>Login Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" required onChange={ e => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onChange={ e => setPassword(e.target.value) }/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep me logged in"  onChange={ e => setChecked(e.target.value)}/>
                </Form.Group>

                <Button type="submit">
                    Sign in
                </Button>
            </Form>
        </Container>
    );
}

export default Login;
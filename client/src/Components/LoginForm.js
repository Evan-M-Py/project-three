import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Brand from "../Components/Brand";
import Container from "react-bootstrap/Container";
import axios from 'axios';


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.state.username = e.target.username.value
        this.state.password = e.target.password.value
        const username = this.state.username;
        const password = this.state.password;
        axios.post('/login', {username, password}).then(response => {
            console.log(response);
            let loggedInUser = response.data.username;
            // this.props.history.push('/dashboard');
        })
        
        // fetch('/', {
        //         method: 'POST',
        //         username: user,
        //         password: pass,
        //         headers: { 'Content-Type': 'application/json' }
        //     }).then(response => {
        //         this.props.history.push('/dashboard')
        //     })
        
    }
    render() {
        return (
            <div className="login">
                <Container className="login d-flex align-items-center w-100">
                    <Row className="justify-content-center w-100">
                        <Jumbotron className="col-8">
                            <Brand />
                            <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="username">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="username"
                                                placeholder="Enter your username"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter your password"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Button
                                        className="landing-btn col-4 mt-3"
                                        variant="primary"
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                </Row>
                                <Row className="justify-content-center">
                                    <a className="mt-3 teal" href="/signup">
                                        Not a member yet? Sign up here
                                    </a>
                                </Row>
                            </Form>
                        </Jumbotron>
                    </Row>
                </Container>
            </div>
        );
    }

};

export default LoginPage;

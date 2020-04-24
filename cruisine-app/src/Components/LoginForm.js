import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Brand from "../Components/Brand";
import Container from "react-bootstrap/Container";
const LoginForm = props => {
    return (
        <Container className="login d-flex align-items-center w-100">
            <Row className="justify-content-center w-100">
                <Jumbotron className="col-8">
                    <Brand />
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicFirstName">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your username"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
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
                            <a class="mt-3 teal" href="#">Not a member yet? Sign up here</a>
                        </Row>
                    </Form>
                </Jumbotron>
            </Row>
        </Container>
    )
}

export default LoginForm;
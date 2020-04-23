import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Brand from "../Components/Brand";
import Container from "react-bootstrap/Container";

const SignupForm = (props) => {
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
                                        placeholder="Username"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicTruckName">
                                    <Form.Label>
                                        What is your Truck's name?
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Truck name"
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
                                Submit
                            </Button>
                        </Row>
                    </Form>
                </Jumbotron>
            </Row>
        </Container>
    );
};

export default SignupForm;

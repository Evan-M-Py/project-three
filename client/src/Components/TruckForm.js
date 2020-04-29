import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Brand from "./Brand";
import Container from "react-bootstrap/Container";

class TruckForm extends Component {
    render() {
        return (
            <div className="login">
                <Container className="login d-flex align-items-center w-100">
                    <Row className="justify-content-center w-100">
                        <Jumbotron className="col-8">
                            <Brand />
                            <Form>
                                <Row className="justify-content-center">
                                    <Col className="col-6">
                                        <Form.Group>
                                            <Form.Label htmlFor="truckName">
                                                What is your Truck's name?
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Truck name"
                                                name="truckName"
                                                formNoValidate
                                                // onChange={this.handleChange}
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
            </div>
        );
    }   
}

export default TruckForm
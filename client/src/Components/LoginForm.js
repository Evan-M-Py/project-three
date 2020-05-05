import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Brand from "../Components/Brand";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import { Redirect } from 'react-router-dom'




class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loginStatus: false
        };
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        this.state.username = e.target.username.value
        this.state.password = e.target.password.value
        const username = this.state.username;
        const password = this.state.password;
        axios.post('/login', {username, password}).then(response => {
            console.log(response.data)
            this.setState({ loginStatus: true});
        });
    }
    render() {
        if(this.state.loginStatus){
            return <Redirect to='/dashboard'  />
        } else
        return (
            <div  className="login">
                    
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
                                    {/* <Link to='/dashboard'> */}
                                        <Button
                                            className="landing-btn col-4 mt-3"
                                            variant="primary"
                                            type="submit"
                                        >
                                            Login
                                        </Button>
                                    {/* </Link> */}
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

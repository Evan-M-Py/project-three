// import React, { Component, useState } from "react";
// import axios from 'axios';
// import { Redirect } from 'react-router-dom';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Brand from "./Brand";
// import Container from "react-bootstrap/Container";

// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const formValid = ({...formErrors}, rest) => {
//     let valid = true;
//     Object.values(formErrors).forEach((val) => {
//         val.length > 0 && (valid = false);
//     });
//     // Object.values(rest).forEach(val => {
//     //     val === null && (valid = false);
//     // });
//     return valid;
// };

//     const SignupPage = (props) => {

//     const [ firstName, setFirstName ] = useState('');
//     const [ lastName, setlastName ] = useState('');
//     const [ email, setEmail ] = useState('');
//     const [ phoneNumber, setPhoneNumber ] = useState('');
//     const [ username, setUserName ] = useState('');
//     const [ password, setPassword ] = useState('');
//     const [ truckName, setTruckName ] = useState('');
//     const [ formErrors, setFormErrors ] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//         username: "",
//         password: "",
//         truckName: "",
//     });
//     const [ loginStatus, setLoginStatus ] = useState(false);


//    const handleSubmit = (e) => {
//         e.preventDefault();
//         // Possible change: send data from state, not from the DOM form element
//         if (formValid(formErrors)) {
//             const data = { 
//                 firstName: firstName,
//                 lastName: lastName,
//                 email: email,
//                 phoneNumber: phoneNumber,
//                 username: username,
//                 password: password,
//                 truckName: truckName
//             };
            

//             axios.post('/api/createuser', data).then(rest => {
//                 this.props.handleChange(rest.data.user.id);
//                 this.setState({ loginStatus: true });
//             });


//         } else {
//             console.log("form is not valid");
//         }
//     };

//   const  handleChange = (e) => {
//         e.preventDefault();
//         const { name, value } = e.target;
//         switch (name) {
//             case "firstName":
//                 formErrors.firstName =
//                     value.length < 2
//                         ? "minimum 2 characters required"
//                         : "";
//                 break;
//             case "lastName":
//                 formErrors.lastName =
//                     value.length < 3
//                         ? "minimum 3 characters required"
//                         : "";
//                 break;
//             case "email":
//                 formErrors.email =
//                     emailRegex.test(value)
//                         ? ""
//                         : "invalid email address";
//                 break;
//             case "phoneNumber":
//                 formErrors.phoneNumber =
//                     value.length < 10
//                         ? "phone number must be exactly 10 numbers"
//                         : "";
//                 break;
//             case "username":
//                 formErrors.username =
//                     value.length < 5
//                         ? "minimum 5 characters required"
//                         : "";
//                 break;
//             case "password":
//                 formErrors.password =
//                     value.length < 8
//                         ? "minimum 8 characters required"
//                         : "";
//                 break;
//             case "truckName":
//                 formErrors.truckName =
//                     value.length < 5
//                         ? "minimum 5 characters required"
//                         : "";
//                 break;
//             default:
//                 break;
//         }
//         setFormErrors({[name]: value });
//     };

    
//     if (loginStatus) {
//         return <Redirect to="/dashboard" />
//     } else
//     return (
//             <div className="login">
//                 <Container className="login d-flex align-items-center w-100">
//                     <Row className="justify-content-center w-100">
//                         <Jumbotron className="col-8">
//                             <Brand />
//                             <Form onSubmit={(x) => handleSubmit(x)}>
//                                 <Row>
//                                     <Col>
//                                         <Form.Group>
//                                             <Form.Label htmlFor="firstName">
//                                                 First Name
//                                             </Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="Enter your first name"
//                                                 name="firstName"
//                                                 formNoValidate
//                                                 onChange={(x) => handleChange(x)}
//                                             />
//                                             {/* {formErrors.firstName.length >
//                                             0 && (
//                                                 <span className="errorMessage">
//                                                     {formErrors.firstName}
//                                                 </span>
//                                             )} */}
//                                         </Form.Group>
//                                     </Col>
//                                     <Col>
//                                         <Form.Group>
//                                             <Form.Label htmlFor="lastName">
//                                                 Last Name
//                                             </Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="Enter your last name"
//                                                 name="lastName"
//                                                 formNoValidate
//                                                 onChange={(x) => handleChange(x)}
//                                             />
//                                             {/* {formErrors.lastName.length > 0 && (
//                                                 <span className="errorMessage">
//                                                     {formErrors.lastName}
//                                                 </span>
//                                             )} */}
//                                         </Form.Group>
//                                     </Col>
//                                 </Row>
//                                 <Row>
//                                     <Col>
//                                         <Form.Group>
//                                             <Form.Label htmlFor="email">
//                                                 Email
//                                             </Form.Label>
//                                             <Form.Control
//                                                 type="email"
//                                                 placeholder="name@url.com"
//                                                 name="email"
//                                                 formNoValidate
//                                                 onChange={(x) => handleChange(x)}
//                                             />
//                                             {/* {formErrors.email.length > 0 && (
//                                                 <span className="errorMessage">
//                                                     {formErrors.email}
//                                                 </span>
//                                             )} */}
//                                         </Form.Group>
//                                     </Col>
//                                     <Col>
//                                         <Form.Group>
//                                             <Form.Label htmlFor="phoneNumber">
//                                                 Phone Number
//                                             </Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="5555555555 (no dashes)"
//                                                 name="phoneNumber"
//                                                 formNoValidate
//                                                 onChange={(x) => handleChange(x)}
//                                             />
//                                             {/* {formErrors.phoneNumber.length >
//                                                 0 && (
//                                                     <span className="errorMessage">
//                                                         {formErrors.phoneNumber}
//                                                     </span>
//                                                 )} */}
//                                         </Form.Group>
//                                     </Col>
//                                 </Row>
//                                 <Row>
//                                     <Col>
//                                         <Form.Group>
//                                             <Form.Label htmlFor="username">
//                                                 Username
//                                             </Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="Username"
//                                                 name="username"
//                                                 formNoValidate
//                                                 onChange={(x) => handleChange(x)}
//                                             />
//                                             {/* {formErrors.username.length > 0 && (
//                                                 <span className="errorMessage">
//                                                     {formErrors.username}
//                                                 </span>
//                                             )} */}
//                                         </Form.Group>
//                                     </Col>
//                                     <Col>
//                                         <Form.Group>
//                                             <Form.Label htmlFor="password">
//                                                 Password
//                                             </Form.Label>
//                                             <Form.Control
//                                                 type="password"
//                                                 placeholder="Password"
//                                                 name="password"
//                                                 formNoValidate
//                                                 onChange={(x) => handleChange(x)}
//                                             />
//                                             {/* {formErrors.password.length > 0 && (
//                                                 <span className="errorMessage">
//                                                     {formErrors.password}
//                                                 </span>
//                                             )} */}
//                                         </Form.Group>
//                                     </Col>
//                                 </Row>
//                                 <Row className="justify-content-center">
//                                     <Col className="col-6">
//                                         <Form.Group>
//                                             <Form.Label htmlFor="truckName">
//                                                 What is your Truck's name?
//                                             </Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="Truck name"
//                                                 name="truckName"
//                                                 formNoValidate
//                                                 onChange={(x) => handleChange(x)}
//                                              />
//                                              {/* {formErrors.truckName.length > 0 && ( */}
//                                                  {/* <span className="errorMessage">{formErrors.truckName}</span>
//                                              )} */}
//                                         </Form.Group>
//                                     </Col>
//                                 </Row>
//                                 <Row className="justify-content-center">
//                                     <Button
//                                         className="landing-btn col-4 mt-3"
//                                         variant="primary"
//                                         type="submit"
//                                     // userID={this.state.user}
//                                     >
//                                         Submit
//                                     </Button>
//                                 </Row>
//                                 <Row className="justify-content-center">
//                                     <a className="mt-3 teal" href="/">
//                                         Already a member? Sign in here
//                                     </a>
//                                 </Row>
//                             </Form>
//                         </Jumbotron>
//                     </Row>
//                 </Container>
//             </div>
//         );
//     }

// export default SignupPage;



import React, { Component, useState } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Brand from "./Brand";
import Container from "react-bootstrap/Container";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const SignupPage = (props) => {

    const { register, handleSubmit, watch, errors } = useForm();

    const [ loginStatus, setLoginStatus ] = useState(false)

     
   const onSubmit = (data) => {

    axios.post('/api/createuser', data).then((res) => {
        console.log(res)
        console.log('stops here')
        setLoginStatus(true);

    })
        
       
    };


    // if(loginStatus){
    //     return <Redirect to='/dashboard'  />
    // } else

    return (
        
            <div className="login">
                {loginStatus ? <Redirect to='/dashboard'  /> : null }
                <Container className="login d-flex align-items-center w-100">
                    <Row className="justify-content-center w-100">
                        <Jumbotron className="col-8">
                            <Brand />
                            <form >
                                <Row>
                                    <Col>
                                            <label htmlFor='firstName'>first name: </label>
                                            <input type="text" name="firstName" ref={register({required: true, minLength: 2})}/> 
                                    </Col>
                                    <Col>
                                            <label htmlFor='lastName'>last name:</label>
                                            <input type="text" name="lastName" ref={register({required: true, minLength: 2})}/> 
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                            <label htmlFor='email'>email:</label>
                                            <input type="text" name="email" ref={register({required: true, minLength: 5})}/>
                                    </Col>
                                    <Col>
                                            <label htmlFor='phonenumber'>phone number:</label>
                                            <input type="text" name="phoneNumber" ref={register({required: true, minLength:10, maxLength: 10})}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                            <label htmlFor='username'>username:</label>
                                            <input type="text" name="username" ref={register({required: true, minLength:6})}/> 
                                    </Col>
                                    <Col>
                                            <label htmlFor='password'>password:</label>
                                            <input type="text" name="password" ref={register({required: true,minLength: 8})}/> 
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col className="col-6">
                                            <label htmlFor="truckName">truck name:</label>
                                            <input type="text" name="truckName" ref={register({required: true, minLength: 5})}/>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <button onClick={handleSubmit(onSubmit)} type="submit">submit</button>
                                </Row>
                                <Row className="justify-content-center">
                                    <a className="mt-3 teal" href="/">
                                        Already a member? Sign in here
                                    </a>
                                </Row>
                            </form>
                        </Jumbotron>
                    </Row>
                </Container>
            </div>
        );
    }

export default SignupPage;
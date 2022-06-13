import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import './Login.css';

const Login = () => {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
  // After create user navigate to shop or home page
  const navigate = useNavigate();

  // React Router  authentication
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

const handleEmailBlur = event =>{
  setEmail(event.target.value)
}
const handlePasswordBlur = event =>{
  setPassword(event.target.value)
}
  // After LogIn user go to shop page
  // React Router Authentication
  if(user){
    navigate(from, {replace:true});
  }
const handleUserSignIn = event=>{
  event.preventDefault();
  signInWithEmailAndPassword(email, password)
}

  return (
    <div className="form-container">
      <Form onSubmit={handleUserSignIn}>
      <h2 style={{textAlign:'center'}}>Sign In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <br />
          <Form.Control onBlur={handleEmailBlur} className="input-field"  type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control onBlur={handlePasswordBlur} className="input-field" type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
     
      {
        loading && <p>Loading....</p>
      }
      {/* Firebase Error Message */}
      <p style={{color:'red'}}>{error?.message}</p>
       
        <Button  className="log" variant="primary" type="submit">
          Login
        </Button>
        <p className="ac-message"><small>New to Ema-john? <span className="ac-create"><Link to='/Registration'>Create New Account</Link></span></small></p>
        <p className="or">
        _________________________ or __________________________
        </p>

        <Button  className="g-btn" variant="primary" type="submit">Continue With Google</Button>
      </Form>
    </div>
  );
};

export default Login;

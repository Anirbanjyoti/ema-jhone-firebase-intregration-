import React from "react";
import { Button, Form } from "react-bootstrap";
import '../../Components/./Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Registration = () => {
  const [userName, setUserName] =useState(' ');
  const [email, setEmail] =useState(' ');
  const [password, setPassword] =useState(' ');
  const [confirmPassword, setConfirmPassword] =useState(' ');
  const [error, setError] =useState(' ');
  // After create user navigate to shop or home page
  const navigate = useNavigate();

  // React Firebase Hooks
  const [createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);

  const handleUserNameBlur = event =>{
    setUserName(event.target.value);  
  }
  const handleEmailBlur = event =>{
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event =>{
    setPassword(event.target.value);
  }
  const handleConfirmPasswordBlur = event =>{
    setConfirmPassword(event.target.value);
  }
  // After create user go to shop page
  if(user){
    navigate('/shop')
  }
  // Create User
  const handleCreateUser = event =>{
    event.preventDefault();
    createUserWithEmailAndPassword(email, password)
    if(password !== confirmPassword){
      setError('Your Password and Confirm Password does not match !');
      return;
    }
    if(password.length < 6){
      setError('Password must be six character or more !');
      return;
    }
  }

  
  return (
    <div className="form-container">
      <Form onSubmit={handleCreateUser}>
      <h2 style={{textAlign:'center'}}>Sign Up</h2>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <br />
          <Form.Control onBlur={handleUserNameBlur} className="input-field"  type="text" placeholder="Enter User Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <br />
          <Form.Control onBlur={handleEmailBlur} className="input-field"  type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control onBlur={handlePasswordBlur} className="input-field" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfPassword">
          <Form.Label>Confirm Password</Form.Label>
          <br />
          <Form.Control onBlur={handleConfirmPasswordBlur} className="input-field" type="password" placeholder="Confirm Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <p style={{color:'red'}}>{error}</p>
        <Button  className="log" variant="primary" type="submit">
          Sign Up
        </Button>
        <p className="ac-message"><small>Already have an account? <span className="ac-create"><Link to='/Login'>Log in</Link></span></small></p>
        <p className="or">
        _________________________ or __________________________
        </p>

        <Button  className="g-btn" variant="primary" type="submit">Continue With Google</Button>
      </Form>
    </div>
  );
};

export default Registration;

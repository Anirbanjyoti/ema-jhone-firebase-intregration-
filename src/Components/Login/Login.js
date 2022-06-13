import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  return (
    <div className="form-container">
      <Form>
      <h2 style={{textAlign:'center'}}>Sign In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <br />
          <Form.Control className="input-field"  type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control className="input-field" type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
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

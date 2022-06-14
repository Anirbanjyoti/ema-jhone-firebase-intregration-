import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [userName, setUserName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [address, setAddress] = useState(" ");
    const [phone, setPhone] = useState(" ");
    const [error, setError] = useState(" ");


    const handleUserNameBlur = (event) => {
        setUserName(event.target.value);
        
      };
      const handleAddressBlur = (event) => {
        setAddress(event.target.value);
      };
      const handlePhoneBlur = (event) => {
        setPhone(event.target.value);
      };
      const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = {userName, email, address, phone};
        console.log(shipping);
        
      };

    return (
        <div className="form-container">
        <Form onSubmit={handleCreateUser}>
          <h2 style={{ textAlign: "center" }}>Shipping</h2>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Your Name</Form.Label>
            {/* <Header userName={userName}></Header> */}
            <br />
            <Form.Control
              onBlur={handleUserNameBlur}
              className="input-field"
              type="text"
              placeholder="Enter Your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <br />
            <Form.Control
              value={user?.email}
              className="input-field"
              type="email"
              placeholder="Enter email"
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <br />
            <Form.Control
              onBlur={handleAddressBlur}
              className="input-field"
              type="text"
              placeholder="Your Address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfPassword">
            <Form.Label>Phone No</Form.Label>
            <br />
            <Form.Control
              onBlur={handlePhoneBlur}
              className="input-field"
              type="number"
              placeholder="Your phone No"
            />

          </Form.Group>
          <p style={{ color: "red" }}>{error}</p>
          <Button className="log" variant="primary" type="submit">
            Add  Shipping
          </Button>
        </Form>
      </div>
    );
};

export default Shipment;
import React, { useState, useEffect } from 'react';
import {
    Col,
    Grid,
    Row,
    FormControl,
    FormGroup,
    Label,
    Form,
    Button
    
  } from "react-bootstrap";

  function Loginpage() {
      

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      
      

    }
    return (
        <Grid fluid style={{ padding: "50px"}}>
            
           <div className="login-form" style={{width: '340px', margin: '50px auto', fontSize: '15px'}}>
        <Form onSubmit={handleSubmit} style={{marginBottom: '15px',background: '#f7f7f7',boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.3)',padding: '30px'}}>
        <h2 className="text-center">Log in</h2> 
          <FormGroup controlId="email">
            
            <FormControl
              autoFocus
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup  controlId="password">
            
            <FormControl
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
          <Button bsStyle="primary" block type="submit" disabled={!validateForm()}>
            Login
          </Button>
          </FormGroup>
          <FormGroup>
            <label className="pull-left form-check-label"><input type="checkbox" /> Remember me</label>
            <a href="#" className="pull-right">Forgot Password?</a>
            </FormGroup>        
        </Form>
      </div>
      
    </Grid>
      );
 }
 export default Loginpage;
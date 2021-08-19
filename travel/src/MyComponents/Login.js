import React from 'react'
import { Button, Form, } from 'react-bootstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

export default function Login() {
    return (
        <div className="container" style={{ width:'100%',padding:'15px',margin:'auto',height:'100%', maxWidth:"330px"}}>
            <form >
                <h1 style={{textAlign:'center'}}>welcome!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button style={{width:'100%'}} className="btn-dark btn-block">
                    Login
                </Button>
                <div className="text-center pt-3">
                    or continue with your social account
                </div>
                <FacebookLoginButton className="mt-3 mb-3"/>
            </form>

        </div>
    )
}

import React from 'react'
import { Button, Form, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="container" style={{ width:'100%',padding:'15px',margin:'auto',height:'100%', maxWidth:"330px"}}>
            <form >
                <h1 style={{textAlign:'center'}}>Register!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <div className="text-center pb-3">
                <Form.Check type="checkbox" className="text-center pt-3" style={{display:'inline',paddingRight:'10px'}}/><Link to="/TandC">Terms & Condition</Link>
                </div>
                <Button style={{width:'100%'}} className="btn-dark btn-block">
                    Rigister
                </Button>
            </form>

        </div>
    )
}

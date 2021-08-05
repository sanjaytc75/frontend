import React from 'react'
import './Main.css';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from "react-icons/fa";


export default function Main() {
 
    return (
        <div className="container">
        <div className="jumbotron">

            <h3>Book your Tickets Now!</h3>
            <Form className="Form">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridLeavingFrom">
                        <Form.Control type="text" placeholder="Leaving From" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridGoingTo">
                        
                        <Form.Control type="text" placeholder="Going To" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridDateofDepature">
                        
                        <Form.Control type="date" placeholder="Date of Depature" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridDateofReturn">
                        
                        <Form.Control type="date" placeholder="Date of Return" />
                    </Form.Group>
                    <m></m>
                    <br/>
                    <Form.Group as={Col} controlId="formGridSingleLady">
                        <Form.Check className="checkbox"type="checkbox" label="Single Lady" />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridSingleLady">
                        <button type="button" className="btn btn-primary btn-lg">
                            search for bus <FaSearch/>
                        </button>
                    </Form.Group>
                </Row>
            </Form>


        </div>
    </div> 
 

    )
}

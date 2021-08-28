import React, { Component } from 'react'
import { Button, Form,Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default class Register extends Component {
    constructor()
    {
        super()
        this.state={
            show:false
        }
    }
    handleModal()
    {
        this.setState({show:!this.state.show})
    }
    render() {
        return (
            <div className="container" style={{ width: '100%', padding: '15px', margin: 'auto', height: '100%', maxWidth: "330px" }}>
                <form >
                    <h1 style={{ textAlign: 'center' }}>Register!</h1>
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
                        <Form.Check type="checkbox" className="text-center pt-3" style={{ display: 'inline', paddingRight: '10px' }} /><Link style={{fontSize:"13px",textDecoration:"none",color:"gray"}} onClick={() => { this.handleModal() }}>Terms & Conditions</Link>
                        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                            <Modal.Header closeButton>Terms and Conditions</Modal.Header>
                            <Modal.Body>
                                BUS
                                ROLE OF REDBUS
                                redBus only provides a technology platform that connects intending travellers with bus operators. It doesn’t operate any bus or offer the service of transportation to the User. redBus also doesn’t act as an agent of any bus operator in the process of providing the above-mentioned technology platform services.
                                redBus acts as a facilitator connecting intending customers to bus operators offering sale of tickets. Accordingly, the contract of sale of services on the Website is strictly a bipartite contract between the User and the bus operator listed on the Website.
                                The bus ticket booking voucher which redBus issues to a User is solely based on the information provided or updated by the bus operator regarding the seat availability.
                                The amenities, services, routes, fares, schedule, bus type, seat availability and any other details pertaining to the bus service are provided by the respective bus operator and redBus has no control over such information provided by the bus operator.
                                LIMITATION OF LIABILITY OF REDBUS
                                In its role as a technology platform to facilitate transactions between the bus operators and the Users, redBus shall not be responsible for the operations of the bus operator including, but not limited to the following:

                                Timely departure or arrival of the bus;
                                The conduct of bus operator's employees, representatives or agents;
                                The condition of the bus, seats etc. not being up to the customer's expectation or as per the description provided by the bus operator;
                                Cancellation of the trip due to any reasons;
                                Loss or damage of the baggage of the customer;
                                The bus operator changing a customer's seat for any reason whatsoever;
                                Bus operator informing a wrong boarding point for the issuance of the booking confirmation voucher, or changing such boarding point eventually with or without any notification to redBus or the User;
                                Bus operator using a separate pick-up vehicle to transport the User from the designated boarding point to the actual place of departure of the bus.
                                RESPONSIBILITIES OF THE USERS
                                Users are advised to call the bus operator to find out the exact boarding point, or any information which they may need for the purpose of boarding or travel in that trip.
                                At the time of boarding the bus, Users shall furnish a copy of the ticket, and any valid identity proof like aadhar card, passport, PAN card or voter identification card or any other identity proof issued by a government authority.
                                Users are required to reach the boarding place at least 30 minutes before the scheduled departure time.
                                All tickets issued shall be non-transferable.
                                CANCELLATION OF TICKET
                                Cancellation of tickets can be done either through the User’s login in the redBus’s website or mobile application, or by calling on the customer care number;
                                Any cancellation is subject to such cancellation charges as mentioned on the ticket.
                                User needs to compulsorily obtain a bus ticket at the regular fare in case a child above the age of 5 years is accompanied by them, unless otherwise a particular bus operator specifies otherwise in their terms and conditions.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => { this.handleModal() }}>
                                    AGREE
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <Button style={{ width: '100%' }} className="btn-dark btn-block">
                        Rigister
                    </Button>
                </form>

            </div>
        )
    }
}


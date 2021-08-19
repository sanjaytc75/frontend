import React from 'react'
import img1 from '../img1.jpg'
import img2 from '../img2.jpg'
import img3 from '../img3.jpg'
import './Carousel.css';


import { Card,CardGroup } from 'react-bootstrap';

export default function Carousel() {
    return (
        <CardGroup>
            <Card style={{ width: '10rem',margin: '50px'}}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>SAFETY</Card.Title>
                    <Card.Text>
                    With Safety we have brought in a set of measures like Sanitized buses, mandatory masks etc. to ensure you travel safely.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem',margin: '50px'}}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>SUPERIOR CUSTOMER SERVICE</Card.Title>
                    <Card.Text>
                    We put our experience and relationships to good use and are available to solve your travel issues.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem',margin: '50px'}}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>LOWEST PRICES</Card.Title>
                    <Card.Text>
                    We always give you the lowest price with the best partner offers.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

    )
}

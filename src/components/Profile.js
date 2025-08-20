import React from "react";
import { Card } from "react-bootstrap";

export default function Profile(){
    return(
        <Card style={{
            width: "400px", margin: "20px"
        }}>
            <Card.Img
            variant="top"
            src="https://ui-avatars.com/api/?name=Sophia+Carter&background=e08b79&color=fff"
            alt="Profile"/>
            <Card.Body>
                <Card.Title>Abesh Barua</Card.Title>
                <Card.Text>Email: abeshbarua2004@gmail.com</Card.Text>
                <Card.Text>Date Joined: Jan 5, 2020</Card.Text>
            </Card.Body>

        </Card>
    );
}
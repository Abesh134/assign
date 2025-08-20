import React from "react";
import { Card } from "react-bootstrap";
import me from "../assets/me.jpg";
export default function Profile(){
    return(
        <Card style={{
            width: "400px", margin: "20px"
        }}>
            <Card.Img
            variant="top"
            src= {me}
            alt="Profile"
            style={{width: "100px",
                 height: "100px",
                 objectFit: "cover", 
                 borderRadius: "20%"}}
            />
            <Card.Body>
                <Card.Title>Abesh Barua</Card.Title>
                <Card.Text>Email: abeshbarua2004@gmail.com</Card.Text>
                <Card.Text>Date of Joined: Jan 5, 2020</Card.Text>
            </Card.Body>

        </Card>
    );
}
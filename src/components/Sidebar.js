import React, {useState} from "react";
import { Button } from "react-bootstrap";

import "../App.css";

export default function Sidebar ({onSelect}){
    const [collapsed,setCollapsed] =useState(false);
    return(
        <div 
        style={{
            width: collapsed? "60px" : "200px",
            height: "100vh",
            background: "#5ad0e4ff",
            padding: "10px",
            transition: "0.3s",
        }}
        >
            <Button 
            variant="secondary"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed? ">>" : "<<"}

            </Button>
            <div style={{
                marginTop:"20px",
                cursor: "pointer",
            }}>
                <p onClick={() => onSelect ("profile")}>👤 {collapsed ? "" : "Profile"}</p>
                 <p onClick={() => onSelect ("articles")}>📝 {collapsed ? "" : "My Articles"}</p>


            </div>
        </div>
    );
}
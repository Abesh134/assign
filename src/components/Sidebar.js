import React, {useState} from "react";
import { Button } from "react-bootstrap";
import me from "../assets/me.jpg";

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
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            
        }}
        >
            <Button 
            variant="secondary"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed? ">>" : "<<"}

            </Button>
            <div style={{margin: "20px 0"}}>
                <img
                 src={me}
                 alt="Profile"
                 style={{
                    width: collapsed ? "40px" : "100px",
                    height: collapsed ? "40px" : "100px",
                    borderRadius: "20%",
                    transition: "0.3s",
                 }}
                />
                {
                    !collapsed && (<p style ={{ 
                        marginTop: "10px",
                        fontWeight: "bold"}}>
                            Abesh Barua
                        
                    </p>)
                }

            </div>
            <div style={{
                cursor: "pointer",
            }}>
                <p onClick={() => onSelect ("profile")}>👤 {collapsed ? "" : "Profile"}</p>
                 <p onClick={() => onSelect ("articles")}>📝 {collapsed ? "" : "My Articles"}</p>



            </div>
        </div>
    );
}
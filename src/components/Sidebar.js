import React, {useState} from "react";
import { Button } from "react-bootstrap";

import "../App.css";

export default function Sidebar ({onSelect}){
    const [collapsed,setCollapsed] =useState(false);
    return(
        <div 
        className="sidebar"
        style={{
            width: collapsed? "70px" : "200px",
        }}
        >
            <img src="https://ui-avatars.com/api/?name=Sophia+Carter&background=e08b79&color=fff" alt="profile" />
            <div style={{textAlign:"center",color:"white"}}>
             {!collapsed && <h5>My Articles</h5>}    
            </div>

            <div style={{marginTop: "20px"}}>
                <p style={{
                    cursor: "pointer",color: "white"
                }} onClick={()=> onSelect("articles")}>
                    {collapsed ? "📝" : "My Articles"}

                </p>

            </div>

            <Button 
            variant="outline-light"
            size="sm"
            style={{
                position: "absolute" ,
                top : "10px",
                right: "-130px",
                borderRadius : "10px",
            }} onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed? "Expand Sidebar" : "Collapse Sidebar"}

            </Button>
        </div>
    );
}
import logo from './logo.svg';
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
function App() {
  const [selected, setSelected] =useState("profile");
  return (
    <div style={{  display: "flex"}}>
      <Sidebar onSelect={setSelected}/>
      <div style={{flex: 1, padding:"20px"}}>
        {selected==="profile" && <Profile/>}

      </div>
    </div>
  );
}

export default App;

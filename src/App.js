import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Articles from "./components/Articles";
function App() {
  const [selected, setSelected] =useState("profile");
  return (
    <div style={{  display: "flex"}}>
      <Sidebar onSelect={setSelected}/>
      <div style={{flex: 1, padding:"20px"}}>
        {selected==="profile" && <Profile/>}
        {selected === "articles" && <Articles/>}
      </div>
    </div>
  );
}

export default App;

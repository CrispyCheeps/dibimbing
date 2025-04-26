import React, { useState } from "react";
import "./index.css"; // if you have custom styles
import "./App.css"; // optional
import { Routes, Route } from 'react-router-dom';
import MenuUtama from "./pages/MenuUtama";
import MenuItem from "./pages/MenuItem";

function App() {
  return(
    <Routes>
      <Route path="/" element={<MenuUtama />} />
      <Route path="/menu-item" element={<MenuItem />} />
    </Routes>
  )
}

export default App;

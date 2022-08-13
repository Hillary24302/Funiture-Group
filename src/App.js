import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Components/Home/Home";





function App() {
  return (
    <>
       <Router>
          <Topbar />
          <Routes>
              <Route exact path='/' element={<Home/>} />
          </Routes>
       </Router>
    </>
  );
}

export default App;

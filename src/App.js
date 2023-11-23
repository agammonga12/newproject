import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MansUp from "./MansUp";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./layout/Navbar";
import NotFound from "./NotFound";
import AddUsers from "./Users/AddUsers";
import EditUser from "./Users/EditUser";
import View from "./Users/View";
import MyContext from './Context/Context';
import Login from "./Login";
const App = () => {
  
const {loginUser}=useContext(MyContext);
  return (
    <>
      <Router>
        {! loginUser ?(
          <>
         <Login />
          </>
        ) :(
          <>
          <Navbar />
            <Routes>
              <Route path="/" element={<MansUp />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/ContactUs" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="AddUsers" element={<AddUsers />} />
              <Route path="EditUser/:id" element={<EditUser />} />
              <Route path="View/:id" element={<View />} />
            </Routes>
            </>
            )}
      </Router>
    </>
  );
};

export default App;

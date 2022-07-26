
// React Imports
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components Imports
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import UserDash from "./components/Pages/UserDash";
import NotFound from "./components/Parts/NotFound";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Marks from "./components/Pages/Marks";
import UserOptions from "./components/Pages/UserOptions";
import Attendance from "./components/Pages/Attendance";
import ListForm from './components/Parts/ListForm'
import Upload from "./components/Parts/Upload";
import Profile from "./components/Pages/Profile";


// Main Function
export default class App extends React.Component {
  

  constructor(props){
    super(props)

    

    
  }
  render(){
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login /> } />
            <Route path="/user" element={<UserDash Elem={<UserOptions/>} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ForgotPassword />} />
            <Route path="*" element={<UserDash Elem={<NotFound />} />} />
            <Route path="/attendTable" element={<UserDash Elem={<Attendance />}/>} />
            <Route path="/marksTable" element={<UserDash Elem={<Marks />} />} />
            <Route path="/addData" element={<UserDash Elem={<ListForm />} />} />
            <Route path="/upload" element={<UserDash Elem={<Upload />} />} />
            <Route path="/profile" element={<UserDash Elem={<Profile />} />} />
            {/* <Route path="admin-dash" element={<AdminDash />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
 
}

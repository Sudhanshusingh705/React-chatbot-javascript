import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Chat from './component/Chat';
import React from 'react';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>

    <Route element={<Navigate to="/main/home" />} path="/" />
     <Route path="login" element={<Login />} />
     <Route path="register" element={<Register />} />
     <Route path="chat" element={<Chat />} />
    

    </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;

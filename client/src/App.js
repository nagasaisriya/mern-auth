import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/Register" element={<Register />}>
      </Route>
      <Route exact path="/Login" element={<Login />}>
      </Route>
      <Route exact path="/Profile" element={<Profile />}>
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;

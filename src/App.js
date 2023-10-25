import logo from './logo.svg';
import './App.css';
import style from 'react';

import { Routes, Route } from 'react-router-dom';


import Login from './login';

import Signup from './signup.js';
import Home from './home';
import Quick from './quick';



function App() {
  return (
    
    <div>
    

    <Routes>
      <Route path ="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quick" element={<Quick />} />
      </Routes>
  

      </div>

  );
}

export default App;

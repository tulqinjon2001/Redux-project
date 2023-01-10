import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Main, Login, Register} from './components/'
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
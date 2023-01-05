import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Main, Login, Register} from './components'
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
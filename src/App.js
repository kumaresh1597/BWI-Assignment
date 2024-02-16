import React from 'react';
import { Route,Routes } from 'react-router';

import Home from './Components/Home/Home';
import Mycart from './Components/MyCart/Mycart';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PrivateRoutes from './Components/PrivateRoutes';

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cart' element={<Mycart/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App
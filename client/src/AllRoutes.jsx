import{ Routes, Route } from 'react-router-dom';
import React from 'react';
import SearchNgo from './Pages/SearchNgo';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import UploadMeds from './Pages/UploadMeds';
import ViewMedicine from './Pages/ViewMedicine';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/searchngo' element = {<SearchNgo/>} />
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/uploadmed' element={<UploadMeds />} />
        <Route path='/viewmed' element={<ViewMedicine />} />
   </Routes> 
  );
}

export default AllRoutes;
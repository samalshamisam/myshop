import React from 'react';
// import { createRoutesFromElements, Route, Outlet, RouterProvider, createBrowsweRouter} from "react-router-dom";
import {createBrowserRouter,createRoutesFromElements ,Route ,RouterProvider, Outlet} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import {ProductsData} from './api/Api';
import Regestration from './components/Regestration';
import Sginin from './components/Sginin';
import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = () =>{
  return(
    
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
};
 const App =() =>{
  const router =createBrowserRouter (createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
       <Route index element={<Home />} loader={ProductsData}></Route>
       <Route path='/Cart' element={<Cart />} ></Route>
       <Route path='/signin' element={<Sginin />} ></Route>
       
      </Route>
      <Route path='/reg' element={<Regestration />}></Route>
      <Route path='/signin' element={<Sginin />}></Route>
    </Route>
  )
 );
return(
  <div>
    <RouterProvider router={router} />
  </div>
 )
};

export default App;

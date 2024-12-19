import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
// import products from '../products/Products';
import { getAuth, signOut } from "firebase/auth";
import { CiLogin } from "react-icons/ci";
import {logOutUser} from '../redux/appSilce';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  const products =useSelector((State) => State.appReducer.products);
  const userInfo =useSelector((State) => State.appReducer.userInfo);
 const dispatch =useDispatch();
  const logOuts = () =>{
    
    const auth = getAuth();
signOut(auth).then(() => {
  dispatch(logOutUser());
  // Sign-out successful.
}).catch((error) => {
  console.log(error);
  // An error happened.
});
  }
  return (
    // <header  className='header'>
    //   <div className='container'>
    //     <Link to="/" className= "logo">
    //     myshop
    //     </Link>
    //     <nav className='nav'>
    //       <Link to="/" className='nav-item'>
    //       <span> Home</span>
    //       </Link>
    //       <Link to="/signin" className='nav-item'>
    //       <span> Sign In</span>
    //       </Link>
    //       {/* <Link to="/reg" className='nav-item'>
    //       <span> Regestration</span>
    //       </Link> */}
    //       {userInfo ? (<>
    //       <p>{userInfo.userName}</p></>) : <>
          
          
    //       <Link to="/reg" className='nav-item'>
    //       <span> Regestration</span>
    //       </Link>
    //       </>}
    //       <Link to="/cart" className='nav-item'>
    //       <FaShoppingCart className="nav-icon" />
    //       <span>Cart</span>
    //       <span className='cart-badge'>{products.length > 0 ? products.length : 0 }</span>
    //         </Link>
    //         {userInfo && (
    //           <p onClick={logOuts}><CiLogin />
              
    //           </p>
    //         )}
    //     </nav>
    //   </div>
    // </header>
   <>
       {/* <Navbar bg="dark" data-bs-theme="dark" className='header'>
       <Container className='container'>
         <Navbar.Brand href="#home">   
          <Link to="/" className= "logo">
            myshop
        </Link>
        </Navbar.Brand> 
         <Nav className="me-auto nav" >
           <Nav.Link href="#home">
           <Link to="/" className='nav-item'>
           <span> Home</span>
           </Link>
           </Nav.Link>
           <Nav.Link href="#signin">
           <Link to="/signin" className='nav-item'>
           <span> Sign In</span>
           </Link>
           </Nav.Link>
           <Nav.Link href="#pricing">

           {userInfo ? (<>
           <p>{userInfo.userName}</p></>) : <>
          
          
           <Link to="/reg" className='nav-item'>
           <span> Regestration</span>
           </Link>
           </>}

           </Nav.Link>
           <Nav.Link href="#cart">

           <Link to="/cart" className='nav-item'>
           <FaShoppingCart className="nav-icon" />
           <span>Cart</span>
           <span className='cart-badge'>{products.length > 0 ? products.length : 0 }</span>
            </Link>
           </Nav.Link>
         </Nav>
         {userInfo && (
               <p onClick={logOuts}><CiLogin />
              
               </p>
             )}
       </Container>
     </Navbar> */}

{/* // bg-body-tertiary */}
     <Navbar expand="lg" className="header   " >
      <Container className='container'>
        <div>
        <Navbar.Brand href="#home">
        <Link to="/" className= "logo">
            myshop
        </Link>
        </Navbar.Brand>
        </div>
        
       <div> 
       <Navbar.Toggle aria-controls="basic-navbar-nav" className='basic'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Nav.Link href="#home">
            <Link to="/" className='nav-item'>
           <span> Home</span>
           </Link>
            </Nav.Link>
            <Nav.Link href="#link">
            <Link to="/signin" className='nav-item'>
           <span> Sign In</span>
           </Link>
            </Nav.Link>
            <Nav.Link>
            {userInfo ? (<>
           <p>{userInfo.userName}</p></>) : <>
          
          
           <Link to="/reg" className='nav-item'>
           <span> Regestration</span>
           </Link>
           </>}
            </Nav.Link>
            <Nav.Link>
            <Link to="/cart" className='nav-item'>
           <FaShoppingCart className="nav-icon" />
           <span>Cart</span>
           <span className='cart-badge'>{products.length > 0 ? products.length : 0 }</span>
            </Link>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
             {userInfo && (
               <p onClick={logOuts}><CiLogin />
              
               </p>
             )}
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
     </>
   
  )
}

export default Header
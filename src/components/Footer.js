import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div class="criativo">
    <div class="contenier">
        <div class="ds">
            <h1>my Shop</h1>
            
        </div>
        <div class="a">
        <Link to="/" ><span>Home</span></Link>
            {/* <a href="">home</a>
            <a href="">about us</a>
            <a href=""> services</a>
            <a href=""> protfolio</a>
            <a href="">pages</a>
            <a href=""> contact us</a> */}
        </div>
        <div class="p">
            <p>lorem ipsum dolor sit amet,consectetur adipiscing elit.utelit tellus,luctus nec ullamcorper mattis</p>
        </div>
    </div>
</div>
  )
}

export default Footer
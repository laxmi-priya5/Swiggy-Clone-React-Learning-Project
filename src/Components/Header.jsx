import {LOGO_URL} from '../utils/constants';  //named import
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = ()=>{
  const [btn , setBtn] = useState("Login");
  return(
    <>
    <div className="header">
      <div className="image-container">
          <img src={LOGO_URL} alt="" className="image" />
      </div>
      <div className="nav">
        <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/contact'>Contact Us</Link></li>
           <li>Cart</li>
           <button className="login" onClick={()=>{
             btn === "Login" ? setBtn("Logout") :setBtn("Login") ;
           }}>{btn}</button>
        </ul>
         
      </div>
    </div>
    <div className="line"></div>
    </>
  );
};
export default Header;
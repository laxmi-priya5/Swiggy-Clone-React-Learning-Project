import {LOGO_URL} from '../utils/constants';  //named import
import { useState } from 'react';
const Header = ()=>{
  const [btn , setBtn] = useState("Login");
  return(
    <div className="header">
      <div className="image-container">
          <img src={LOGO_URL} alt="" className="image" />
      </div>
      <div className="nav">
        <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact Us</li>
           <li>Cart</li>
           <button className="login" onClick={()=>{
             btn === "Login" ? setBtn("Logout") :setBtn("Login") ;
           }}>{btn}</button>
        </ul>
         
      </div>
    </div>
  );
};
export default Header;
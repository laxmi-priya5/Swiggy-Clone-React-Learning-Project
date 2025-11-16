import {LOGO_URL} from '../utils/constants';  //named import
const Header = ()=>{
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
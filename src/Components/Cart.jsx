import { useSelector } from "react-redux";
import DishCard from "./DishCard";
import appStore from "../utils/AppStore";
import {useDispatch} from 'react-redux'
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{
       dispatch(clearCart())
    }
    const cartItems = useSelector((store)=>store.cart.items)
    return(
          <div>
             <div className="cart-body">
              {cartItems.length === 0 ? <h1>Add What you Like</h1>:<h1>What's in your Cart?</h1>}
              
              <button className ="clear" onClick={handleClick}>clear</button>
              
              </div>
              
              <div className="cart">
                {cartItems.map((dish, i) => ( 
                        <DishCard key={i}  item= {dish} />
                        ))}
              </div>
          </div>
    )
}

export default Cart ;
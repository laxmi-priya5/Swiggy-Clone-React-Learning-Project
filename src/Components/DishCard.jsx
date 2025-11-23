import { useDispatch }  from 'react-redux'
import { addItem } from '../utils/cartSlice';
// const DishCard = ({ name, price, rating, desc })=>{
const DishCard = ({item})=>{
 
 //mandatory to assign

  const dispatch = useDispatch();
  const handleItem = (item)=>{
   
     
      dispatch(addItem(item));
      
      
  }
  return(
  <div className="dish-card">
      <h4>{item.name}</h4>
      <p>{item.desc}</p>
      <p>₹{item.price} • ⭐ {item.rating}</p>
      <button onClick ={()=>handleItem(item)}>Add +</button>
    </div>

  )
}
export default DishCard;
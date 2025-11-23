
import DishCard from './DishCard';


const RestaurantCatagory = ({data, items ,showItems , setShowIndex })=>{
      
         const showedItems  = showItems;
       
       
         const handleClick = ()=>{

           setShowIndex();
           
         }
         
    return(
     
          <div className = "menu" >
                    <div className="lower-menu" onClick={handleClick} >
                         <h3>{data}</h3>
                         <span>⬇️</span>
                    </div>
                    
                    <div className="dish-list"> 
                        {items.map((dish, i) => ( 
                        showedItems && <DishCard key={i}  item= {dish} />
                        ))}
                    </div> 
            </div> 
    
    )



}
export default RestaurantCatagory;
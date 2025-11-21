import DishCard from "./DishCard";
import { dishData } from "../utils/mockData";
import { useState } from "react";
import RestaurantCatagory from './RestaurantCatagory'

const RestaurantMenu = ()=>{
    // THIS IS FAKE DATA
     const menu = dishData;
     const [showItems , setShowItems] = useState(false);

     const handleClick = ()=>{
      setShowItems(!showItems);
     }

    return (
        <>
            <div className="menu-section ">
                {Object.entries(menu).map(([category, items]) => (
                    
                    <div key={category} className = "menu" onClick={handleClick}>
                    <div className="lower-menu" >
                         <h3>{category}</h3>
                         <span>⬇️</span>
                    </div>
                    
                     <div className="dish-list"> 
                        {items.map((dish, i) => ( 
                        showItems && <DishCard key={i} {...dish} />
                        ))}
                    </div> 
                    </div>  
                ))}
               
            </div>
            <div className="menu-section">
              {
                Object.entries(menu).map(([catagory,i])=>(<RestaurantCatagory key={catagory} data={catagory} items={i}/>))
                // Object.entries(menu).map((oneMenu,i)=>(console.log(oneMenu , i)))
              }
            </div>

        </>
    )
}
export default RestaurantMenu;
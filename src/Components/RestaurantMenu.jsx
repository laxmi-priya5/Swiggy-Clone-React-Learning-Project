import DishCard from "./DishCard";
import { dishData } from "../utils/mockData";
import { useState } from "react";
import RestaurantCatagory from './RestaurantCatagory'

const RestaurantMenu = ()=>{
    const [Index , setIndex]=useState(null);

    // THIS IS FAKE DATA
     const menu = dishData;

   
    return (
        <> 
            
            <div className="menu-section">
              { 
                Object.entries(menu).map(([catagory,i],ind)=>
                (
                    <RestaurantCatagory key={catagory} data={catagory} items={i}  
                     showItems ={ind === Index  ? true:false} setShowIndex ={()=> setIndex(ind)} />    //setShowIndex is used as lifting state up
                ))
                // Object.entries(menu).map(([oneMenu,i],j)=>(console.log(j)))
              }
            </div>

        </>
    )
}
export default RestaurantMenu;

import Card from './Card';
// import resList from '../utils/mockData'; 
import { useState , useEffect } from 'react';




const Body = ()=>{
  
  const [Rest , setRest] = useState([]);  // array destrcturing
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData =async ()=>{
    console.log("useEffect called");
    
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
     const json = await data.json();
  
    const slicedcards = json.data.cards.slice(3,json.data.cards.length);

    setRest(slicedcards);
     
     
     
  };
  return (
    <>
    <div className='body'>
      <button className="search" 
      onClick={()=>{
    
             
             const filteredRest = Rest.filter(result => 
              {
                
                let rating = result?.card?.card?.info?.avgRating;
                if(!rating){
                  rating =  result?.card?.card?.info?.externalRatings?.aggregatedRating?.rating;
                }
                console.log(rating);
                
                return rating >= 4.3;
              });
               setRest(filteredRest);
         
       
      }}>
      top rated restaurants</button>
      <div className="card-section">
      {
        Rest.map((restaurant)=> <Card key={restaurant.card.card.info.id} resData={restaurant}/>)
      }
     
       </div>
    </div>
   
    </>
  )
}

export default Body;
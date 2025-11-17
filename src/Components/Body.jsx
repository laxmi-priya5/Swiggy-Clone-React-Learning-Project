
import Card from './Card';
// import resList from '../utils/mockData'; 
import { useState , useEffect } from 'react';
import Shimmer from './Shimmer';



const Body = ()=>{
  
  const [Rest , setRest] = useState([]);  // array destrcturing 
  const [searchText , setSearchText] = useState("");
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData =async ()=>{

    
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
     const json = await data.json();
  
    const slicedcards = json.data.cards.slice(3,json.data.cards.length);

    setRest(slicedcards);
     
     
     
  };
  //conditional rendering  
  if(Rest.length === 0){
    return <Shimmer/>
  }
  return (
    <>
    <div className='body'>
      <button className="filter" 
      onClick={()=>{
    
             
             const filteredRest = Rest.filter(result => 
              {
                
                let rating = result?.card?.card?.info?.avgRating;
                if(!rating){
                  rating =  result?.card?.card?.info?.externalRatings?.aggregatedRating?.rating;
                }
                
                
                return rating >= 4.3;
              });
               setRest(filteredRest);
         
       
      }}>
      top rated restaurants</button>
      <input type="text" className="searchInput" placeholder='Search for Resturants' value={searchText} onChange={
        (e)=>{
           setSearchText(e.target.value);
        }
      }/>
      <button className="search" onClick={()=>{
        
          const newRest= Rest.filter(res=> {
          console.log(searchText.toLowerCase());
          return res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()) ;
          
          
          
        })
        console.log(newRest);
        setRest(newRest);
        console.log("clicked");
        
      }}>search</button>
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
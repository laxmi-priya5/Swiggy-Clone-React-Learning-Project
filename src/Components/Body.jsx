
import Card from './Card';
// import resList from '../utils/mockData'; 
import { useState , useEffect } from 'react';
import Shimmer from './Shimmer';



const Body = ()=>{
  
  const [Rest , setRest] = useState([]);  // array destrcturing 
  const [searchedRest , setSearchedRest] = useState([]);
  const [searchText , setSearchText] = useState("");
  useEffect(()=>{
    fetchData();
  },[]);



  const fetchData =async ()=>{

    
    //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
     const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5576801&lng=77.348953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     const json = await data.json();
  
    // const slicedcards = json.data.cards.slice(3,json.data.cards.length);
    
    const slicedcards = json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;

    
    setRest(slicedcards);
    setSearchedRest(slicedcards);
     
     
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
                
                let rating = result?.info?.avgRating;
                if(!rating){
                  rating =  result?.info?.externalRatings?.aggregatedRating?.rating;
                }
                
                
               
               
                return rating >= 4.5;
              });
               setRest(filteredRest);
               setSearchedRest(filteredRest);
               
       
      }}>
      top rated restaurants</button>
      <input type="text" className="searchInput" placeholder='Search for Resturants' value={searchText} onChange={
        (e)=>{
           setSearchText(e.target.value);
        }
      }/>
      <button className="search" onClick={()=>{
        
          const newRest= Rest.filter(res=> {
        
          return res.info.name.toLowerCase().includes(searchText.toLowerCase()) ;
          
          
          
        })
   
        setSearchedRest(newRest);
     
        
      }}>search</button>
      <div className="card-section">
      {
        searchedRest.map((restaurant)=> <Card key={restaurant.info.id} resData={restaurant}/>)
      }
     
       </div>
    </div>
   
    </>
  )
}

export default Body;
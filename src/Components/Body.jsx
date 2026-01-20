
import Card from './Card';
// import resList from '../utils/mockData'; 
import { useState , useEffect , useContext, useRef} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { mockRestaurants } from "../utils/mockRestaurants";



const Body = ()=>{
  
  const [Rest , setRest] = useState([]);  // array destrcturing 

  const [searchedRest , setSearchedRest] = useState([]);
  const [searchText , setSearchText] = useState("");
  const status = useOnlineStatus();  // this is a custom hooks

  

  useEffect(() => {
    setRest(mockRestaurants);
    setSearchedRest(mockRestaurants);
  }, []);


  //conditional rendering  
 
  if(status === false)  return <h2>You are offline</h2>  //go in network and > no throtlling and offline
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
        searchedRest.map((restaurant)=> <Link key={restaurant.info.id} to="/restaurant"><Card  resData={restaurant} /></Link>)
      }
     
       </div>
      
    </div>
   
    </>
  )
}

export default Body;
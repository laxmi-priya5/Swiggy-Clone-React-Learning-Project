import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import { Outlet } from 'react-router-dom'

const Card = (props)=>{
  const {resData} = props;
  const {name,
        aggregatedDiscountInfoV3,
        avgRating,
        sla,
        cuisines,
        cloudinaryImageId,
        locality,
        id} = resData?.info
  return (
    <div className="card">
     <div className="position">
        <div className="card-img-container">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" className="card-img" />
       </div>
       <div className='cost'><h2>{aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}</h2></div>
     </div>
        
    
      <h3>{name}</h3>
      <span className="rating"><b>{avgRating} • </b></span>
      <b>{sla.slaString}</b>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
    </div>
  )
}




function App() {


  return (
    <div className='app'>
       
        <Header/>
        <Outlet/>
    
    </div>
  )
}

export default App           

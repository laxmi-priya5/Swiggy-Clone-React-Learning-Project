import { IMG_LINK } from '../utils/constants';

const Card = (props)=>{
  const {resData} = props;
  const {name,
        aggregatedDiscountInfoV3,
        avgRating,
        externalRatings,
        sla,
        cuisines,
        cloudinaryImageId,
        locality,
        id} = resData?.info
  return (
    <div className="card">
     <div className="position">
        <div className="card-img-container">
        <img src={IMG_LINK + cloudinaryImageId} alt="" className="card-img" />
       </div>
       <div className='cost'><h2>{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</h2></div>
     </div>
        
     <div className="card-text">
      <h3>{name}</h3>
      <span className="rating"><b>{avgRating  || externalRatings.aggregatedRating.rating} • </b></span>
      <b>{sla.slaString}</b>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
     </div>
     
    </div>
  )
}
export default Card;
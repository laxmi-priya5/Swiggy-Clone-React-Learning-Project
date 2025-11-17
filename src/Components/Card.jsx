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
        id} = resData?.card.card.info
  return (
    <div className="card">
     <div className="position">
        <div className="card-img-container">
        <img src={IMG_LINK + cloudinaryImageId} alt="" className="card-img" />
       </div>
       <div className='cost'><h2>{aggregatedDiscountInfoV3?.header} {resData.card.card.info.aggregatedDiscountInfoV3?.subHeader}</h2></div>
     </div>
        
    
      <h3>{name}</h3>
      <span className="rating"><b>{avgRating  || externalRatings.aggregatedRating.rating} • </b></span>
      <b>{sla.slaString}</b>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
    </div>
  )
}
export default Card;
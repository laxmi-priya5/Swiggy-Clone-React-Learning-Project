const DishCard = ({ name, price, rating, desc })=>{
  return(
  <div className="dish-card">
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>₹{price} • ⭐ {rating}</p>
      <button>Add +</button>
    </div>

  )
}
export default DishCard;
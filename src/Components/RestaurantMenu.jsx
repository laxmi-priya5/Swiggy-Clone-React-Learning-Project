import DishCard from "./DishCard";
const RestaurantMenu = ()=>{
    // THIS IS FAKE DATA
  const menu = {
  "Croissants & Danishes": [
    {
      name: "Butter Croissant",
      price: 90,
      rating: 4.7,
      desc: "Flaky pastry laminated with butter."
    },
    {
      name: "Pain Au Chocolat",
      price: 105,
      rating: 4.7,
      desc: "Chocolate folded between flaky Danish pastry dough."
    },
    {
      name: "Blueberry Danish",
      price: 105,
      rating: 3.9,
      desc: "Blueberry jam and custard in buttery pastry."
    }
  ]
};


    return (
        <>
            <div className="menu-section card-section">
                {Object.entries(menu).map(([category, items]) => (
                    <div key={category}>
                    <h2>{category}</h2>
                    <div className="dish-list">
                        {items.map((dish, i) => (
                        <DishCard key={i} {...dish} />
                        ))}
                    </div>
                    </div>
                ))}
            </div>

        </>
    )
}
export default RestaurantMenu;
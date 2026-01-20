//suppose this grocery is a big component so i use this component by chunkinh or say lazy loading or dynamic importing
//and this is used for lazy loading
const groceryItems = [
  { id: 1, name: "Rice", price: 60 },
  { id: 2, name: "Milk", price: 30 },
  { id: 3, name: "Bread", price: 40 },
  { id: 4, name: "Eggs", price: 70 },
  { id: 5, name: "Vegetables", price: 50 },
];

const Grocery = () => {
  return (
    // <div className="p-6 my-10">
    //   <h1 className="text-3xl font-bold mb-4">Grocery Store 🛒</h1>

      
    // </div>
     <div className="grocery-container">
      <h1 className="store">Grocery Store 🛒</h1>

      
    </div>
  );
};

export default Grocery;

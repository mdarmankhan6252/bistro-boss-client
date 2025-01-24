
const Card = ({ food }) => {
   return (
      <div className="text-center space-y-2 border pb-3 rounded-lg">
         <img src={food.image} alt="food" className="w-full rounded-t-lg h-[300px] object-cover" />
         <h3 className="text-2xl font-semibold">{food.title}</h3>
         <p className="text-[#797777] text-sm px-2">{food.recipe}</p>
         <button className="uppercase font-semibold p-2.5 px-6 border-b-2 rounded-lg inline-block border-black bg-slate-50 hover:bg-slate-100">ADD TO CART</button>
      </div>
   );
};

export default Card;
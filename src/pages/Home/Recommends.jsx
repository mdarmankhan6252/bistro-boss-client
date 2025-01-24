import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Title from "../../shared/Title";


const Recommends = () => {
   const [foods, setFoods] = useState([]);

   useEffect(() => {
      fetch('menu.json')
         .then(res => res.json())
         .then(data => setFoods(data))
   }, [])


   console.log(foods);

   return (
      <div>
         <Title title="CHEF RECOMMENDS" desc="Should Try" />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
               foods.filter(food => food.category === 'salad').map((filteredFood, i) => <Card food={filteredFood} key={i}/>)
            }
            
         </div>


      </div>
   );
};

export default Recommends;
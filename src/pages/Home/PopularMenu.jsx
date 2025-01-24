import { useEffect, useState } from "react";
import Title from "../../shared/Title";
import MenuItem from "../../shared/MenuItem";
import Button from "../../components/Button";

const PopularMenu = () => {
   const [menu, setMenu] = useState([]);
   useEffect(() => {
      fetch('menu.json')
         .then(res => res.json())
         .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
         })
   }, [])
   return (
      <div>
         <Title title="FROM OUR MENU" desc="Check it out" />

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {
               menu.map((item, i) => <MenuItem key={i} item={item} />)
            }
         </div>
         <Button pathName='/menu'/>
      </div>
   );
};


export default PopularMenu;
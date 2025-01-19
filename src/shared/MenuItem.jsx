const MenuItem = ({item}) => {
   const {_id, image, name, recipe} = item;
   return (
      <div className="flex items-center  space-x-4">
         <img src={image} alt="" className="w-24 h-16 object-cover rounded-[0_30px_30px_30px]" />
         <div>
            <h3 className="text-xl">{name}-----------</h3>
            <p className="text-[#767575]">{recipe}</p>
         </div>         
      </div>
   );
};

export default MenuItem;
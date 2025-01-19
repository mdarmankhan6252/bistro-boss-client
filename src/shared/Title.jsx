const Title = ({ title, desc }) => {
   return (
      <div className="text-center py-16 space-y-5">
         <p className="text-amber-500 text-lg">---{desc}---</p>
         <h2 className="uppercase text-3xl sm:text-4xl ">{title}</h2>

      </div>
   );
};

export default Title;
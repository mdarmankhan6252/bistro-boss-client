import { Link } from "react-router-dom";

const Button = ({ pathName }) => {
   return (
      <div className="text-center my-10">
         <Link to={pathName} className="uppercase font-semibold p-2.5 px-6 border-b-2 rounded-lg inline-block border-black bg-slate-50 hover:bg-slate-100">View full menu</Link>
      </div>
   );
};

export default Button;
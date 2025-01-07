import { Link, NavLink } from "react-router-dom";

const Nav = () => {
   return (
      <nav className="flex items-center justify-between px-3 xl:px-10 bg-black bg-opacity-60 py-2 fixed top-0 left-0 right-0 z-50 text-white">
         <Link to='/' className="font-serif ">
            <h2 className="text-xl font-bold">bistro boss</h2>
            <h3 className="font-semibold">Restaurant</h3>
         </Link>
         <ul className="flex items-center space-x-6 uppercase font-semibold">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/menu'>menu</NavLink>
            <NavLink to='/shop'>shop</NavLink>
            <NavLink to='/login'>login</NavLink>
            <NavLink to='/register'>Register</NavLink>
         </ul>
      </nav>
   );
};

export default Nav;
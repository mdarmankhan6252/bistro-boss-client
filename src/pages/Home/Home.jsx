import Carousel from "./Carousel";
import Category from "./Category";
import PopularMenu from "./PopularMenu";

const Home = () => {
   return (
      <div>
         <Carousel />
         <div className="max-w-7xl px-3 mx-auto">
            <Category />
            <PopularMenu />
         </div>

      </div>
   );
};

export default Home;
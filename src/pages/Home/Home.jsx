import CallUs from "./CallUs";
import Carousel from "./Carousel";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Recommends from "./Recommends";
import SubBanner from "./SubBanner";

const Home = () => {
   return (
      <div>
         <Carousel />
         <div className="max-w-7xl px-3 mx-auto">
            <Category />
            <SubBanner />
            <PopularMenu />
            <CallUs />
            <Recommends />
         </div>

      </div>
   );
};

export default Home;
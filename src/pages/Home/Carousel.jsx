import { useEffect, useState } from "react";
import img_1 from '../../assets/home/01.jpg'
import img_2 from '../../assets/home/02.jpg'
import img_3 from '../../assets/home/03.png'
import img_4 from '../../assets/home/04.jpg'
import img_5 from '../../assets/home/05.png'
import img_6 from '../../assets/home/06.png'

const Carousel = () => {
   const [currentSlider, setCurrentSlider] = useState(0);
   const sliders = [{ img: img_1}, { img: img_2}, { img: img_3}, { img: img_4}, { img: img_5}, { img: img_6}];
   // if you don't want to change the slider automatically then you can just remove the useEffect
   useEffect(() => {
      const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
      return () => clearInterval(intervalId);
   }, [currentSlider]);

   return (
      <>
         <div className="w-full h-60 sm:h-96 md:h-[540px] xl:h-[90vh] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:inset-0 transform duration-1000 ease-linear"
            style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>

         </div>
         {/* slider container */}
         <div className="flex justify-center items-center gap-3 p-2">
            {/* sliders */}
            {sliders.map((slide, inx) => (
               <img onClick={() => setCurrentSlider(inx)} key={inx}
                  src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                  alt={slide.title} />
            ))}
         </div>
      </>
   )
};

export default Carousel;
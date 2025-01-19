import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import img_1 from '../../assets/home/slide1.jpg'
import img_2 from '../../assets/home/slide2.jpg'
import img_3 from '../../assets/home/slide3.jpg'
import img_4 from '../../assets/home/slide4.jpg'
import img_5 from '../../assets/home/slide5.jpg'
import Title from '../../shared/Title';

const Category = () => {
   const sliders = [
      { id: 1, img: img_1, item: 'Salad' },
      { id: 2, img: img_2, item: 'soups' },
      { id: 3, img: img_3, item: 'pizzas' },
      { id: 4, img: img_4, item: 'desserts' },
      { id: 5, img: img_5, item: 'burger' },
   ]
   return (
      <>
         <Title title="ORDER ONLINE" desc="From 11:00am to 10:00pm"/>

         <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            pagination={{
               clickable: true,
            }}

            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
               320: { slidesPerView: 1 },   // Extra small devices
               480: { slidesPerView: 2 },   // Small devices
               768: { slidesPerView: 3 },   // Medium devices
               1024: { slidesPerView: 4 },  // Large 
            }}
         >

            {
               sliders.map((item, i) => <SwiperSlide key={i} className='mb-12'>
                  <div className='relative'>
                     <img src={item.img} alt="img" className='w-full rounded-lg' />
                     <h3 className='text- absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl text-white drop-shadow-2xl' style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6" }}>{item.item}</h3>
                  </div>
               </SwiperSlide>)
            }

         </Swiper>

      </>
   );
};

export default Category;
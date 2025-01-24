import bannerImage from '../../assets/home/chef-service.jpg'
const SubBanner = () => {
   return (
      <div style={{backgroundImage : `url(${bannerImage})`}} className='w-full p-20 xl:p-32 bg-cover bg-center mt-20 rounded-xl'>

         <div className='text-center bg-white p-10 space-y-3 rounded-xl'>
            <h2 className='text-3xl font-serif'>Bistro Boss</h2>
            <p className='text-[#6e6c6c] leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nostrum repellendus deserunt, laudantium iusto temporibus iure! Consectetur quam eum saepe aspernatur natus? Rem repellat nostrum voluptatum enim! Blanditiis ipsam, ipsum, suscipit enim repellendus odit similique incidunt praesentium, porro quisquam eum!</p>
         </div>        
         
      </div>
   );
};

export default SubBanner;
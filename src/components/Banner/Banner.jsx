import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

const Banner = ({ scrollToTarget }) => {
    return (
        <div className='relative p-2 md:p-0'>
            <div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                >
                    <SwiperSlide><img className='h-dvh w-full object-cover rounded-xl mt-12' src={banner1} alt="" /></SwiperSlide>
                    <SwiperSlide ><img className='h-dvh w-full object-cover rounded-xl mt-12' src={banner2} alt="" /></SwiperSlide>
                    <SwiperSlide ><img className='h-dvh w-full object-cover rounded-xl mt-12' src={banner3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='w-4/5 md:w-1/2 absolute top-1/2 left-1/2 z-10 text-white -translate-x-1/2 -translate-y-1/2 space-y-4 bg-black bg-opacity-20 rounded-xl p-2 md:p-5 shadow-xl'>
                <div className='space-y-2'>
                    <h1 className='text-2xl md:text-7xl font-bold'>SkyLine</h1>
                    <h3 className='font-bold md:text-lg'>Real Estate & Properties</h3>
                </div>
                <p className='text-gray-200 text-xs md:text-base'>Welcome to a world where dreams become addresses, and every property holds the promise of a brighter tomorrow.</p>
                <button onClick={scrollToTarget} className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white border-none">View Deals</button>
            </div>
        </div>

    );
};

export default Banner;
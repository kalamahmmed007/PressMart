// src/components/home/Hero.jsx
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: 'Summer Sale',
      heading: 'COLLECTIONS',
      discount: 'UPTO 65% OFF',
      image: '/hero1.jpg', // You'll add your images
      textColor: 'text-gray-800',
    },
    {
      id: 2,
      title: 'New Arrivals',
      heading: 'FASHION WEEK',
      discount: 'UPTO 50% OFF',
      image: '/hero2.jpg',
      textColor: 'text-gray-800',
    },
    {
      id: 3,
      title: 'Exclusive',
      heading: 'TRENDING NOW',
      discount: 'UPTO 70% OFF',
      image: '/hero3.jpg',
      textColor: 'text-gray-800',
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full bg-gray-50">
              <div className="container mx-auto px-4 h-full">
                <div className="flex items-center justify-between h-full">
                  {/* Left Content */}
                  <div className="w-1/2">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[500px] object-cover"
                      onError={(e) => {
                        // Placeholder if image not found
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-[500px] bg-gray-200 flex items-center justify-center">
                            <div class="text-center">
                              <svg class="w-32 h-32 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-gray-500 mt-2">Hero Image</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>

                  {/* Right Content */}
                  <div className="w-1/2 text-right pr-16">
                    <h3 className="text-primary text-4xl font-handwriting mb-4">
                      {slide.title}
                    </h3>
                    <h1 className={`text-6xl font-bold mb-4 ${slide.textColor}`}>
                      {slide.heading}
                    </h1>
                    <p className="text-2xl text-gray-700 mb-8">
                      {slide.discount}
                    </p>
                    <div className="flex gap-4 justify-end">
                      <Link to="/shop">
                        <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded transition font-medium">
                          Shop Now
                        </button>
                      </Link>
                      <Link to="/products">
                        <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded transition font-medium">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: #10b981;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #10b981;
        }
      `}</style>
    </section>
  );
};

export default Hero;
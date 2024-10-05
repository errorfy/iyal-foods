import { useState, useRef, useEffect } from 'react';
import banyard from '../assets/barnyard.png';
import foxtail from '../assets/foxtail.png';
import little from '../assets/little.png';
import kudo from '../assets/kudo.png';
import black from '../assets/black.png';
import brown from '../assets/brown.png';
import seeraga from '../assets/seeraga.png';
import mapilai from '../assets/mapilai.png';
import jogger from '../assets/jogger.png';

const products = [
  { id: 1, name: 'barnyard millets', href: '#', imageSrc: banyard, imageAlt: "Barnyard Rice", price: '$35', color: 'Dosa Mixture, Pongal Mixture, Pasta' },
  { id: 2, name: 'foxtail millets', href: '#', imageSrc: foxtail, imageAlt: "Foxtail Rice", price: '$35', color: 'Dosa Mixture, Pongal Mixture, Pasta' },
  { id: 3, name: 'little millets', href: '#', imageSrc: little, imageAlt: "Little Rice", price: '$35', color: 'Pasta, Cup Cakes, Breads' },
  { id: 4, name: 'kudo millets', href: '#', imageSrc: kudo, imageAlt: "Kudo Rice", price: '$35', color: 'Pasta, Cup Cakes, Breads' },
  { id: 5, name: 'black rice ', href: '#', imageSrc: black, imageAlt: "Black Rice", price: '$35', color: 'Dosa, Noodles, Rice, Idli' },
  { id: 6, name: 'brown', href: '#', imageSrc: brown, imageAlt: "Brown Rice", price: '$35', color: 'Dosa, Noodles, Rice, Idli' },
  { id: 7, name: 'seeraga samba rice', href: '#', imageSrc: seeraga, imageAlt: "Seeraga Samba Rice", price: '$35', color: 'Dosa Mixture, Pongal Mixture, Pasta' },
  { id: 8, name: 'mapilai samba rice', href: '#', imageSrc: mapilai, imageAlt: "Mapilai Samba Rice", price: '$35', color: 'Dosa Mixture, Pongal Mixture, Pasta' },
  { id: 9, name: 'Jaggery Powder', href: '#', imageSrc: jogger, imageAlt: "Jaggery powder", price: '$35', color: 'Solution to Your sugar cravings' },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextButtonClicks, setNextButtonClicks] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef<number | null>(null);

  const isMobile = window.innerWidth <= 768;

  const nextSlide = () => {
    if (!isMobile && nextButtonClicks < 2 && currentIndex < products.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setNextButtonClicks((prevClicks) => prevClicks + 1);
    } else if (isMobile) {
      setCurrentIndex((prevIndex) => (prevIndex < products.length - 1 ? prevIndex + 1 : 0));
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setNextButtonClicks(0); // Reset the click count when the user goes back
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setNextButtonClicks(0); // Reset clicks when manually selecting
  };

  useEffect(() => {
    if (isMobile) {
      intervalRef.current = window.setInterval(() => {
        nextSlide();
      }, 2000);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section id='images'>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-22 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold text-center tracking-tight uppercase text-[#338e2b]">Our Products</h2>
          <div
            className="relative mt-6"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {products.map((product) => (
                  <div key={product.id} className="flex-shrink-0 w-full sm:w-1/1 lg:w-1/3 px-2">
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-95 lg:h-80">
                        <img
                          alt={product.imageAlt}
                          src={product.imageSrc}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-xl text-green-800 font-extrabold uppercase text-center">
                            <p className="block">
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.name}
                            </p>
                          </h3>
                          <p className="block font-light text-green-800">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.color}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex absolute inset-y-0 left-0 items-center">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
              >
                &#10094;
              </button>
            </div>

            <div className="hidden lg:flex absolute inset-y-0 right-0 items-center">
              <button
                onClick={nextSlide}
                className={`p-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none ${
                  nextButtonClicks >= 2 && 'cursor-not-allowed opacity-50'
                }`}
                disabled={nextButtonClicks >= 2 && currentIndex === products.length - 1} // Disable only on the last item
              >
                &#10095;
              </button>
            </div>

            <div className="flex justify-center mt-4 lg:hidden">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-green-800' : 'bg-gray-300'}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

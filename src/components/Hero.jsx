import React from 'react';

// Import Images
import HeroImg from '../img/woman_hero.png';

// Import Link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="h-[800px] bg-hero bg-no-repeat
      bg-cover bg-center py-24"
    >
      <div className="container mx-auto flex justify-around h-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          {/* Pretitle */}
          <div className="font-semibold flex items-center uppercase mb-6">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <div>new trend</div>
          </div>

          {/* Title */}
          <h1
            className="text-[70px] leading-[1.1]
            font-light mb-4"
          >
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link to={'/'} className='self-start uppercase
           font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block">
          <img src={HeroImg} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

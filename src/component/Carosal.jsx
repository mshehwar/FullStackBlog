import React from 'react';
import beach from '../assets/beach.jpg';
import building from '../assets/building.jpg';
import mountain from '../assets/mountain.jpg';

const Carosal = () => {
  return (
    
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4  rounded-lg"
      style={{
    background: 'linear-gradient(135deg, #544b4c, #e0a884, #9fb9c9, #7299b8)',

  }}
  >
      
      {/* Left Top Card */}
      <div className="relative bg-black text-white rounded-xl overflow-hidden h-64 md:h-auto flex flex-col justify-end p-5">
        <img
          src={building}
          alt="building"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="relative z-10">
          <div className="mb-3">
            <span className="inline-block p-2 rounded-full bg-white bg-opacity-20">
              🌐
            </span>
          </div>
          <h2 className="text-lg md:text-xl font-semibold mb-1">
            Explore more to get your comfort zone
          </h2>
          <p className="text-sm text-gray-200">
            Book your perfect stay with us.
          </p>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 text-sm font-medium">
            Booking Now →
          </button>
        </div>
      </div>

      {/* Right Hero Image with Center Text */}
      <div className="relative md:col-span-2 h-64 md:h-auto rounded-lg overflow-hidden">
        <img
          src={beach}
          alt="Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h2 className="text-white text-center text-lg md:text-2xl font-semibold px-4">
           Join now, dive into awesome blogs from real people, and start telling your own story the way only you can.  <br className="hidden md:block" />
              Your words matter—so let them be heard!
          </h2>
        </div>
      </div>

      {/* Bottom Left Article Count */}
      <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between md:col-span-1">
        <div>
          <p className="text-sm text-gray-500">Article Available</p>
          <p className="text-3xl font-bold">10</p>
        </div>
        <img
          src={mountain}
          alt="Mountain"
          className="rounded-lg w-24 h-16 object-cover"
        />
      </div>
    </section>
  );
};

export default Carosal;

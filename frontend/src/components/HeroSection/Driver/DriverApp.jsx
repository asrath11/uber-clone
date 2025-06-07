import React from 'react';

function DriverApp() {
  return (
    <div className='relative w-full h-[400px]'>
      <img
        src='https://www.uber-assets.com/image/upload/v1536339504/assets/6a/a56168-90eb-42d0-9c15-c0420cd538eb/original/D_Driver_Campaign-Carbon-arabic2x.png'
        alt='Driver App'
        className='w-full h-[400px] object-cover'
      />
      <div className='absolute inset-0 bg-black/40'></div>

      <section className='absolute top-1/2 transform -translate-y-1/2 text-white p-6'>
        <h1 className='text-5xl font-bold mb-4'>The Driver app</h1>
        <p className='text-lg max-w-4xl'>
          Easy to use and reliable, the app was built for drivers, with drivers.
          It shows you everything you need to know to become a driver with Uber.
        </p>
      </section>
    </div>
  );
}

export default DriverApp;

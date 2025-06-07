import React from 'react';
import CustomButton from '../../Button/Button';
function DriverHero() {
  return (
    <>
      <section className='lg:flex items-center justify-center gap-7 bg-black text-white border-t-3 border-white/30 pb-14'>
        <div className='flex flex-col gap-7 m-6'>
          <h1 className='text-4xl lg:text-5xl lg:w-[450px] pr-2 font-medium'>
            Drive when you want, make what you need
          </h1>
          <p className='text-lg'>Earn on your own schedule.</p>
          <div>
            <CustomButton className='text-black mr-4'>Get Started</CustomButton>
            <span className='border-b-2 pb-1 border-white/60 hover:border-white transition-all duration-300 ease-in-out cursor-pointer'>
              Already have an account? Sign in
            </span>
          </div>
        </div>
        <div>
          <img
            src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1656511866/assets/67/3b671f-4ccd-484a-ad97-cded31823ed0/original/illustration-safety-01-1.png'
            alt=''
            className='w-full px-10 object-contain'
          />
        </div>
      </section>
    </>
  );
}

export default DriverHero;

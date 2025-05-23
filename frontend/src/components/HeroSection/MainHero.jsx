import React from 'react';
import { Input } from '@/components/ui/input';
import { GoDotFill } from 'react-icons/go';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function MainHero() {
  return (
    <section className='bg-white p-6 rounded-lg flex items-center justify-center gap-10 my-10'>
      <div className='max-w-md'>
        <h1 className='text-5xl font-bold mb-6'>Go anywhere with Uber</h1>
        <form className='space-y-4 pt-20'>
          <div className='relative'>
            <span className='absolute left-3 top-3 text-2xl'>
              <GoDotFill />
            </span>
            <Input placeholder='Pickup location' className='w-full h-12 pl-10' />
          </div>
          <div className='relative'>
            <span className='absolute left-3 top-3 text-2xl'>
              <GoDotFill />
            </span>
            <Input placeholder='Dropoff Location' className='w-full h-12 pl-10' />
          </div>
          <Button
            type='submit'
            className='bg-black text-white py-3 rounded-lg font-medium transition'
          >
            Search
          </Button>
          <label className='m-5 pb-1 border-b-2 border-black/40 hover:border-black transition-all duration-300 ease-in-out cursor-pointer text-black'>
            <Link to='/register'>Log in to see your recent activity</Link>
          </label>
        </form>
      </div>
      <img
        src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png'
        alt=''
        className='rounded-2xl lg:block'
      />
    </section>
  );
}

export default MainHero;

import React from 'react';
import { FaCalendar, FaMoneyBill, FaHeadset } from 'react-icons/fa';

function DrivePerks() {
  return (
    <section className='flex flex-col items-center mx-auto my-14 px-4 w-full max-w-5xl'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Why Drive With Us</h1>

      <img
        src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_270,w_1152/v1536163470/assets/3a/a87102-5c54-478c-8a98-0df3a951a202/original/whyDriveWithUs_desktop.svg'
        alt='Why drive with us illustration'
        className='mb-10 w-full object-contain'
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
        <div className='flex flex-col items-center'>
          <FaCalendar className='text-3xl text-blue-600 mb-4' />
          <h2 className='text-2xl font-semibold mb-2'>Set Your Own Hours</h2>
          <p className='text-black/80'>
            You decide when and how often you drive.
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <FaMoneyBill className='text-3xl text-green-600 mb-4' />
          <h2 className='text-2xl font-semibold mb-2'>Get paid fast</h2>
          <p className='text-black/80'>Weekly payments in your bank account.</p>
        </div>

        <div className='flex flex-col items-center'>
          <FaHeadset className='text-3xl text-purple-600 mb-4' />
          <h2 className='text-2xl font-semibold mb-2'>
            Support When You Need It
          </h2>
          <p className='text-black/80'>
            If there’s anything that you need, you can reach us anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DrivePerks;

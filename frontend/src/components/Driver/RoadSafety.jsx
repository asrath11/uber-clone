import React from 'react';

function RoadSafety() {
  return (
    <section className='px-10 py-10 mx-auto max-w-7xl space-y-10'>
      <h1 className='text-4xl font-bold mb-4 text-[#333333]'>
        Safety on the road
      </h1>
      <p className='text-lg text-gray-600'>
        Your safety drives us to continuously raise the bar.
      </p>
      <div className='flex flex-col xl:flex-row gap-y-8'>
        {/* Card 1 */}
        <div className='flex flex-col items-start gap-3 xl:max-w-sm'>
          <img
            src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_48,w_48/v1535523054/assets/6f/7f63bb-10f4-488b-9000-593bcfe40dca/original/Safety-Center.svg'
            alt='Safety Center Icon'
            className='w-12 h-12'
          />
          <h2 className='text-2xl font-semibold'>Protection on every trip</h2>
          <p className='text-gray-600'>
            Each trip you take with the Uber app is insured to protect you and
            your rider.
          </p>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col items-start gap-3 xl:max-w-sm'>
          <img
            src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_48,w_48/v1535523101/assets/22/bdf7a1-f49f-47c0-a59e-3e6bc274b6f2/original/24_7-Support.svg'
            alt='24/7 Support Icon'
            className='w-12 h-12'
          />
          <h2 className='text-2xl font-semibold'>Help if you need it</h2>
          <p className='text-gray-600'>
            The Emergency Button calls 911. The app displays your trip details so
            you can quickly share them with authorities.
          </p>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col items-start gap-3 xl:max-w-sm'>
          <img
            src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_48,w_48/v1535523136/assets/a7/c590ac-242e-47eb-86cb-90db7712d44f/original/Community-Guidelines.svg'
            alt='Community Guidelines Icon'
            className='w-12 h-12'
          />
          <h2 className='text-2xl font-semibold'>Community Guidelines</h2>
          <p className='text-gray-600'>
            Our standards help to create safe connections and positive
            interactions with everyone. Learn how our guidelines apply to you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RoadSafety;

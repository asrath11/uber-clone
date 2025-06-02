import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Hero({
  title,
  desc,
  imgSrc,
  btnText,
  imgDirection = 'right',
  btnLink,
  link,
}) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (btnLink) {
      navigate(btnLink);
    }
  };
  return (
    <section
      className={`bg-white p-6 rounded-lg xl:flex xl:items-center xl:justify-center gap-10 my-10 xl:flex-col ${
        imgDirection === 'left' ? 'xl:flex-row-reverse' : 'xl:flex-row'
      }`}
    >
      <div className='xl:max-w-md py-8 xl:py-0'>
        <div>
          <h1 className='text-4xl font-bold mb-6'>{title}</h1>
          <p className='text-lg text-gray-600 mb-6'>{desc}</p>
        </div>

        <form className='space-y-4'>
          <Button
            onClick={handleButtonClick}
            className='bg-black text-white rounded-lg font-medium transition'
          >
            {btnText}
          </Button>
          <Link
            to={link || import.meta.env.VITE_USER_SIGNUP_URL}
            className='pb-2 mx-3 border-b-2 border-black/40 hover:border-black transition-all duration-300 ease-in-out text-black hover:text-gray-800 focus-visible:outline-none focus-visible:border-black'
          >
            Don't have an Uber account? Sign up
          </Link>
        </form>
      </div>
      <img
        src={imgSrc}
        alt=''
        className='rounded-2xl xl:w-auto sm:w-full sm:h-auto'
      />
    </section>
  );
}

export default Hero;

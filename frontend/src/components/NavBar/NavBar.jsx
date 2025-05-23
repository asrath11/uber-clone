import React from 'react';
import CustomButton from '../Button/Button';
import { MdMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };
  const handleSignUpClick = () => {
    navigate('/register');
  };
  const handleLoginClick = () => {
    navigate('/register');
  };
  return (
    <nav className='flex justify-between items-center p-4 bg-black text-white xl:px-40'>
      <div className='flex items-center gap-10'>
        <h1
          className='font-bold text-xl cursor-pointer'
          onClick={handleLogoClick}
        >
          Uber
        </h1>
        <ul className='lg:flex lg:items-center lg:gap-4 hidden'>
          <li className='text-lg cursor-pointer'>Ride</li>
          <li className='text-lg cursor-pointer'>Drive</li>
        </ul>
      </div>
      <div className='flex items-center gap-4 text'>
        <CustomButton
          className='bg-black/50 border border-white/30 text-white hover:bg-white/10 hover:text-white'
          onClick={handleSignUpClick}
        >
          Sign Up
        </CustomButton>
        <CustomButton className={'text-black'} onClick={handleLoginClick}>
          Log in
        </CustomButton>
        <button className='p-1 hover:bg-white/20 rounded-2xl lg:hidden'>
          <MdMenu className='w-6 h-6' />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

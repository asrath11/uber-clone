import React from 'react';
import CustomButton from '../Button/Button';
function AuthButtons({ handleLoginClick, handleSignUpClick }) {
  return (
    <>
      <CustomButton
        className='bg-black/50 border border-white/30 text-white hover:bg-white/10 hover:text-white'
        onClick={handleSignUpClick}
      >
        Sign Up
      </CustomButton>
      <CustomButton className={'text-black'} onClick={handleLoginClick}>
        Log in
      </CustomButton>
    </>
  );
}

export default AuthButtons;

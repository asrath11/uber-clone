import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import { Skeleton } from '@/components/ui/skeleton';
import AuthButtons from './AuthButtons';
import Profile from './Profile';
import SideBar from './SideBar';

function NavBar() {
  const { user, loading } = useUser(); // ✅ FIXED
  console.log(user);
  const navigate = useNavigate();
  const loginUrl = import.meta.env.VITE_USER_LOGIN_URL;
  const signUpUrl = import.meta.env.VITE_USER_SIGNUP_URL;

  const handleLogoClick = () => navigate('/');
  const handleSignUpClick = () => navigate(signUpUrl);
  const handleLoginClick = () => navigate(loginUrl);

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
          <li>
            <NavLink to='/' className='text-lg cursor-pointer'>
              Ride
            </NavLink>
          </li>
          <li>
            <NavLink to='/drive' className='text-lg cursor-pointer'>
              Drive
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-4 text'>
        {loading ? (
          <>
            <Skeleton className='h-10 w-24 rounded-full bg-white/20' />
            <Skeleton className='h-10 w-24 rounded-full bg-white/20' />
          </>
        ) : user ? (
          <Profile />
        ) : (
          <AuthButtons
            handleLoginClick={handleLoginClick}
            handleSignUpClick={handleSignUpClick}
          />
        )}
        <SideBar />
      </div>
    </nav>
  );
}

export default NavBar;

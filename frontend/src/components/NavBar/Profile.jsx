import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useUser } from '../contexts/UserProvider';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex items-center text-black gap-1'>
          {user.firstName}
          <IoMdArrowDropdown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[250px]'>
        <DropdownMenuItem
          onClick={() => console.log('Navigate to profile')}
          className='flex items-center gap-2'
        >
          <FaUserCircle className='size-5 text-gray-600' />
          <span>Profile</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className='flex items-center gap-2'
        >
          <IoIosLogOut className='size-5 text-red-500' />
          <span className='text-red-500'>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Profile;

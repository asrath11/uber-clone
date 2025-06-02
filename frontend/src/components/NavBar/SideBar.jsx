import React from 'react';
import { MdMenu } from 'react-icons/md';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className='p-1 hover:bg-white/20 rounded-2xl lg:hidden'
          aria-label='Open menu'
        >
          <MdMenu className='w-6 h-6' />
        </button>
      </SheetTrigger>
      <SheetContent side='left' className='w-64'>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className='flex flex-col gap-6 mt-10 text-lg font-medium text-center'>
          <NavLink to='/' className='cursor-pointer hover:text-primary'>
            Ride
          </NavLink>
          <NavLink to='/drive' className='cursor-pointer hover:text-primary'>
            Drive
          </NavLink>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;

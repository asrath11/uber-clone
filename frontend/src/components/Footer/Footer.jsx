import React from 'react';

function Footer() {
  return (
    <footer className='bg-black text-white px-6 sm:px-10 lg:px-32 py-20'>
      <h1 className='text-3xl font-bold mb-10'>Uber</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Company</h2>
          <ul className='space-y-2 text-sm'>
            <li>About Us</li>
            <li>Our Offerings</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Products</h2>
          <ul className='space-y-2 text-sm'>
            <li>Ride</li>
            <li>Drive</li>
            <li>Eat</li>
            <li>Uber for Business</li>
            <li>Uber Freight</li>
          </ul>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Support</h2>
          <ul className='space-y-2 text-sm'>
            <li>Help Center</li>
            <li>Safety</li>
            <li>Community Guidelines</li>
            <li>Accessibility</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Legal</h2>
          <ul className='space-y-2 text-sm'>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Licenses</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

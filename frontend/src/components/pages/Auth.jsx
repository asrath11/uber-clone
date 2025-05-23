import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IoLogoApple } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

function Auth() {
  return (
    <Card className='w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <CardHeader>
        <CardTitle className='text-2xl'>What's your email?</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='grid w-full items-center gap-4'>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              className='h-12'
              required
            />
            <Button type='submit' className='h-12'>
              Continue
            </Button>

            <Button variant='outline' size='lg' className='h-14 gap-3'>
              <FcGoogle className='size-7' />
              Continue with Google
            </Button>

            <Button variant='outline' size='lg' className='h-14 gap-3'>
              <IoLogoApple className='size-7' />
              Continue with Apple
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default Auth;

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IoLogoApple } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

function Auth() {
  const [step, setStep] = useState(1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
  });

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const { control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  const title = step === 1 ? "What's your email?" : 'Confirm your information';

  return (
    <Card className='w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <CardHeader>
        <CardTitle className='text-2xl'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col items-center gap-4'
          >
            {step === 1 && (
              <>
                <FormField
                  control={control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='Enter your email'
                          className='h-12 bg-[#f3f3f3] text-lg focus-visible:ring-black focus-visible:ring-2 focus-visible:bg-white'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  className='h-12 w-full'
                  onClick={() => handleStepChange(2)}
                >
                  Continue
                </Button>

                <Button variant='outline' size='lg' className='h-14 gap-3 w-full'>
                  <FcGoogle className='size-7' />
                  Continue with Google
                </Button>

                <Button variant='outline' size='lg' className='h-14 gap-3 w-full'>
                  <IoLogoApple className='size-7' />
                  Continue with Apple
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                <div className='flex gap-4 w-full'>
                  <FormField
                    control={control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem className='w-1/2'>
                        <FormControl>
                          <Input
                            placeholder='First name'
                            className='h-12'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem className='w-1/2'>
                        <FormControl>
                          <Input
                            placeholder='Last name'
                            className='h-12'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={control}
                  name='password'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Input
                          type='password'
                          placeholder='Create a password'
                          className='h-12'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='flex justify-between w-full'>
                  <Button
                    type='button'
                    variant='outline'
                    size='lg'
                    className='h-12'
                    onClick={() => handleStepChange(1)}
                  >
                    <FaArrowLeft className='size-5' />
                  </Button>
                  <Button type='submit' size='lg' className='h-12 rounded-2xl'>
                    Next
                    <FaArrowRight className='size-5 ml-2' />
                  </Button>
                </div>
              </>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Auth;

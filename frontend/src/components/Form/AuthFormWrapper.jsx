import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function AuthFormWrapper({ title, children }) {
  return (
    <Card className='w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <CardHeader>
        <CardTitle className='text-2xl'>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default AuthFormWrapper;

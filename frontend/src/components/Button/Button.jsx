import React from 'react';
import { Button } from '@/components/ui/button';

function CustomButton({ children, className, onClick }) {
  return (
    <Button
      variant='outline'
      className={`rounded-2xl ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CustomButton;

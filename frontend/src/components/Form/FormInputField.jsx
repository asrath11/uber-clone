import React from 'react';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

function FormInputField({
  control,
  name,
  placeholder,
  type = 'text',
  className = '',
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className={`h-12 w-full text-lg bg-input focus-visible:ring-input-border focus-visible:ring-2 focus-visible:bg-input-focus mt-4`}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormInputField;

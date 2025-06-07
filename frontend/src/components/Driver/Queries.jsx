import React from 'react';
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

function Queries() {
  return (
    <section className='px-6 py-10 mx-auto max-w-7xl space-y-10'>
      <h1 className='text-4xl font-bold text-[#333333]'>
        Frequently asked questions
      </h1>
      <Accordion collapsible className='space-y-6'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-xl text-left hover:no-underline'>
            Can I drive with Uber in my city?
          </AccordionTrigger>
          <AccordionContent className='text-lg text-gray-700'>
            Uber is available in hundreds of cities worldwide. Tap below to see if
            yours is one of them.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='text-xl text-left hover:no-underline'>
            What are the requirements to drive with Uber?
          </AccordionTrigger>
          <AccordionContent className='text-lg text-gray-700'>
            You must meet the minimum age to drive in your city, have an eligible
            mode of transportation, and submit required documents, including a
            valid driver’s license.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='text-xl text-left hover:no-underline'>
            Is the Uber platform safe?
          </AccordionTrigger>
          <AccordionContent className='text-lg text-gray-700'>
            Your safety matters to us. Uber has a Global Safety Team dedicated to
            doing our part to help prevent incidents. Learn more about the safety
            features in the app, as well as safeguards such as GPS tracking and
            phone anonymization, by visiting the link below.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger className='text-xl text-left hover:no-underline'>
            Do I need my own car?
          </AccordionTrigger>
          <AccordionContent className='text-lg text-gray-700'>
            If you want to drive with Uber but need a car, you can get a car from
            one of our vehicle partners or from a fleet partner in select markets.
            Please note that vehicle options may vary by city..
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default Queries;

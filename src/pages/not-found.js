/* eslint-disable prettier/prettier */
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);

  return (
    <div className='border-gray-background'>
      <div className='mx-auto max-w-screen-lg'>
        <p className='text-center text-2xl'>Not Found</p>
      </div>
    </div>
  );
}

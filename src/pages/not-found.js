/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Header from '../components/header';
import {analytics} from '../lib/firebase'

export default function NotFound() {
    useEffect(() => {
    analytics.logEvent('Not_found_visited')
  })
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);

  return (
    <div className='border-gray-background'>
      <Header />
      <div className='mx-auto max-w-screen-md'>
        <p className='text-center text-2xl'>Not Found</p>
      </div>
    </div>
  );
}

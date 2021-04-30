/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Metagram';
  }, []);

  return (
    <div className='bg-gray-background'>
      <Header />
      <div className='grid grid-cols-3 gap-4 justify-between mx-auto'>
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

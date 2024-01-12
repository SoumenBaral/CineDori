import React from 'react';
import pages from '../assets/page.jpg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
const PageNotFound = () => {
    return (
        <main>
            <section className='flex flex-col justify-center px-2'>
                <div className='flex flex-col items-center py-4'>
                    <p className='text-5xl my-4 font-bold  text-gray-600 block  dark:text-white'>404 Oops!</p>
                    <div className='max-w-lg'>
                     <img src={pages} alt="" srcset="" />
                    </div>

                </div>
                <div className='flex justify-center'>
                    <Link to={'/'}>
                        <Button>back to CineDore</Button>
                    </Link>

                </div>
            </section>
        </main>
    );
};

export default PageNotFound;
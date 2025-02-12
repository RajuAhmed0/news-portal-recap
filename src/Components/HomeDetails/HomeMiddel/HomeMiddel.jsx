import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HomeMiddel = () => {

    const data = useLoaderData()
    console.log(data.data);

    return (
        <div>
            <h2 className='text-xl font-semibold text-[#403F3F] mb-5'>Dragon News Home</h2>
            <div className='w-[558px]'>

            </div>
        </div>
    );
};

export default HomeMiddel;
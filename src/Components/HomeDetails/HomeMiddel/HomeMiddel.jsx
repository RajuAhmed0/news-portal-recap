import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Midcard from './Midcard/Midcard';

const HomeMiddel = () => {

    const data = useLoaderData()
    console.log(data.data);

    return (
        <div>
            <h2 className='text-xl font-semibold text-[#403F3F] mb-5'>Dragon News Home</h2>
            <div className='w-[558px]'>
                {
                    data.data?.map(newsInfo => <Midcard
                        key={newsInfo._id}
                        article={newsInfo}>

                    </Midcard>)

                }
            </div>
        </div>
    );
};

export default HomeMiddel;
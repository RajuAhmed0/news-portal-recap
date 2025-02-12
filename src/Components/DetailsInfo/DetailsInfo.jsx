import React from 'react';
import Topbar from '../Shared/Topbar/Topbar';
import Newscard from './NewsCard/Newscard';
import HomeRight from '../Shared/HomeRight/HomeRight';

const DetailsInfo = () => {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto'>
                <div className='flex justify-center'>
                    <Topbar></Topbar>
                </div>
                <div className='flex justify-between mt-[30px]'>
                    <div className='max-w-[849px]'>
                        <Newscard></Newscard>
                    </div>
                    <div className='max-w-[267px]'>
                        <HomeRight></HomeRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsInfo;
import React from 'react';
import HomeLeft from '../Components/HomeDetails/HomeLeft/HomeLeft';
import { Outlet } from 'react-router-dom';
import HomeRight from '../Components/Shared/HomeRight/HomeRight';

const HomeLayout = () => {
    return (
        <div className='flex justify-between'>
            <div className='max-267px'>
                <HomeLeft></HomeLeft>
            </div>
            <Outlet></Outlet>
            <div className='w-[267px]'>
                <HomeRight></HomeRight>
            </div>


        </div>
    );
};

export default HomeLayout;
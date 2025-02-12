import React from 'react';
import Topbar from '../Shared/Topbar/Topbar';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import HomeLayout from '../../Layout/HomeLayout';

const Home = () => {
    return (
        // top nav start 
        <div className='max-w-[1140px] mx-auto'>
            <div className='flex justify-center'>
                <Topbar></Topbar>
            </div>
            <div className='flex gap-5 items-center bg-[#F3F3F3] p-4 mt-[30px]'>
                <p className='text-xl font-medium text-white bg-[#D72050] px-6 py-[9px]'>Latest</p>
                <Marquee pauseOnHover={true} speed={80}>
                    <Link className='ml-8' to={'/a'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link className='ml-8' to={'/b'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link className='ml-8' to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link className='ml-8' to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link className='ml-8' to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                </Marquee>

            </div>
            <div className='mt-[21px]'>
                <Navbar></Navbar>
            </div>
            {/*  top nav end */}

            <div className='mt-20'>
                <HomeLayout></HomeLayout>
            </div>
        </div>
    );
};

export default Home;
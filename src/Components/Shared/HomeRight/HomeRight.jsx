import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const HomeRight = () => {
    return (
        <div>
            <div>
                <div className=" items-center font-poppins">
                    <div className="">
                        <h2 className="text-xl font-bold text-[#403F3F] mb-4">Login With</h2>
                        <button className='flex items-center justify-center w-full px-4 py-2 border border-gray-500 rounded-md mt-2'>
                            <FaGoogle className="w-5 h-5 mr-2" />
                            <h2 className='text-lg font-semibold '>Login with Google</h2>
                        </button>
                        <button className='flex items-center justify-center w-full px-4 py-2 border border-gray-500 rounded-md mt-2'>
                            <FaGithub className="w-5 h-5 mr-2" />
                            <h2 className='text-lg font-semibold '>Login with GitHub</h2>
                        </button>

                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-[#403F3F] text-xl font-semibold font-poppins'>Find Us On</h3>

                    <div className=' rounded-[5px] border border-[#E7E7E7] mt-4 font-poppins'>
                        <div className='flex items-center gap-[10px] p-3'>
                            <img className='w-8' src="https://i.ibb.co.com/7JM7XpM/download.png" alt="" />
                            <p>Facebook</p>
                        </div>
                        <div className='border-b'></div>

                        <div className='flex items-center gap-[10px] p-3'>
                            <img className='w-8' src="https://i.ibb.co.com/N6dQBPQ/Twitter.png" alt="" />
                            <p>Twitter</p>
                        </div>
                        <div className='border-b'></div>
                        <div className='flex items-center gap-[10px] p-3'>
                            <img className='w-8' src="https://i.ibb.co.com/PchBYp6/Instagram.png" alt="" />
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>

                <div className='mt-5 bg-[#F3F3F3] '>
                    <h2 className='text-[#403F3F] text-xl font-semibold p-4'>Q-Zone</h2>

                    <div className='flex flex-col gap-4 pb-[15px]'>
                        <img src="https://i.ibb.co.com/Y2rhqz8/qZone1.png" alt="" />
                        <img src="https://i.ibb.co.com/F3524bC/qZone2.png" alt="" />
                        <img src="https://i.ibb.co.com/fXsLDzq/qZone3.png" alt="" />
                    </div>
                </div>

                <div className='mt-7 flex justify-center items-center text-center font-poppins ' style={{ backgroundImage: "url('https://i.ibb.co/8578mxb/bg.png')" }}>

                    <div className='py-[65px] px-[34px] font-poppins'>
                        <h2 className='text-[#fff] text-3xl font-bold leading-[45px]'>Create an Amazing Newspaper</h2>

                        <p className='text-[#fff] leading-[26px] mt-5 mb-[30px]'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className="bg-[#D72050] px-[19px]  py-[17px] text-[#FFF] text-xl  font-semibold">Learn More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeRight;
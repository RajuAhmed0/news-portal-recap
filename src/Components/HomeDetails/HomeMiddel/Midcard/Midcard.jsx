import React from 'react';
import { BsBookmark } from 'react-icons/bs';
import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Midcard = ({ article }) => {
    console.log(article);

    return (
        <>
            <div className=" bg-white overflow-hidden rounded-[5px] border border-[#E7E7E7] mt-5">
                <div className="pt-[13px] pb-[16px] px-5 flex items-center justify-between bg-[#F3F3F3]">
                    <div className="flex items-center">
                        <img
                            src={article.author.img}
                            alt={article.author.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="ml-[15px]">
                            <h3 className="text-sm font-semibold">{article.author.name}</h3>
                            <p className="text-xs text-gray-500">
                                {new Date(article.author.published_date).toDateString()}
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-[10px]'>
                        <BsBookmark className='text-2xl' />
                        <IoMdShare className='text-2xl' />
                    </div>
                </div>

                <div className="px-6 pt-[14px] pb-5">
                    <h2 className="text-xl font-bold leading-[35px] text-[#403F3F]">
                        {article.title}
                    </h2>
                </div>

                <img
                    src={article.image_url}
                    alt="News Thumbnail"
                    className="w-full h-full object-cover px-5"
                />

                <div className="px-5 pb-5">
                    <p className=" text-gray-700 mb-2 pt-[32px] leading-[26px]">
                        {article.details.substring(0, 150)}...
                    </p>
                    <Link to={`/newsDetails/${article._id}`} ><button className="text-orange-500 font-semibold">Read More</button></Link>
                </div>

                <div className="px-4 pt-5 pb-5  flex items-center justify-between border-t">
                    <div className="flex items-center">
                        <FaStar className="text-orange-500 mr-1" />
                        <FaStar className="text-orange-500 mr-1" />
                        <FaStar className="text-orange-500 mr-1" />
                        <FaStar className="text-orange-500 mr-1" />
                        <FaStar className="text-orange-500 mr-1" />
                        <span className="text-sm font-semibold">{article.rating.number}</span>
                    </div>
                    <div className="flex items-center">
                        <FaEye className="text-gray-500 mr-1" />
                        <span className="text-sm font-semibold">{article.total_view} </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Midcard;
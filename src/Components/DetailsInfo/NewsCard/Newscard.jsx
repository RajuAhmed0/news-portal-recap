import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Newscard = () => {

    const [newsInfo, setNewsInfo] = useState([])
    const params = useParams();
    console.log(newsInfo);


    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
            .then(res => res.json())
            .then(data => setNewsInfo(data.data[0])
            )
    }, [])
    return (
        <div>
            <div className="">
                <h2 className="text-xl font-bold text-[#403F3F]">Dragon News</h2>
                <div className="border border-gray-200 rounded-lg shadow-md p-5 mt-4">
                    <img
                        src={newsInfo.image_url}
                        alt="News"
                        className="rounded-lg"
                    />
                    <h3 className="text-2xl font-semibold text-[#403F3F] mt-5">
                        {newsInfo.title}

                    </h3>
                    <p className="text-[#403F3F] mt-4">
                        {newsInfo.details}
                    </p>
                    <Link to='/' > <button className="mt-5 bg-[#D72050] text-white px-4 py-2 r transition">
                        All news in this category
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Newscard;
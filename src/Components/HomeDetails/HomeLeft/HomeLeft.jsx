import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const HomeLeft = () => {
    const [category, setCategory] = useState([])
    /* console.log(category); */


    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className='text-xl text-[#403F3F] font-semibold mb-5'>All Caterogy</h2>
            <div className='flex flex-col'>
                {
                    category?.map(categorys => <NavLink to={`${categorys.category_id}`} className={`text-xl font-medium text-[#403F3F] py-[17px] pl-[50px] rounded-[5px]`}>{categorys.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default HomeLeft;
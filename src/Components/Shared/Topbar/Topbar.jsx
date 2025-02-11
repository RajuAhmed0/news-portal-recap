import React from 'react';
import TopLogo from "../../../../public/assets/logo.png";
import moment from 'moment';

const Topbar = () => {

    const date = moment().format("dddd, MMMM D, YYYY")
    return (
        <div className='mt-[50px]'>
            <img src={TopLogo} alt="" />
            <h4 className='text-lg text-[#706F6F] mt-5 text-center'>Journalism Without Fear or Favour</h4>
            <h3 className='text-xl text-[#403F3F] font-medium text-center mt-[10px]'>{date}</h3>
        </div>
    );
};

export default Topbar;
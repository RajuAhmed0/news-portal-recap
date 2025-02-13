import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserLogo from "../../../../public/assets/user.png";

const Navbar = () => {
    return (
        <div className='flex justify-between'>
        <div className='w-44'>

        </div>
        <div className='flex items-center gap-5'>
            <NavLink className="text-[#706F6F] text-lg" to={"/"}>Home</NavLink>
            <NavLink className="text-[#706F6F] text-lg" to={"/about"}>About</NavLink>
            <NavLink className="text-[#706F6F] text-lg" to={"/career"}>Career</NavLink>
        </div>
        <div className='flex items-center gap-[9px]'>
            <img className='w-[42px]'  src={UserLogo} alt="" />
            <Link to={"/signin"}><button className='font-semibold text-white text-xl bg-[#403F3F] px-[42px] py-[8px]'>Login</button></Link>
        </div>
    </div>
    );
};

export default Navbar;
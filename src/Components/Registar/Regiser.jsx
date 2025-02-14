import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../AuthContext/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const Regiser = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()
    const { createUser, profileUpdate } = useContext(AuthContext);

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(userInfo => {
                console.log(userInfo.user);

                profileUpdate(data.name, data.photoURL)
                    .then(user => console.log(user))
                    .catch(err => console.log(err))
                    navigate(location.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='mt-[38px] max-w-[1140px] mx-auto pb-28'>
            <Navbar></Navbar>
            <div className="max-w-[752px] max-h-[981px] flex mx-auto rounded-md shadow-xl mt-11 ">
                <div className="bg-white rounded-[5px] p-[73px] mb-[125px] w-[752px]">
                    <h1 className="text-[35px] font-semibold text-center text-[#403F3F]">Register your account</h1>
                    <div className='border my-[50px]'></div>
                    <form className='p-[21px]' onSubmit={handleSubmit(onSubmit)} >
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2"> Your Name </label>
                            <input type="text" {...register("name")} className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2"> Photo URL</label>
                            <input type="text" {...register("photoURL")} className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your photo URL" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email </label>
                            <input type="email" {...register("email")} className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your email address" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Password </label>
                            <input type="password" {...register("password")} className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-6">
                            <label className="flex items-center">
                                <input type="checkbox" name="termsAccepted" className="mr-2" required />
                                <span className="text-gray-700">
                                    Accept <span className="font-semibold">Terms & Conditions</span>
                                </span>
                            </label>
                        </div>
                        <button to='/signin' type="submit" className="w-full bg-[#403F3F] text-xl font-semibold text-white py-[17.5px] rounded-lg hover:bg-gray-800 transition">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Regiser;
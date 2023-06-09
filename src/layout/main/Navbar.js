import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import useAdmin from '../../hooks/useAdmin'

const Navbar = () => {
    let [open, setOpen] = useState(false);
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }


    return (
        <>
            <div className=' shadow-md z-50 w-full  sticky top-0 left-0'>
                {/* <div className=' md:flex justify-between items-center bg-gray-900 text-white'> */}
                <div className='flex justify-between lg:px-10  bg-gray-900 text-white'>

                    <div className='py-4'>
                        <Link to='/'>
                            <span className="text-2xl py-4 ml-2 lg:ml-8 text-secondary font-bold">TWEET</span>
                        </Link>
                    </div>


                    {/* mobile icon  */}
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer lg:hidden'>
                        <span name={open ? 'close' : 'menu'}><AiOutlineMenu /></span>
                    </div>



                    {/* <div className=' px-0 basis-3/4 w-[700px] '> */}
                    <div className=' px-0 '>
                        {/* <ul className={`  lg:flex  justify-between lg:pr-5 lg:items-center lg:py-0  lg:pb-0 pb-8 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 lg:gap-30 transition-all duration-500 ease-in ${open ? 'top-[100px]' : 'top-[-480px]'}`}> */}
                        <ul className={`  lg:flex  justify-between lg:pr-5 lg:items-end lg:py-0  lg:pb-0 pb-8 absolute lg:static bg-gray-900 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0  transition-all duration-500 ease-in top-[-480px] ${open && 'top-[60px]'}`}>
                            <div className="lg:flex lg:justify-between">

                                <li className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}>
                                    <Link onClick={() => setOpen(!open)} to="/" className='text-lg text-gray-200 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'>
                                        HOME
                                    </Link>
                                </li>

                                <li className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}>
                                    <Link onClick={() => setOpen(!open)} to="/about" className='text-lg text-gray-200 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'>
                                        ABOUT
                                    </Link>
                                </li>

                                <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                    <Link to="/blog" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                        BLOGS
                                    </Link>
                                </li>

                                <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                    <Link to="/profile" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                        PROFILE
                                    </Link>
                                </li>
                                {admin && <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                    <Link to="/profile" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                        ADMINS
                                    </Link>
                                </li>}

                                {user?.email ?
                                    <>
                                        <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link to="/users" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                                All USERS
                                            </Link>
                                        </li>
                                        <button onClick={() => logout()} className='btn p-3 mt-2 btn-error '>LOG OUT</button>
                                    </>
                                    : <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                        <Link to="/login" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                            LOGIN
                                        </Link>
                                    </li>

                                }

                            </div>
                        </ul>
                    </div>
                </div >
            </div >
        </>
    );
};

export default Navbar;
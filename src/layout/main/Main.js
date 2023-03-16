import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineUser } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import useAdmin from "../../hooks/useAdmin";
import Navbar from "./Navbar";

const Main = () => {
    const location = useLocation()
    const path = location.pathname
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    const date = new Date()
    const year = date.getFullYear()

    return (
        <div className='bg-slate-900 text-white'>
            <Navbar />
            <div className="relative flex p-2 lg:p-5 justify-between gap-2">

                <div className={`
                ${path == '/login' || path == '/register' ? 'hidden' : ' '}
               grid content-between w-3/12 border border-white sticky  top-20 left-0  rounded-lg h-80 p-2 `}>

                    <div>
                        {admin && <Link to={'/users'} className="flex content-center cursor-pointer bg-success text-black p-2 font-semibold rounded-sm hover:bg-green-300">
                            <div className=" text-2xl mr-2 flex align-middle"><AiOutlineUser /></div>
                            <div>All USERS</div>
                        </Link>}
                        <Link to={'/admins'} className="flex mt-2 content-center cursor-pointer bg-success text-black p-2 font-semibold rounded-sm hover:bg-green-300">
                            <div className=" text-2xl mr-2 flex align-middle"><FaUserCheck /></div>
                            <div>All ADMINS</div>
                        </Link>

                        {admin && <Link Link to={'/allTweet'} className="flex mt-2 content-center cursor-pointer bg-success text-black p-2 font-semibold rounded-sm hover:bg-green-300">
                            <div className=" text-2xl mr-2 flex align-middle"><MdLocalPostOffice /></div>
                            <div>All TWEETS</div>
                        </Link>}
                    </div>

                    <div className=" bg-zinc-500 h-fit rounded-sm p-1">
                        <span className="text-sm p-2">Copyright &copy; {year} - All right reserved</span>
                    </div>
                </div>

                <div className={`overflow-auto min-h-screen ${path == '/login' || path == '/register' || path == '/profile' ? 'mx-auto' : ' w-1/2'} `}>
                    <Outlet />
                </div>

                <div className={`
                ${path == '/login' || path == '/register' || path == '/profile' ? 'hidden' : ' '}
                w-3/12 border border-white sticky  top-20 left-0  rounded-lg h-80 p-2 `}>

                    <Link to={'/profile'} className="flex content-center cursor-pointer bg-success text-black p-2 font-semibold rounded-sm hover:bg-green-300">
                        <div className=" text-2xl flex align-middle"><AiOutlineUser /></div>
                        <div>Profile</div>
                    </Link>

                    <Link to={'/profile'} className="flex mt-2 content-center cursor-pointer bg-success text-black p-2 font-semibold rounded-sm hover:bg-green-300">
                        <div className=" text-2xl flex align-middle"><AiOutlineUser /></div>
                        <div>MY TWEET</div>
                    </Link>




                </div>
            </div>
        </div >
    );
};

export default Main;

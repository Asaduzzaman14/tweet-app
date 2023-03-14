import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
    const location = useLocation()
    const path = location.pathname
    console.log(path);
    return (
        <div className='bg-slate-900 text-white'>
            <Navbar />
            <div className="relative flex p-2 lg:p-5 justify-between gap-2">

                <div className={`
                ${path == '/login' || path == '/register' ? 'hidden' : ' '}
                w-3/12 border border-white sticky  top-20 left-0  rounded-lg h-80 p-2 `}>

                    <div>
                        <div className="flex bg-slate-500 p-1 rounded-sm align-middle align-center ">
                            <span><AiOutlineUser /></span>
                            <span>All Users</span>
                        </div>

                        <div className="mt-5 bg-slate-600 rounded-sm p-1">
                            <span className="text-sm">copyright 2023 ALl right regerved tweet</span>
                        </div>
                    </div>
                </div>

                <div className={`overflow-auto ${path == '/login' || path == '/register' || path == '/profile' ? 'mx-auto' : ' w-1/2'} `}>
                    <Outlet />
                </div>

                <div className={`
                ${path == '/login' || path == '/register' || path == '/profile' ? 'hidden' : ' '}
                w-3/12 border border-white sticky  top-20 left-0  rounded-lg h-80 p-2 `}>
                    <div className="flex cursor-pointer bg-slate-500 p-1 rounded-sm align-middle align-center ">
                        <span><AiOutlineUser /></span>
                        <span>All Users</span>
                    </div>

                    <div className="flex mt-2 cursor-pointer bg-slate-500 p-1 rounded-sm align-middle align-center ">
                        <span><AiOutlineUser /></span>
                        <span>MY ACTIVITY</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;

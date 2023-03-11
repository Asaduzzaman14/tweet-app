import React from "react";
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
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere eligendi quam quasi recusandae eaque omnis exercitationem</p>
                </div>

                <div className={`overflow-auto ${path == '/login' || path == '/register' ? 'mx-auto' : ' w-1/2'} `}>
                    <Outlet />
                </div>

                <div className={`
                ${path == '/login' || path == '/register' ? 'hidden' : ' '}
                w-3/12 border border-white sticky  top-20 left-0  rounded-lg  border-black h-80 p-2 `}>                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere eligendi quam quasi recusandae eaque omnis exercitationem</p>
                </div>
            </div>
        </div>
    );
};

export default Main;

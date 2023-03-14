import axios from 'axios';
import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { AiTwotoneLike } from 'react-icons/ai';
import UpdatePost from './UpdatePost';
import swal from "sweetalert";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';

const MyTweet = ({ activity, fetchDate }) => {
    const [toggle, setToggle] = useState(true)
    const [user] = useAuthState(auth)


    // const removeLike = (id) => {
    //     let allLike = activity?.likes?.filter((like) => like !== user?.email)
    //     console.log(allLike, 'All Like');
    //     const email = {
    //         email: allLike
    //     }

    //     fetch(`http://localhost:5000/like/${id}`, {
    //         "method": "PUT",
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify(email)
    //     })
    //         .then(res => {
    //             if (res.status === 200) {
    //                 fetchDate()
    //             }
    //         })

    // }




    const addLike = (id) => {
        const email = {
            email: user?.email
        }

        fetch(`http://localhost:5000/like/${id}`, {
            "method": "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(email)
        })
            .then(res => {
                if (res.status === 200) {
                    fetchDate()
                }
            })

    }


    const handleDeleteTweet = (id) => {
        swal({
            text: "Are you sure, you want to delete this Post?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios
                    .delete(`http://localhost:5000/deleteTweet/${id}`)
                    .then((res) => {
                        if (res.status === 200) {
                            fetchDate()
                            swal({
                                text: res.data.message,
                                icon: "success",
                                button: "OK!",
                                className: "modal_class_success",
                            });

                        }
                    })
                    .catch((error) => {
                        swal({
                            title: "Attention",
                            text: error.response.data.message,
                            icon: "warning",
                            button: "OK!",
                            className: "modal_class_success",
                        });
                    });
            }
        });
    };


    return (
        <div className="card rounded-md bg-base-100 mt-10 shadow-xl">
            <div className="p-4">

                <div className='relative'>
                    <div onClick={() => setToggle((!toggle && activity._id))} className='text-center pb-2 flex justify-end'>
                        <span className='text-center p-2 align-middle bg-slate-600 cursor-pointer hover:bg-slate-700 rounded-full '><BsThreeDots /></span>
                    </div>
                    {/* update and delete UI  */}

                    {
                        !toggle &&
                        <div className={`absolute right-0 top-10 border w-20 mb-2 rounded-sm bg-gray-500 p-1`}>

                            <ul className=''>
                                <label htmlFor="my-modal-1" className='' >
                                    <li className='bg-gray-700 hover:bg-slate-800 rounded-sm cursor-pointer mb-1 p-1'>EDIT</li>
                                </label>
                                <li onClick={() => handleDeleteTweet(activity._id)} className='bg-gray-700 hover:bg-slate-800 rounded-sm cursor-pointer  p-1'>DELETE</li>
                            </ul>
                        </div>}

                    {/* update and delete  UI */}
                </div>

                <hr className='pb-5' />
                <p>{activity.desc}</p>

                <hr className='mt-5' />

                <div className="card-actions mt-4 justify-end">

                    {activity?.likes?.find((like) => like == user?.email) ?
                        <button className="btn "><AiTwotoneLike className='text-xl mr-1 text-red-500' />{activity?.likes?.length}</button>
                        :
                        <button onClick={() => addLike(activity._id)} className="btn "><BiLike className='text-xl mr-1' /> {activity?.likes?.length}</button>
                    }
                    <button className="btn ">Comment</button>
                    <button className="btn ">Report</button>
                </div>
            </div>

            <UpdatePost activity={activity}></UpdatePost>

        </div>
    );
};

export default MyTweet;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdDelete } from 'react-icons/md';
import swal from 'sweetalert';
import auth from '../../firebase/firebase.config';

const AllTweet = () => {
    const [activitys, setActivitys] = useState([])
    console.log(activitys);
    const [user] = useAuthState(auth)


    const fetchDate = () => {
        fetch(`http://localhost:5000/tweets`)
            .then(res => res.json())
            .then(data => setActivitys(data.reverse()))
    }

    useEffect(() => {
        fetchDate()
    }, [])
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
        <div className='min-h-screen'>
            <h2 className='text-2xl text-center py-4 px-2 '>
                ALL TWEET
            </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>USER</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activitys?.map((tweet, index) => {
                                return (
                                    <tr className=''>
                                        <th>{index + 1}</th>
                                        <td className=''>{tweet.email} </td>
                                        <td className='capitalize '>{tweet.desc} </td>
                                        <td className=' '>
                                            <button onClick={() => handleDeleteTweet(tweet._id)} className='btn btn-success text-xl text-white'><MdDelete /></button>
                                        </td>

                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllTweet;


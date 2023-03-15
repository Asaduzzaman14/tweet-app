import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import User from './User';

const AllUsers = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='min-h-screen'>
            <h2 className='text-2xl text-center py-4 px-2 '>
                USERS
            </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user, index) => {
                                return (
                                    <User
                                        user={user}
                                        index={index}
                                        refetch={refetch}
                                    />
                                )
                            })}



                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;


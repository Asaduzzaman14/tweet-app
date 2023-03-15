import React from 'react';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';

const Admins = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/user', {
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
            <h2 className='text-2xl py-5  text-center'>
                ADMINS
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
                            {users?.filter((user) => user.role == 'admin').map((user, index) => {
                                return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td className='capitalize'>{user.name} </td>
                                        <td>{user.email}</td>
                                        <td className='capitalize'>{user.role ? `${user.role} ` : 'user'}</td>

                                        <td>
                                            {!user.role ?

                                                <button className='btn btn-success btn-outline text-xl text-center mx-auto align-middle'><FaEdit /></button>
                                                :
                                                <button className='btn btn-success text-xl text-white'><BsFillPersonCheckFill /></button>
                                            }
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

export default Admins;
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { BsFillCheckCircleFill, BsFillPersonCheckFill } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import useAdmin from '../../hooks/useAdmin';

const User = ({ user, index }) => {

    const [cUser] = useAuthState(auth)
    const [admin] = useAdmin(cUser)

    const makeAdmin = () => {

        fetch(`https://tweet-app-server.vercel.app/user/admin/${user?.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert('Failed to Make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully made an admin')
                }

            })
    }



    return (
        <tr>
            <th>{index + 1}</th>
            <td className='capitalize'>{user.name} </td>
            <td>{user.email}</td>
            <td className='capitalize'>{user.role ? `${user.role} ` : 'user'}</td>

            <td>
                {user.role ?
                    <button className='btn btn-success text-xl text-white'><BsFillPersonCheckFill /></button>
                    :
                    <button onClick={() => { makeAdmin() }} className={`btn btn-success btn-outline text-xl text-center mx-auto align-middle`}><FaEdit /></button>
                }
            </td>
        </tr>
    );
};

export default User;
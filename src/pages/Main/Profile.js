import React from 'react';
import image from '../../assets/profile.jpg'

const Profile = () => {
    return (
        <div className='min-h-screen'>
            <div className='border rounded-md'>
                <div className='relative'>
                    <img className='h-50' src={image} alt="" />

                    <img className='absolute -bottom-20  left-2 border-4 w-40 h-40 rounded-full' src={image} alt="" />
                </div>

            </div>
            <hr className='border mt-24' />
        </div>
    );
};

export default Profile;

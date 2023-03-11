import React, { useEffect, useState } from 'react';
import image from '../../assets/profile.jpg'
import { BsThreeDots } from 'react-icons/bs'
import UpdatePost from '../../components/UpdatePost';
import MyTweet from '../../components/MyTweet';

const Profile = () => {
    const [toggle, setToggle] = useState(false)
    const [activitys, setActivitys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tweets')
            .then(res => res.json())
            .then(data => setActivitys(data))
    }, [])


    return (
        <>
            <div className='min-h-screen w-4/6 mx-auto'>
                <div className='border rounded-md'>
                    <div className='relative'>

                        <div className=''>
                            <img className='min-w-full max-h-80' src={image} alt="" />
                        </div>

                        <img className='absolute -bottom-20 left-2 border-4 w-40 h-40 rounded-full' src={image} alt="" />
                    </div>

                </div>
                <hr className='border mt-24' />

                <div>
                    <div className="mt-2 text-2xl">MY POSTS</div>
                    {
                        activitys.map((activity) => {
                            return (
                                <MyTweet activity={activity} key={activity._id}></MyTweet>

                            )
                        })
                    }

                </div>
            </div>
        </>
    );
};

export default Profile;

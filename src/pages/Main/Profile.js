import React, { useEffect, useState } from 'react';
import image from '../../assets/userPhoto.jpg'
import image1 from '../../assets/profile.jpg'
import { BsThreeDots } from 'react-icons/bs'
import UpdatePost from '../../components/UpdatePost';
import MyTweet from '../../components/MyTweet';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';

const Profile = () => {
    const [activitys, setActivitys] = useState([])
    console.log(activitys);
    const [user] = useAuthState(auth)


    const fetchDate = () => {
        fetch(`https://tweet-app-server.vercel.app/tweets/${user?.email}`)
            .then(res => res.json())
            .then(data => setActivitys(data.reverse()))
    }

    useEffect(() => {
        fetchDate()
    }, [])



    return (
        <>
            <div className='min-h-screen mx-auto'>
                <div className='border rounded-md'>

                    <div className='relative'>
                        <div className=''>
                            <img className='min-w-full max-h-80' src={image1} alt="" />
                        </div>
                        <img className='absolute -bottom-20 left-2 border-4 w-40 h-40 rounded-full' src={image} alt="" />
                    </div>

                </div>
                <div className='mt-24'>
                    <h2 className='text-2xl pb-4'>{user.email}</h2>
                    <hr className='border' />
                </div>

                <div>
                    <div className="mt-2 text-2xl">MY POSTS</div>
                    {
                        activitys.map((activity) => {
                            return (
                                <MyTweet
                                    key={activity._id}
                                    activity={activity}
                                    fetchDate={fetchDate}
                                ></MyTweet>

                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Profile;

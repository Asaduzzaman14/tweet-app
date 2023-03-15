import React, { useEffect, useState } from 'react';
import AddPost from '../../components/AddPost';
import profile from '../../assets/profile.jpg'
import MyTweet from '../../components/MyTweet';

const Home = () => {

    const [allPosts, setAllPosts] = useState([])

    const fetchDate = () => {
        fetch('http://localhost:5000/tweets')
            .then(res => res.json())
            .then(data => setAllPosts(data.reverse()))
    }

    useEffect(() => {
        fetchDate()
    }, [])


    return (
        <div>
            <AddPost />



            <div >
                <div className="mt-2 text-2xl text-center">ALL POSTS</div>
                <div className='w-10/12 mx-auto'>
                    {
                        allPosts.map((activity) => {
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


            <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut explicabo, officiis porro error saepe debitis dicta vero voluptate quasi.</p>
        </div>
    );
};

export default Home;
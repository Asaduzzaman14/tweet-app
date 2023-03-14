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


            <div className="w-10/12 mx-auto card rounded-md bg-base-100 mt-10 shadow-xl">
                <figure><img src={profile} alt="profile" /></figure>

                <div className="p-2">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, quasi non laborum reiciendis tempore quis exercitationem voluptates quas officiis temporibus?</p>
                    <div className="card-actions mt-2 justify-end">
                        <button className="btn ">Like</button>
                        <button className="btn ">Comment</button>
                        <button className="btn ">Report</button>
                    </div>
                </div>
            </div>
            <div >
                <div className="mt-2 text-2xl">ALL POSTS</div>
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
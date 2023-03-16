import React, { useEffect, useState } from 'react';
import AddPost from '../../components/AddPost';
import profile from '../../assets/profile.jpg'
import MyTweet from '../../components/MyTweet';
import Loading from '../../components/Loading';
import { useQuery } from 'react-query';

const Home = () => {

    // const [allPosts, setAllPosts] = useState([])

    // const fetchDate = () => {
    //     fetch('https://tweet-app-server.vercel.app/tweets')
    //         .then(res => res.json())
    //         .then(data => setAllPosts(data.reverse()))
    // }

    // useEffect(() => {
    //     fetchDate()
    // }, [!allPosts])



    const { data: allPosts, isLoading, refetch } = useQuery('users', () => fetch('https://tweet-app-server.vercel.app/tweets', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


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
                                    fetchDate={refetch}
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
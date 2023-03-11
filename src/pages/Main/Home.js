import React from 'react';
import AddPost from '../../components/AddPost';
import profile from '../../assets/profile.jpg'

const Home = () => {
    return (
        <div>
            <AddPost />


            <div className="card rounded-md bg-base-100 mt-10 shadow-xl">
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

            <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem ipsa nisi praesentium inventore excepturi expedita, voluptatem iusto dignissimos dicta nihil possimus, corporis aperiam aliquid neque iure laborum. Consequuntur, blanditiis est quod laudantium vero quibusdam rerum consectetur id porro error!</p>
            <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem ipsa nisi praesentium inventore excepturi expedita, voluptatem iusto dignissimos dicta nihil possimus, corporis aperiam aliquid neque iure laborum. Consequuntur, blanditiis est quod laudantium vero quibusdam rerum consectetur id porro error!</p>
            <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem ipsa nisi praesentium inventore excepturi expedita, voluptatem iusto dignissimos dicta nihil possimus, corporis aperiam aliquid neque iure laborum. Consequuntur, blanditiis est quod laudantium vero quibusdam rerum consectetur id porro error!</p>

            <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut explicabo, officiis porro error saepe debitis dicta vero voluptate quasi.</p>
            <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut explicabo, officiis porro error saepe debitis dicta vero voluptate quasi.</p>
            <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut explicabo, officiis porro error saepe debitis dicta vero voluptate quasi.</p>
        </div>
    );
};

export default Home;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg'
import auth from '../firebase/firebase.config';

const AddPost = () => {
    const [user] = useAuthState(auth)

    const handelFormSubmit = (e) => {
        e.preventDefault();

        const newTweet = {
            desc: e.target.description.value,
            email: user.email

        }
        console.log(newTweet);

        fetch('http://localhost:5000/tweet', {
            "method": "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newTweet)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset()
            })
    }


    return (
        <>

            <div className='bg-[#202830] p-3 my-3 rounded-lg'>
                <div className='flex gap-2'>
                    <Link to='/profile'>
                        <img className='w-12 h-12 rounded-full' src={profile} alt="" />
                    </Link>
                    <label htmlFor="my-modal-1" className='cursor-pointer bg-white rounded-3xl p-2 w-5/6 text-black pl-2 capitalize' >
                        <span className='cursor-pointer align-middle bg-white rounded-3xl  w-5/6 text-gray-600 pl-2 capitalize' >Write your Tweet</span>
                    </label>
                </div>

                <hr className='my-3' />
                <div className='flex justify-between'>
                    <div htmlFor="my-modal-1" className='hover:bg-slate-600 text-xl px-3 text-gray-300 cursor-pointer p-2 rounded-lg'>Video</div>
                    <div className='hover:bg-slate-600 text-xl px-3 text-gray-300 cursor-pointer p-2 rounded-lg'>Photo</div>
                    <label htmlFor="my-modal-1" className='hover:bg-slate-600 text-xl px-3 text-gray-300 cursor-pointer p-2 rounded-lg'>Activity</label>
                </div>
            </div>

            {/* modal 1 */}
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />

            <div className="modal">
                <div className="modal-box pt-14  relative">
                    <hr className='pt-5' />
                    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handelFormSubmit}>
                        <textarea className='min-w-full max-h-32 p-2 bg-slate-800' name="description" id="" required></textarea>


                        <div className='text-end mt-2'>
                            <button className='btn px-7  text-white'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddPost;

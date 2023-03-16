import React, { useEffect, useState } from 'react';

const UpdatePost = ({ activity }) => {

    let [data, setData] = useState('')

    // console.log(data);

    useEffect(() => {
        setData(activity.desc)
    }, [activity])

    const fetchData = () => {
        setData(activity.desc)
    }

    const handelFormSubmit = (e) => {
        e.preventDefault();

        const newTweet = {
            desc: e.target.description.value,

        }
        console.log(newTweet);

        fetch('https://tweet-app-server.vercel.app/tweet', {
            "method": "PATCH",
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
        <div>
            <input

                type="checkbox" id="my-modal-1" className="modal-toggle" />

            <div className="modal">
                <div className="modal-box pt-14  relative">
                    <hr className='pt-5' />
                    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handelFormSubmit}>
                        <textarea
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            className='min-w-full max-h-32 p-2 bg-slate-800' name="description" id="" required></textarea>


                        <div className='text-end mt-2'>
                            <button className='btn px-7  text-white'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePost;
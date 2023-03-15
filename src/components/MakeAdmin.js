import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />

            <div className="modal">
                <div className="modal-box pt-14  relative">
                    <hr className='pt-5' />

                    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
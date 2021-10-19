import React from 'react';

const Tips = ({ tip }) => {
    const { title, description, imgUrl } = tip;
    return (
        <div>
            <div>
                <h2 className='text-start'>{title}</h2>
                <div className='d-flex flex-column align-items-center'>
                    <img src={imgUrl} alt="" />
                    <p className='text-start'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Tips;
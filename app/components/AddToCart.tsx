'use client';
import React from 'react'

const AddToCart = () => {
    return (
        <div className='p-10'>
            <button className='btn btn-primary' onClick={() => console.log("clicked!")}>AddToCart</button>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
    )
}

export default AddToCart
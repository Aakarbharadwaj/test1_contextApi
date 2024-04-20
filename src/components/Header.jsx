import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext'
const Header = () => {

    const { count, add, sub } = useContext(AppContext);

    return (
        <div className='flex justify-center'>
            <button className=' text-blue-50 font-bold l-5 bg-blue-400 h-6 px-2 mt-2 rounded-full' onClick={sub}>-</button>

            <div className='text-3xl mx-6'>{count}</div>

            <button className='mr-5  text-blue-50 font-bold bg-blue-400 h-6 px-2 mt-2 rounded-full' onClick={add}>+</button>
        </div>
    )
}

export default Header
import React from 'react';
import { useSelector } from 'react-redux';

const Count = () => {

    const count = useSelector((state) => state.counter.value)

    return (
        <div className='flex items-center justify-center'>
            <h1>Count: <span className='font-bold'>{count}</span></h1>
        </div>
    );
};

export default Count;
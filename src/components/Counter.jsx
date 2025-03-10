import React from 'react';
import Count from './Count';
import { useDispatch } from 'react-redux';
import { decrease, increase, reset } from '../features/counter/counterSlice';

const Counter = () => {

    const dispatch = useDispatch()

    return (
        <div className='bg-[#FFF] shadow-xl rounded-lg p-3'>
            <Count />
            <div className='mt-5 flex items-center gap-3'>
                <button
                    onClick={() => dispatch(increase())}
                    className='px-3 py-2 font-semibold uppercase bg-red-500 rounded-lg text-white'>Increase</button>
                <button
                    onClick={() => dispatch(decrease())}
                    className='px-3 py-2 font-semibold uppercase bg-green-500 rounded-lg text-white'>Decrease</button>
                <button
                    onClick={() => dispatch(reset())}
                    className='px-3 py-2 font-semibold uppercase bg-black rounded-lg text-white'>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
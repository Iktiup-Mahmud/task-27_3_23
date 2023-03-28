import React from 'react';
import { ArrowUturnRightIcon } from '@heroicons/react/24/solid'

const Rightside = ({ currentIndex, setCurrentIndex }) => {

    const handelClick = () => {
        setCurrentIndex(currentIndex + 1)
        console.log(currentIndex)
    }

    return (
        <div className='border border-white'>
            {/* mark div */}
            <div className='border border-white mx-28 my-10 p-3 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-black font-semibold text-lg'>
                <p>Mark</p>
            </div>

            {/* {console.log(currentIndex)} */}

            {/* reset div */}
            <div className='border border-white mx-28 my-5 p-3 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-black font-semibold text-lg'>
                <p>Reset</p>
            </div>

            <div onClick={handelClick} className='border border-white mx-28 my-10 p-3 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-black font-semibold text-lg'>
                <ArrowUturnRightIcon className='h-10 w-10 mx-auto' />
                <p>Next</p>
            </div>
        </div>
    );
};

export default Rightside;
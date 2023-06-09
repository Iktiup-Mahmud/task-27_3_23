import React from 'react';
import { ArrowUturnRightIcon } from '@heroicons/react/24/solid'

const Rightside = ({ currentIndex, setCurrentIndex }) => {

    const handelReset = () => {
        setCurrentIndex([])
    }

    return (
        <div className=''>
            {/* mark div */}
            <div className='border border-white mx-28 my-10 p-3 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-black font-semibold text-lg'>
                <p>Mark</p>
            </div>

            {/* {console.log(currentIndex)} */}

            {/* reset div */}
            <div onClick={() => handelReset()} className='border border-white mx-28 my-5 p-3 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-black font-semibold text-lg'>
                <p>Reset</p>
            </div>

            <div className='border border-white mx-28 my-10 p-3 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-black font-semibold text-lg'>
                <ArrowUturnRightIcon className='h-10 w-10 mx-auto' />
                <p>Next</p>
            </div>
        </div>
    );
};

export default Rightside;
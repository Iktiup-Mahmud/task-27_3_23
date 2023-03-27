import React, { useEffect, useState } from 'react';
import { DocumentTextIcon, ClockIcon } from '@heroicons/react/24/solid'

const HomeCard = () => {

    const [datas, setDatas] = useState([])


    useEffect(() => {
        fetch('/datas.json')
            .then(res => res.json())
            .then(data1 => setDatas(data1))
    }, [])

    const handelBtn = () => {
        console.log(datas)
    }

    return (
        <div className='flex items-center justify-center h-96'>
            <div className="card card-compact w-96 bg-slate-300 shadow-xl">
                <div className="card-body">
                    <div className='bg-orange-500 text-center rounded-xl mx-auto px-5 py-2 mt-3'>
                        <h2 className="card-title text-black text-2xl ">Topic Test (React)</h2>
                    </div>
                    <p className='flex items-center text-black text-lg ml-3 mt-3'>
                        <DocumentTextIcon className='h-6 w-6 mr-3' />
                        8 Questions
                    </p>

                    <p className='flex items-center text-black text-lg ml-3'>
                        <ClockIcon className='h-6 w-6 mr-3' />
                        10 min
                    </p>



                    <div className="card-actions justify-center mt-3">
                        <label htmlFor="my-modal-6" className="btn text-orange-500">Buy Now</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-slate-100 text-black">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action justify-center">
                        <label htmlFor="my-modal-6" className="btn text-orange-500">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
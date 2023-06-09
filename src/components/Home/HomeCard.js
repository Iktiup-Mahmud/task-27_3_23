import React from 'react';
import { DocumentTextIcon, ClockIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const HomeCard = () => {

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
                        <label htmlFor="my-modal-6" className="btn text-orange-500">Start Now!</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-slate-100 text-black">
                    <h3 className="font-bold text-2xl">Topic Test (React)</h3>
                    <div className='text-left pl-5'>
                        <p className="font-semibold mt-3">Time allocated for this exam is 10 min</p>
                        <p className="font-semibold">Color-Scheme for question navigation-panel</p>
                        <div className='border-2 border-orange-500 rounded-xl p-2 my-2'>
                            <p>(i) White: You haven't visited the question yet</p>
                            <p>(ii) Pink: You haven't answered the question</p>
                            <p>(iii) Green: You have answered the question</p>
                            <p>(iv) Pink & black: You haven't answered the question, but have marked it for review</p>
                            <p>(v) Green & black: You have answered the question, but have marked it for review</p>
                        </div>
                    </div>

                    <div className="modal-action justify-center">
                        <Link to='/quizs'>
                        <label htmlFor="my-modal-6" className="btn text-orange-500">Start!</label>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
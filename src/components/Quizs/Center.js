import React from 'react';

const Center = ({ selectedQuiz }) => {
    // const { correctAnswer, id, question, options } = selectedQuiz;

    return (
        <div className='border-l border-white h-screen col-span-2 pt-4'>
            <h1 className='text-orange-500 text-lg '>Question</h1>
            <h3 className='text-xl p-3 font-semibold mt-3'>{selectedQuiz?.question.slice(3, -4)}</h3>


            {/* {console.log(selectedQuiz?.options)} */}

            <div>
                {
                    selectedQuiz?.options?.map((option, i) => {
                        return <div className='text-left ml-10'>
                            <input key={i} type="radio" name="" value={option} id="" /> {option}
                        </div>

                    }
                    )
                }
            </div>
        </div>
    );
};

export default Center;
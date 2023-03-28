import React from 'react';

const Center = ({ selectedQuiz, setCorrectAnsCount, setBgColor }) => {
    // const { correctAnswer, id, question, options } = selectedQuiz;

    const handelSelect = (option) => {
        console.log(option)
        setBgColor('bg-lime-500')
    }

    return (
        <div className='border-l border-white h-screen col-span-2 pt-4'>
            <h1 className='text-orange-500 font-bold text-3xl '>Question</h1>
            <h3 className='text-xl p-3 font-semibold mt-3'>{selectedQuiz?.question.slice(3, -4)}</h3>
            {/* {console.log(selectedQuiz?.options)} */}

            <div>
                {
                    selectedQuiz?.options?.map((option, i) => {
                        return <label className='text-left ml-10 flex gap-3' key={i} onClick={() => handelSelect(option)}>
                            <input key={i} type="radio" name="agroup" id="" className='cursor-pointer p-3' />
                            <p className='text-xl cursor-pointer'>{option}</p>
                        </label>
                    }
                    )
                }
            </div>
        </div>
    );
};

export default Center;
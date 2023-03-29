import React from 'react';

const Center = ({ selectedQuiz, setCorrectAnsCount, setBgColor, currentIndex, setCurrentIndex, setLimeArray, limeArray }) => {
    // const { correctAnswer, id, question, options } = selectedQuiz;

    const handelSelect = (option, i) => {
        console.log(selectedQuiz?.id)
        // setBgColor('bg-lime-500')


        if ((limeArray.findIndex(arraydata => arraydata === selectedQuiz?.id)) === -1) {
            const newCurrentIndex = [...limeArray, selectedQuiz?.id]
            setLimeArray(newCurrentIndex)
            console.log(newCurrentIndex)
        }
    }

    return (
        <div className='border-l border-white h-screen col-span-2 pt-4'>
            <h1 className='text-orange-500 font-bold text-3xl '>Question</h1>
            <h3 className='text-xl p-3 font-semibold mt-3'>{selectedQuiz?.question.slice(3, -4)}</h3>
            {/* {console.log(selectedQuiz)} */}

            <div>
                {
                    selectedQuiz?.options?.map((option, i) => {
                        return <label className={`
                        text-left ml-10 mt-3 flex gap-5`}

                            key={i} onClick={() => handelSelect(option, i)}>
                            <input key={i} type="radio" name="agroup" id="" className='cursor-pointer p-3 radio radio-error' />
                            <p className='text-xl cursor-pointer'>{option}</p>
                        </label>
                    })
                }
            </div>
        </div>
    );
};

export default Center;
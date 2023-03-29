import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Leftside = ({ setSelectedQuiz, bgColor, setBgColor, setCurrentIndex, currentIndex, setPinkArray, pinkArray }) => {
    const [datas, setDatas] = useState([])
    // const []

    useEffect(() => {
        fetch('/datas.json')
            .then(res => res.json())
            .then(data1 => setDatas(data1.questions))
    }, [])

    const handelClick = (data, i) => {
        // console.log(a)
        setSelectedQuiz(data)
        // setBgColor('bg-pink-300')
        if ((pinkArray.findIndex(j => j === i )) === -1) {
            const newCurrentIndex = [...pinkArray, i ]
            setPinkArray(newCurrentIndex)
        }
    }


    return (
        <div className='mt-4'>

            {/* 1st portion */}
            <h3 className='text-orange-500 font-bold text-3xl'>Time Left</h3>
            <div className='flex justify-center items-center mt-3'>
                <CountdownCircleTimer
                    isPlaying
                    duration={10 * 60}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>

            {/* 2nd portion */}

            <div className='grid grid-cols-3 gap-2 mt-5 mx-3'>
                {
                    datas.map((data, i) => {
                        return <span onClick={() => { handelClick(data, i) }} key={i}
                            className={`${(pinkArray.findIndex(j => j === i)) !== -1 && bgColor} text-white border border-white rounded-xl cursor-pointer`}>
                            {/* <p key={i} className='border border-white flex flex-col'> */}

                            {i + 1}
                            {/* <span className="badge relative left-10 badge-sm badge-error"></span> */}
                            {/* </p> */}
                        </span>
                    })
                }
            </div>
            {/* {console.log(bgColor)}   */}


        </div>
    );
};

export default Leftside;
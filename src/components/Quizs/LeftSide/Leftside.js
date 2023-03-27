import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Leftside = ({ setSelectedQuiz }) => {
    const [datas, setDatas] = useState([])


    useEffect(() => {
        fetch('/datas.json')
            .then(res => res.json())
            .then(data1 => setDatas(data1.questions))
    }, [])

    // const handelBtn = (a) => {
    //     console.log(a)
    // }

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
                        return <span onClick={() => setSelectedQuiz(data)} key={i} className='border border-white rounded-xl cursor-pointer'>
                            {/* <p key={i} className='border border-white flex flex-col'> */}
                            {i + 1}
                            {/* </p> */}
                        </span>
                    }
                    )
                }
            </div>





        </div>
    );
};

export default Leftside;
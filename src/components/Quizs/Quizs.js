import React, { useEffect, useState } from 'react';
import Center from './Center';
import Leftside from './LeftSide/Leftside';
import Rightside from './RightSide/Rightside';

const Quizs = () => {

    const [datas, setDatas] = useState([])
    const [selectedQuiz, setSelectedQuiz] = useState(null)
    const [correctAnsCount, setCorrectAnsCount] = useState(0)
    const [bgColor, setBgColor] = useState('bg-slate-400')
    const [currentIndex, setCurrentIndex] = useState([])
    const [pinkArray, setPinkArray] = useState([])
    const [limeArray, setLimeArray] = useState([])

    useEffect(() => {
        fetch('/datas.json')
            .then(res => res.json())
            .then(data1 => setDatas(data1))
    }, [])

    // const dataFromIndex = () => {
    //     console.log(datas.questions[currentIndex])
    //     console.log(datas)
    // }

    // dataFromIndex()
    return (
        <div className='grid grid-cols-4 gap-1'>
            <Leftside setSelectedQuiz={setSelectedQuiz} bgColor={bgColor} setBgColor={setBgColor} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setPinkArray={setPinkArray} pinkArray={pinkArray} limeArray={limeArray} />
            <Center selectedQuiz={selectedQuiz} setCorrectAns={setCorrectAnsCount} setBgColor={setBgColor} setLimeArray={setLimeArray} limeArray={limeArray} />
            <Rightside setSelectedQuiz={setSelectedQuiz} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
    );
};

export default Quizs;
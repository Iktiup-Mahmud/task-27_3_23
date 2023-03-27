import React, { useEffect, useState } from 'react';
import Center from './Center';
import Leftside from './LeftSide/Leftside';
import Rightside from './RightSide/Rightside';

const Quizs = () => {

    const [datas, setDatas] = useState([])
    const [selectedQuiz, setSelectedQuiz] = useState(null)

    useEffect(() => {
        fetch('/datas.json')
            .then(res => res.json())
            .then(data1 => setDatas(data1))
    }, [])


    return (
        <div className='grid grid-cols-4 gap-1'>
            <Leftside setSelectedQuiz={setSelectedQuiz}/>
            <Center selectedQuiz={selectedQuiz} />
            <Rightside />
        </div>
    );
};

export default Quizs;
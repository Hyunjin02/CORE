/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/ClassRoom.css';
import { Link } from 'react-router-dom';

//로그인 성공 후 페이지 -> 서버로부터 강의실리스트를 가져와야함 
function ClassRoom({ match, history }) {
    let [teacher_subject, setTeacher] = useState([{ id: 1, title: 'Student' },
    { id: 2, title: 'WorkBook' },
    { id: 3, title: 'FeedBack' }])

    let [student_subject, setStudent] = useState([
        { id: 1, title: 'WorkBook' }
    ])

    const { mode } = match.params;



    console.log('강의실렌더링');

    return (

        <div>
            <div className="classroom_box">
                <Core_Logo />
                <div className="content">
                    {/* 회원가입 타이틀  */}
                    <div className="title_box">
                        <span>나의 강의실</span>
                    </div>
                    <div className="title_box">

                        <Link to={`../../mainpage/${mode}/student`}>C 프로그래밍 및 실습</Link>
                    </div>

                </div>
            </div>
        </div>
    );

};

export default ClassRoom;
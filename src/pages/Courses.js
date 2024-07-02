import React from 'react';
import '../style/Courses.css'
import { GoMortarBoard } from "react-icons/go";

const Courses = () => {



    return (
        <div className='courses'>
            <div className='text'>
                <h3>Chọn khóa học tiếng Nhật phù hợp</h3>
                <p>---------- <GoMortarBoard /> ----------</p>

            </div>
            <div className='list-item'>
                <div className='item'>
                    a
                </div>
            </div>
        </div>
    );
};

export default Courses;
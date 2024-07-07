import React, { useState } from 'react';
import { GoMortarBoard } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import '../style/Courses.css';
import { useNavigate } from 'react-router-dom';
import { Route, Routes, Link, NavLink } from 'react-router-dom'
const Courses = () => {
    const [activeOption, setActiveOption] = useState('Gợi ý');
    const navigate = useNavigate();
    const handleClick = (option) => {
        setActiveOption(option);
    };

    return (
        <div className='courses'>
            <div className='top'>
                <div className='top-course'>
                <h3>Khóa học</h3>
                <NavLink to='/combo' >
                <button>
                        <h3>Mua gói</h3>
                        </button>
                            </NavLink>
                </div>
                
                <div className='menu'>
                    <div className="menu-1">
                        <div
                            className={`option ${activeOption === 'Gợi ý' ? 'active-option' : ''}`}
                            onClick={() => handleClick('Gợi ý')}
                        >
                            Gợi ý
                        </div>
                        <div
                            className={`option ${activeOption === 'Đang học' ? 'active-option' : ''}`}
                            onClick={() => handleClick('Đang học')}
                        >
                            Đang học
                        </div>
                    </div>
                    <div>
                        <div>Xem tất cả</div>
                    </div>
                </div>
            </div>
            <div className='text'>
                <h3>Chọn khóa học tiếng Nhật phù hợp</h3>
                <p>---------- <GoMortarBoard /> ----------</p>
            </div>
            <div>
                {activeOption === 'Gợi ý' ? (
                    <div className='list-item'>
                        <div className='item'>
                            <div className='banner-item'>
                                <img className='img' src='socap.jpg' alt='Banner' />
                            </div>
                            <div className='info-item'>
                                <h4>Sơ cấp dành cho người mới bắt đầu </h4>
                                <p><span><MdOutlinePeopleAlt /></span> 50</p>
                                <p>
                                    5 <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' /> (6)
                                </p>
                                <p>Đây là khóa học cơ bản sơ cấp dành cho người mới bắt đầu ...</p>
                                <div className='line'></div>
                                <div className='bot-item'>
                                    <div><FaRegClock /> 4:00:00</div>
                                    <div><button className='btn1'>Học ngay</button></div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='banner-item'>
                                <img className='img' src='socap.jpg' alt='Banner' />
                            </div>
                            <div className='info-item'>
                                <h4>Sơ cấp dành cho người mới bắt đầu </h4>
                                <p><span><MdOutlinePeopleAlt /></span> 50</p>
                                <p>
                                    5 <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' /> (6)
                                </p>
                                <p>Đây là khóa học cơ bản sơ cấp dành cho người mới bắt đầu ...</p>
                                <div className='line'></div>
                                <div className='bot-item'>
                                    <div><FaRegClock /> 4:00:00</div>
                                    <div><button className='btn1'>Học ngay</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='list-item'>
                        <div className='item'>
                            <div className='banner-item'>
                                <img className='img' src='socap.jpg' alt='Banner' />
                            </div>
                            <div className='info-item'>
                                <h4>Khóa học đang học </h4>
                                <p><span><MdOutlinePeopleAlt /></span> 50</p>
                                <p>
                                    5 <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' /> (6)
                                </p>
                                <p>Đây là khóa học đang học ...</p>
                                <div className='line'></div>
                                <div className='bot-item'>
                                    <div><FaRegClock /> 4:00:00</div>
                                    <div>30%</div>
                                    <div><button className='btn1'>Học tiếp</button></div>
                                </div>
                            </div>
                            <div className='progressbar'>
                                <div className='tien-trinh'></div>
                            </div>
                            
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;

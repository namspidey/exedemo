import React from 'react';
import '../style/Detail.css';
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const CourseDetail = () => {
    const navigate = useNavigate();
    return (
        <div className='detail'>
            <div className='banner'>
                <div className='banner-img'>
                    <img className='img-detail' src='socap.jpg' />
                </div>
                <h3>Tên khóa học</h3>
                <p>Giới thiệu...</p>
                <div>
                <NavLink to='/pronounceCheck' ><button className='btn-banner'>Vào học ngay  <FaArrowRight />
                    </button></NavLink>
                    <div className='list-tag'>
                        <span><IoMdStopwatch className='tag-ic' /> 17 giờ</span>
                        <span><FaList className='tag-ic' /> 15 bài giảng</span>

                        <span><GrCertificate className='tag-ic' /> Chứng chỉ
                        </span>
                        {/* <span><MdOutlinePeopleAlt className='tag-ic'/>
                         1.068 học viên</span> */}
                    </div>
                </div>
            </div>
            <div className='menu'>
                <div className='menu-item'>
                    <a href='#intro'>Giới thiệu</a>
                </div>
                <div className='menu-item'>
                    <a href='#syl'>Giáo trình</a>
                </div>
                <div className='menu-item'>
                    <a href='#vote'>Đánh giá</a>
                </div>
            </div>

            <div className='content'>
                <div id='intro'>
                    <h3>Giới thiệu</h3>
                    <p>Khóa học tiếng Nhật online cho người mới bắt đầu dành cho học viên đã học xong bảng chữ cái, biết cách phát âm tiếng Nhật.
                        Giúp học viên nhanh chóng trau dồi hơn kiến thức nền tảng ngay tại nhà ...</p>
                </div>
                <div id='syl'>
                    <h3>Giáo trình</h3>
                    <div className='syl-table'>
                        <div>
                            <FaRegCirclePlay />  Bài 1: Giới thiệu qua về các mẫu câu

                        </div>
                        <div>
                            <FaRegCirclePlay />  Bài 2: Giải thích từ vựng (P1)

                        </div>
                        <div>
                            <FaRegCirclePlay />  Bài 3: Giải thích từ vựng (P2)

                        </div>
                        <div>
                            <FaRegCirclePlay />  Bài 4: Phân tích ngữ pháp qua các mẫu câu (P1)

                        </div>
                        <div>
                            ...
                        </div>
                    </div>
                </div>
            </div>

            <div className='vote' id='vote'>
                <h3>Đánh giá</h3>
                <div className='vote-container'>
                    <h3>5</h3>
                    <div>
                        <FaStar className='star' />
                        <FaStar className='star' />
                        <FaStar className='star' />
                        <FaStar className='star' />
                        <FaStar className='star' />
                    </div>
                    <p>(200 dánh giá)</p>
                    <div className='vote-body'>

                    </div>
                </div>
                <div className='cmt'>
                    <textarea className='input-area' placeholder='Đánh giá của bạn' />
                </div>
                <div className='cmt-bar'>
                    <div>
                        <FaStar className='star' />
                        <FaStar className='star' />
                        <FaStar className='star' />
                        <FaStar className='star' />
                        <FaStar className='star' />
                    </div>
                    <div>
                        <button className='btn-cmt'>Gửi đánh giá</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
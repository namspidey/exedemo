import React from 'react';
import '../style/Combo.css'
import { FaYenSign } from "react-icons/fa";

const Combo = () => {
    return (
        <div className='combo'>
            <h3>Đăng ký Gói Combo</h3>
            <div className='combo-container'>
                <div className='item'>
                    <h4 className='blink-text'>Combo 6</h4>
                    <b>1.699.000 VNĐ</b>
                    <b>
                        <FaYenSign className='yen-ic'/>
                        10.750 </b>
                    <p className='des'>6 THÁNG</p>
                    <button>Đăng ký ngay</button>

                </div>

                <div className='item'>
                    <h4 className='blink-text'>Combo 12</h4>
                    <b>2.999.000 VNĐ</b>
                    <b>
                        <FaYenSign className='yen-ic'/>
                        18.977 </b>
                    <p>12 THÁNG</p>
                    <button>Đăng ký ngay</button>

                </div>

                <div className='item'>
                    <h4 className='blink-text'>Khóa học PRO</h4>
                    <b>3.135.000 VNĐ</b>
                    <b>
                        <FaYenSign className='yen-ic'/>
                        19.831 </b>
                    <p>Khóa học + Học giao tiếp 1:1</p>
                    <button>Đăng ký ngay</button>

                </div>

                <div className='item'>
                    <h4 className='blink-text'>Khóa học PRO+</h4>
                    <b>5.499.000 VNĐ</b>
                    <b>
                        <FaYenSign className='yen-ic'/>
                        34.786 </b>
                    <p>Khóa học + Kho đề + luyện đề + Học giao tiếp 1:1</p>
                    <button>Đăng ký ngay</button>

                </div>

                <div className='item'>
                    <h4 className='blink-text'>KHO ĐỀ</h4>
                    <b>500.000 VNĐ</b>
                    <b>
                        <FaYenSign className='yen-ic'/>
                        3.163 </b>
                    <p>Kho đề thi chuẩn chương trình</p>
                    <button>Đăng ký ngay</button>

                </div>

                <div className='item'>
                    <h4 className='blink-text'>Combo trọn đời</h4>
                    <b>5.499.000 VNĐ</b>
                    <b>
                        <FaYenSign className='yen-ic'/>
                        34.786 </b>
                    <p>Dùng trọn đời</p>
                    <button>Đăng ký ngay</button>

                </div>
                
            </div>
            
        </div>
    );
};

export default Combo;
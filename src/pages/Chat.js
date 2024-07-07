import React, { useState } from 'react';
import '../style/Chat.css';
import { FaChevronLeft } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Chat = () => {
    const [language, setLanguage] = useState('vi'); // Khởi tạo state với tiếng Việt

    const toggleLanguage = (currentLang) => {
        return currentLang === 'vi' ? 'jp' : 'vi';
    };

    const handleDivClick = (event) => {
        const currentLang = event.target.dataset.lang;
        const newLang = toggleLanguage(currentLang);
        event.target.dataset.lang = newLang;
        event.target.innerText = newLang === 'vi' ? event.target.dataset.vi : event.target.dataset.jp;
    };

    return (
        <div className='chat'>
            <div className='chat-bar'>
                <div className='left-side'>
                    <FaChevronLeft className='ic1' />
                    <div className='bar-content'>
                        Person A

                    </div>
                </div>
                <div className='right-side'>
                    <IoCall className='ic1' />
                    <FaVideo className='ic1' />

                </div>
            </div>
            <div className='box'>
                <div className='box-chat'>
                    <div className='partner' data-lang='vi' data-vi='Xin chào, rất vui được làm quen với bạn' data-jp='こんにちは。はじめまして。よろしくね～' onClick={handleDivClick}>
                    Xin chào, rất vui được làm quen với bạn
                    </div>
                    <div className='self' data-lang='vi' data-vi='Chào bạn, mình cũng vậy' data-jp='こちらこそ' onClick={handleDivClick}>
                    Chào bạn, mình cũng vậy
                    </div>
                    <div className='partner' data-lang='vi' data-vi='Mình tên là A, còn bạn thì sao' data-jp='私はAです。お名前は？' onClick={handleDivClick}>
                    Mình tên là A, còn bạn thì sao
                    </div>
                    <div className='self' data-lang='vi' data-vi='Tên mình là B' data-jp='Bです' onClick={handleDivClick}>
                    Tên mình là B
                    </div>
                    <div className='partner' data-lang='vi' data-vi='Bạn khoẻ không?' data-jp='お元 気ですか?' onClick={handleDivClick}>
                    Bạn khoẻ không?
                    </div>
                    <div className='self' data-lang='vi' data-vi='Tôi khỏe, còn bạn?' data-jp='元気です。あなたは？' onClick={handleDivClick}>
                    Tôi khỏe, còn bạn?
                    </div>

                </div>
                <div className='input-bar'>
                    <FaPlusCircle className='ic1' />
                    <FaCamera className='ic1' />
                    <FaImage className='ic1' />

                    <FaMicrophone className='ic1' />
                    <input type='text' placeholder='Aa'></input>
                    <IoSend className='ic1' />

                </div>
            </div>

        </div>
    );
};

export default Chat;
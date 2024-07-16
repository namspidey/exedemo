import React, { useState } from 'react';
import '../style/Chat.css';
import { FaChevronLeft, FaVideo, FaPlusCircle, FaCamera, FaImage, FaMicrophone } from "react-icons/fa";
import { IoCall, IoSend } from "react-icons/io5";
import axios from 'axios';

const translateToVietnamese = async (japaneseText) => {
  const url = 'https://api.mymemory.translated.net/get';

  try {
    const response = await axios.get(url, {
      params: {
        q: japaneseText,
        langpair: 'ja|vi'
      }
    });

    if (response.data.responseStatus === 200) {
      return response.data.responseData.translatedText;
    } else {
      throw new Error('Translation failed');
    }
  } catch (error) {
    console.error('Translation error:', error);
    return `[Translation Error: ${japaneseText}]`;
  }
};

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'partner', vi: 'Xin chào, rất vui được làm quen với bạn', jp: 'こんにちは。はじめまして。よろしくね～' },
        { id: 2, sender: 'self', vi: 'Chào bạn, mình cũng vậy', jp: 'こちらこそ' },
        { id: 3, sender: 'partner', vi: 'Mình tên là A, còn bạn thì sao', jp: '私はAです。お名前は？' },
        { id: 4, sender: 'self', vi: 'Tên mình là B', jp: 'Bです' },
        { id: 5, sender: 'partner', vi: 'Bạn khoẻ không?', jp: 'お元 気ですか?' },
        { id: 6, sender: 'self', vi: 'Tôi khỏe, còn bạn?', jp: '元気です。あなたは？' },
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const toggleLanguage = (currentLang) => {
        return currentLang === 'vi' ? 'jp' : 'vi';
    };

    const handleDivClick = (event) => {
        const currentLang = event.target.dataset.lang;
        const newLang = toggleLanguage(currentLang);
        event.target.dataset.lang = newLang;
        event.target.innerText = newLang === 'vi' ? event.target.dataset.vi : event.target.dataset.jp;
    };

    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
    };

    const handleSendMessage = async () => {
        if (inputMessage.trim() !== '') {
            try {
                const vietnameseTranslation = await translateToVietnamese(inputMessage);
                const newMessage = {
                    id: messages.length + 1,
                    sender: 'self',
                    jp: inputMessage,
                    vi: vietnameseTranslation
                };
                setMessages([...messages, newMessage]);
                setInputMessage('');
            } catch (error) {
                console.error('Error sending message:', error);
                // You might want to show an error message to the user here
            }
        }
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
                    {messages.map((message) => (
                        <div 
                            key={message.id}
                            className={message.sender}
                            data-lang='jp'
                            data-vi={message.vi}
                            data-jp={message.jp}
                            onClick={handleDivClick}
                        >
                            {message.jp}
                        </div>
                    ))}
                </div>
                <div className='input-bar'>
                    <FaPlusCircle className='ic1' />
                    <FaCamera className='ic1' />
                    <FaImage className='ic1' />
                    <FaMicrophone className='ic1' />
                    <input 
                        type='text' 
                        placeholder='日本語で入力してください'
                        value={inputMessage}
                        onChange={handleInputChange}
                    />
                    <IoSend className='ic1' onClick={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default Chat;
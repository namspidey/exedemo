
import '../style/Chat.css';
import { FaChevronLeft } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

import axios from 'axios';
import * as signalR from '@microsoft/signalr';
import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

const Chat = () => {
    
        const [connection, setConnection] = useState(null);
        const [messages, setMessages] = useState([]);
        const [message, setMessage] = useState('');
        const latestMessages = useRef(null);
        const token = localStorage.getItem('token')
        latestMessages.current = messages;

        useEffect(() => {
            // Fetch past messages
            const fetchMessages = async () => {
                try {
                    const response = await axios.get(
                        'https://lombeo-api-authorize.azurewebsites.net/authen/messenger/Get-Messages?contactId=2',
                        {
                            headers: {
                                'accept': '*/*',
                                'Authorization': `Bearer ${token}`
                            }
                        }
                    );
                    setMessages(response.data);
                } catch (error) {
                    console.error('Error fetching messages:', error);
                }
            };

            fetchMessages();

            // Set up SignalR connection
            const newConnection = new HubConnectionBuilder()
                .withUrl('https://lombeo-api-authorize.azurewebsites.net/chatHub') // Update with your server URL
                .withAutomaticReconnect()
                .build();

            setConnection(newConnection);
        }, []);

        useEffect(() => {
            if (connection) {
                connection.start()
                    .then(() => {
                        console.log('Connected!');

                        connection.on('ReceiveMessage', (user, message) => {
                            const updatedMessages = [...latestMessages.current];
                            updatedMessages.push({ user, message });
                            setMessages(updatedMessages);
                        });
                    })
                    .catch(e => console.log('Connection failed: ', e));
            }
        }, [connection]);

        const sendMessage = async () => {
            if (connection && message) {
                try {
                    await connection.invoke('SendMessage', 'User', message);
                    setMessage('');
                } catch (e) {
                    console.log('Send message failed: ', e);
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
                        {/* <div className='partner' data-lang='jp' data-vi='Xin chào, rất vui được làm quen với bạn' data-jp='こんにちは。はじめまして。よろしくね～' onClick={handleDivClick}>
                    こんにちは。はじめまして。よろしくね～
                    </div>
                    <div className='self' data-lang='jp' data-vi='Chào bạn, mình cũng vậy' data-jp='こちらこそ' onClick={handleDivClick}>
                    こちらこそ
                    </div>
                    <div className='partner' data-lang='jp' data-vi='Mình tên là A, còn bạn thì sao' data-jp='私はAです。お名前は？' onClick={handleDivClick}>
                    私はAです。お名前は？
                    </div>
                    <div className='self' data-lang='jp' data-vi='Tên mình là B' data-jp='Bです' onClick={handleDivClick}>
                    Bです
                    </div>
                    <div className='partner' data-lang='jp' data-vi='Bạn khoẻ không?' data-jp='お元 気ですか?' onClick={handleDivClick}>
                    お元 気ですか?
                    </div>
                    <div className='self' data-lang='jp' data-vi='Tôi khỏe, còn bạn?' data-jp='元気です。あなたは？' onClick={handleDivClick}>
                    元気です。あなたは？
                    </div> */}

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

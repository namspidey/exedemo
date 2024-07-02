import React, { useState } from 'react';
import '../style/Login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FaFacebook } from "react-icons/fa";

const Register = () => {
    const nav = useNavigate()

    const handleSubmit = async (values) => {
        try {
            
        let data = JSON.stringify({
            "username": values.username,
            "passwordHash": values.password,
            "email":values.email
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://lombeo-api-authorize.azurewebsites.net/authen/authen/sign-up',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = await axios(config);
        console.log(JSON.stringify(response.data));
        nav("/login")
        
        } catch (error) {
            console.log(error);
        }
     
    }

    return (
        <div className='register'>
            <div>
                <h2>Đăng ký</h2>
            </div>
            <div className='form'>
                <Formik initialValues={{ username: '',email:'', password: '' }}
                    onSubmit={handleSubmit}>
                    <Form>
                        <div className='form-group'>
                            <Field name='username' type="text" className="form-control " placeholder="Tên đăng nhập" />
                        </div>
                        <div className='form-group'>
                            <Field name='email' type="email" className="form-control " placeholder="Email" />
                        </div>
                        <div className='form-group'>
                            <Field name='password' type="password" className="form-control" placeholder="Mật khẩu" />
                        </div>
                        <div className='btn'>
                        <button type='submit' className='button-29' role='button'><span className="text">Đăng ký</span></button>
                        </div>
                        
                    </Form>
                </Formik>
                <div className='info'>
                            <div className='info1'>
                                <div className='line'> </div>
                                <div className='or'>Hoặc</div>
                                <div className='line'> </div>
                            </div>
                            <div className='info2'>
                                <div>
                                    <button className='btnn'>
                                        <FaFacebook className='btn-icon'/>
                                      Facebook</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className='txt'>
                                <p>Khi đăng ký trên Dekiru, bạn đã đồng ý với <b>Các <br></br>chính sách</b> và <b>Chính sách bảo mật</b> của chúng tôi.</p>
                            </div>
            </div>
        </div>
    );
};

export default Register;
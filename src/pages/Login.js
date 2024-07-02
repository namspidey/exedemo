import React, { useState } from 'react';
import '../style/Login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



const Login = ({ setIsLogin }) => {

    const nav = useNavigate()
    const [err, setErr] = useState(false)
    const [errText, setErrText] = useState('')

    const handleSubmit = async (values) => {
        try {
            
        let data = JSON.stringify({
            "username": values.username,
            "password": values.password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://lombeo-api-authorize.azurewebsites.net/authen/authen/sign-in',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = await axios(config);
        console.log(JSON.stringify(response.data));
        nav("/")
        localStorage.setItem('token', JSON.stringify(response.data.data))
        localStorage.setItem('isLogin', true)
        setIsLogin(true)
        } catch (error) {
            console.log(error);
        }
     
    }


    return (
        <div className='login'>
            <div>
                <h2 className='tieude'>Đăng nhập</h2>
            </div>
            <div className='form'>
                <Formik initialValues={{ username: '', password: '' }}
                    onSubmit={handleSubmit}>
                    <Form>
                        <div className='form-group'>
                            <Field name='username' type="text" className="form-control" placeholder="Tên đăng nhập" />
                        </div>
                        <div className='form-group'>
                            <Field name='password' type="password" className="form-control" placeholder="Mật khẩu" />
                        </div>
                        <div className='btn'>
                            <button type='submit' className='button-29' ><span className="text">Đăng nhập</span></button>
                           
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
                                <div>
                                    <button className='btnn'><FcGoogle className='btn-icon'/>
                                    Google</button>
                                </div>
                            </div>

                            <div className='txt'>
                                <p>Khi đăng ký trên Dekiru, bạn đã đồng ý với <b>Các <br></br>chính sách</b> và <b>Chính sách bảo mật</b> của chúng tôi.</p>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import '../auth/Login.css';
import {Link} from 'react-router-dom';
import { DASHBOARD, REGISTER } from '../../lib/routes';
import {useLogin} from '../../hooks/auth';
import {useForm} from "react-hook-form";
import { emailValidate, passwordValidate } from '../../utils/forum-validate';
import Popup from '../Popup/Popup';


export default function Login() {
    const [showPopup, setShowPopup] = useState(false);
    const {login, isLoading} = useLogin();
    const {register, handleSubmit, reset} = useForm();

    async function handleLogin(data) {
       const succeeded = await login({
            email: data.email,
            password: data.password,
            redirectTo: DASHBOARD
        });
        setShowPopup(true);
        if (succeeded) reset();
    }

    const closePopup = () => {
        setShowPopup(false);
    };

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [emailError, setEmailError] = useState('');
    // const [passwordError, setPasswordError] = useState('');

    // const handleEmailBlur = () => {
    //     // Check if the email is invalid
    //     if (!email) {
    //         setEmailError('Email is required.');
    //     } else if (!isValidEmail(email)) {
    //         setEmailError('Invalid email.');
    //     } else {
    //         setEmailError('');
    //     }
    // };

    // const handlePasswordChange = (e) => {
    //     const newPassword = e.target.value;
    //     setPassword(newPassword);

    //     // Check if the password is less than 5 characters
    //     if (newPassword.length > 0 && newPassword.length < 5) {
    //         setPasswordError('Password not long enough.');
    //     } else {
    //         setPasswordError('');
    //     }
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     // Check if the password is invalid
    //     if (!password) {
    //         setPasswordError('Password is required.');
    //     } else if (password.length < 5) {
    //         setPasswordError('Password not long enough.');
    //     } else {
    //         setPasswordError('');
    //         // Your login logic goes here
    //     }
    // };

    // const isValidEmail = (email) => {
    //     // Add your email validation logic here
    //     // For simplicity, this example checks for the presence of an '@' symbol
    //     return email.includes('@');
    // };

    return (
        <div className="center-container">
            <div className="box-container">
                <h2 className="heading">Log In</h2>

                <form id="loginForm" onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" placeholder="user@email.com" required {...register('email', emailValidate)}/>
                        <div className="form-error-message" id="emailError"></div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" placeholder="password123" required {...register('password', passwordValidate)} />
                        <div className="form-error-message" id="passwordError"></div>
                    </div>

                    <button type="submit" className="submit-button" id="submitButton">
                        Log In
                    </button>

                    {showPopup && (
                        <Popup
                            title="Login Failed"
                            message="Invalid email or password. Please try again."
                            onClose={closePopup}
                        />
                    )}
                </form>

                <p className="additional-info">
                    Don't have an account?&nbsp;
                        <Link to={REGISTER} className="register-link">Register</Link>
                    &nbsp;instead!
                </p>
            </div>
        </div>
    );
};
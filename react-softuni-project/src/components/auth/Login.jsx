import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useLogin } from '../../hooks/auth';
import { useForm } from "react-hook-form";
import { DASHBOARD, REGISTER } from '../../lib/routes';
import { emailValidate, passwordValidate } from '../../utils/form-validate';
import '../auth/Login.css';

export default function Login() {
    const { login, isLoading } = useLogin();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();

    console.log('Error data:', errors);

    async function handleLogin(data) {
        console.log('Login form data:', data);
        try {
            const succeeded = await login({
                email: data.email,
                password: data.password,
                redirectTo: DASHBOARD,
            });
            console.log('Login successful!'); // Log success
            if (succeeded) reset();
        } catch (error) {
            console.error('Login error:', error); // Log the error

        }
    }

    console.log('isLoading:', isLoading);


    return (
        <div className="center-container">
            <div className="box-container">
                <h2 className="heading">Log In</h2>

                <form onSubmit={handleSubmit(handleLogin)} className="form">
                    <div className="form-control">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="user@email.com"
                            {...register("email", emailValidate)}
                        />
                        {errors.email && <span className="form-error-message">{errors.email.message}</span>}
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="password123"
                            {...register("password", passwordValidate)}
                        />
                        {errors.password && <span className="form-error-message">{errors.password.message}</span>}
                    </div>
                    <button className="submit-button" type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging In' : 'Log In'}
                    </button>
                </form>

                <p className="additional-info">
                    Don't have an account?{' '}
                    <a href={REGISTER} className="register-link">
                        Register
                    </a>{' '}
                    instead!
                </p>

            </div>
        </div>
    );
};
import React from 'react';
import { useRegister } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { DASHBOARD, LOGIN } from '../../lib/routes';
import { emailValidate, passwordValidate, usernameValidate } from '../../utils/forum-validate';
import '../auth/Login.css';

export default function Register() {
  const { register: signup, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
   } = useForm();
   
  async function handleRegister(data) {
    console.log('Signup data:', data);
    try {
        await signup({
        username: data.username,
        email: data.email,
        password: data.password,
        redirectTo: DASHBOARD,
      });
      console.log('Signup successful!'); // Log success
    } catch (error) {
      console.error('Signup error:', error); // Log the error
    }
    // signup({
    //   username: data.username,
    //   email: data.email,
    //   password: data.password,
    //   redirectTo: DASHBOARD,
    // });
  }

  console.log('isLoading:', isLoading);

  return (
    <div className="center-container">
      <div className="box-container">
        <h2 className="heading">Register</h2>

        <form onSubmit={handleSubmit(handleRegister)} className="form">
          <div className="form-control">
            <label>Username</label>
            <input
              placeholder="Username"
              {...register("username", usernameValidate)}
            />
            {errors.username && <span className="form-error-message">{errors.username.message}</span>}
          </div>
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
            {isLoading ? 'Signing Up' : 'Register'}
          </button>
        </form>

        <p className="additional-info">
          Already have an account?{' '}
          <a href={LOGIN} className="register-link">
            Login
          </a>{' '}
          instead!
        </p>
      </div>
    </div>
  );
};

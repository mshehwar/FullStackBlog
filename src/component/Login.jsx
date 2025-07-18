
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();

  const login = async (data) => {
    setError('');
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 sm:p-10 border border-gray-200">
        <div className="flex justify-center mb-6">
          <div className="w-24">
            <Logo width="100%" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link
            to="/signup"
            className="text-primary hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>

        {error && (
          <p className="text-red-600 mt-6 text-center text-sm font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-8 space-y-6">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register('email', {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  'Email address must be a valid address',
              },
            })}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register('password', {
              required: true,
            })}
          />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

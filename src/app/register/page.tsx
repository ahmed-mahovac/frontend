"use client";

import React, { useState } from 'react';
import InputField from '../../components/InputField';
import { register } from '../api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      console.log('Register with:', { name, email, password });
      register({ name, email, password, confirmPassword }).then((res) => {
        console.log('Register response:', res);
      }).catch((err) => {
        console.log('Register error:', err);
      });
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6">Register</h2>

        <InputField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <InputField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
        />

        {!passwordsMatch && (
          <p className="text-red-500 text-sm mb-4">Passwords do not match. Please try again.</p>
        )}

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Register
          </button>
        </div>

        <p className="text-sm text-gray-600">
          Already have an account? <a href="/login">Log in</a>.
        </p>
      </form>
    </div>
  );
};

export default Register;
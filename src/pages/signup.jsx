// src/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSignup = async () => {
  //   try {
  //     // Replace the URL with your Golang API endpoint
  //     const response = await axios.post('http://127.0.0.1:4000/auth/signup', {
  //       email,
  //       password,
  //     });

  //     console.log('Signup successful:', response.data);
  //     // You can redirect the user or perform other actions upon successful signup
  //   } catch (error) {
  //     console.error('Error signing up:', error.message);
  //     // Handle errors, such as displaying a message to the user
  //   }
  // };
  const handleSignup = async () => {
    try {
      const userData = {
        email,
        password,
        phone: "+1234567891",
        firstname: "Johnny",
        lastname: "Anthony",
        birthday: {
          day: 15,
          month: 3,
          year: 1990
        },
        address: "123 Main St, Cityville",
        username: "john",
      };
  
      // Replace the URL with your Golang API endpoint
      const response = await axios.post('http://127.0.0.1:4000/auth/signup', userData);
  
      console.log('Signup successful:', response.data);
      // You can redirect the user or perform other actions upon successful signup
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle errors, such as displaying a message to the user
    }
  };
  

  return (
    <div>
      <h1>Signup</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;

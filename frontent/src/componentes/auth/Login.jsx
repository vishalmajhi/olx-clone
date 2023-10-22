import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import axios from 'axios';

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      if (!formData.email || !formData.password) {
        console.log('Please fill in both email and password.');
        return;
      }

      const response = await axios.post('http://localhost:5000/api/v1/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        const data = response.data;
        console.log('Login Successful');
      } else {
        console.log('Login Failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <button class="bg-blue-500 text-white p-2 rounded" onClick={openModal}>
        Login
      </button>

      {isModalOpen && (
        <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-80">
          <div class="bg-white h-[35rem] w-[22rem] p-4 rounded-lg relative">
            <button
              class="absolute top-2 right-2 text-gray-500"
              onClick={closeModal}
            >
              <span>
                <FiX size={30} />
              </span>
            </button>
            <div class="text-center mb-4">
              <h1 class="text-black text-3xl font-bold mt-9">OLX</h1>
            </div>
            <div>
              <h2 class="text-black text-lg mb-2 text-center">
                Enter your email to login
              </h2>
              <input
                type="email"
                class="input-style"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-9 mx-auto w-full h-9"
              />
              <input
                type="password"
                class="input-style"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-9 mx-auto w-full h-9"
              />
              <button
                class="btn-style mx-auto block w-full mt-20 h-11 bg-black text-white"
                onClick={handleLogin}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

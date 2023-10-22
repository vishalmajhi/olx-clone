import React, { useState } from 'react';
import { FiX } from "react-icons/fi";
import axios from 'axios';

function Registration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
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

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) { // Changed the status code to 201 for successful registration
        const data = response.data;
        console.log("Register Successful", data);
      } else {
        console.log("Registration Failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={openModal}>
        Registration
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-80">
          <div className="bg-white h-[35rem] w-[22rem] p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closeModal}
            >
              <FiX size={30} />
            </button>
            <div className="text-center mb-4">
              <h1 className="text-black text-3xl font-bold">OLX</h1>
            </div>
            <div>
              <h2 className="text-black text-lg mb-2 text-center">
                Register yourself
              </h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-style"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-style"
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-style"
                placeholder="Password"
                required
              />
              <button
                className="btn-style mx-auto block w-full mt-20 h-11 bg-black text-white"
                onClick={handleRegistration}
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

export default Registration;

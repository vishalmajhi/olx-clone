import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Header(props) {
  const [loc, setLoc] = useState(null);
  const [showOver, setShowOver] = useState(false); // Renamed to match camelCase convention

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  }

  let locations = [
    {
      latitude: 28.6139,
      longitude: 77.2090,
      placeName: 'New Delhi, Delhi',
    },
    {
      latitude: 19.0760,
      longitude: 72.8777,
      placeName: 'Mumbai, Maharashtra',
    },
  ];

  return (
   <>
   </>
  );
}

export default Header;

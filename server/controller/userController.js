const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Handle user registration
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    // Hash the user's password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id, email: newUser.email }, process.env.SECRET_KEY, {
      expiresIn: '1h', // Token expiration time
    });

    // Respond with a success message and the JWT token
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};


// Handle user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // If the user is not found, return an error
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

   // Compare the provided password with the stored hashed password
const passwordMatch = await bcrypt.compare(password, user.password);

if (!passwordMatch) {
  return res.status(401).json({ error: 'Password does not match' });
}

    // If the password matches, create a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY, // Replace with a secure secret key
      { expiresIn: '1h' } // Token expiration time
    );

    res.status(201).json({ message: 'Authentication successful', token });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
};
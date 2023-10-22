const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String, // Store the URL of the uploaded image
  },
  location: {
    city: String,
    state: String,
    street: String,
  },
  // Add other fields as needed (e.g., user reference, image URLs, etc.).
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

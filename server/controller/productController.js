const Product = require('../model/productmodel');

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, category, imageUrl, location } = req.body;
    
    // Create a new Product instance with the provided data
    const product = new Product({
      title,
      description,
      price,
      category,
      imageUrl, // Assign the URL of the uploaded image
      location, // Assign the location object with city, state, street, etc.
      // Set other fields as needed (e.g., user reference).
    });
    
    // Save the product to the database
    await product.save();
    
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a product listing.' });
  }
}

//get product

exports.getallproduct=async(req,res)=>{
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch product listings.' });
  }
}

//get product by id

exports.productbyId=async(req,res)=>{

  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch the product.' });
  }


}

//update product by id

exports.updateproductbyId=async(req,res)=>{



  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update the product listing.' });
  }



}


//delete product by id

exports.deleteproductbyId=async(req,res)=>{
  try {
    const product = await Product.findByIdAndRemove(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the product listing.' });
  }
  

}




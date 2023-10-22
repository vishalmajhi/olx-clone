// const mongoose = require('mongoose');

// // Replace 'your_database_url' with your MongoDB connection URL
// const dbUrl = ' mongodb+srv://vishalmajhi33:poco2003@olx-data.iquxdtd.mongodb.net/';

// // Connect to the MongoDB database
// mongoDB.connect(dbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');

//     // Define and use Mongoose models here
//   })
//   .catch((error) => {
//     console.error('Connection to MongoDB failed:', error);
//   });

//   module.exports=mongoDB;
const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://vishalmajhi33:poco2003@olx-data.iquxdtd.mongodb.net/'

async function mongoDb() {
    try {
        await mongoose.connect(mongoUrl, { useNewUrlParser: true });
        console.log("connected");
        
    } catch (err) {
        console.log("not connected", err);
    }
}

module.exports = mongoDb;
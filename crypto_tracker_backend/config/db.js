const mongoose = require('mongoose');

// const uri = 'mongodb://127.0.0.1:27017/cryptoDB';
const uri = 'mongodb+srv://90360saurabh:nuFAhbkz7eiMb2Se@cluster0.2pdrn0k.mongodb.net/cryptoDB';

async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB...');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports = connectDB;
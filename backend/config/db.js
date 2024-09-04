const mongoose = require('mongoose');

const Connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB ${mongoose.connection.host}`);

    } catch (error) {
        console.log(`MongoDB Connection Error ${error}`);

    }
}

module.exports = Connectdb;
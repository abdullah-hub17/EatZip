const mongoose = require('mongoose');

const Connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${mongoose.connection.host}`);

        // fetched database data => food_items
        const foodItemsCollection = mongoose.connection.db.collection('food_items');
        const fetchedItemData = await foodItemsCollection.find({}).toArray();
        global.food_items = fetchedItemData;
        //console.log(global.food_items);

        // fetched database data => foodCategory
        const foodCategoryCollection = mongoose.connection.db.collection('foodCategory');
        const fetchedCategoryData = await foodCategoryCollection.find({}).toArray();
        global.foodCategory = fetchedCategoryData;
        //console.log(global.foodCategory);

    } catch (error) {
        console.log(error);
    }

}
module.exports = Connectdb;
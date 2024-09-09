const mongoose = require('mongoose');

// Food Data Controller
const foodDataController = async (req, res) => {
    try {

        res.send([global.food_items, global.foodCategory]);

    } catch (error) {
        console.log("Error Food Data API");
        res.status(500).send({
            success: false,
            error
        })
    }
}

module.exports = { foodDataController }
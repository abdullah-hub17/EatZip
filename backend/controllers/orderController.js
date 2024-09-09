const Order = require("../model/orderSchema");

// Order Data Controller
const orderDataController = async (req, res) => {
    try {
        let data = req.body.order_data;
        await data.splice(0, 0, { Order_date: req.body.order_date })

        // check email is not existing 
        let eID = await Order.findOne({ 'email': req.body.email });
        console.log(eID);

        // if user is null then create
        if (eID === null) {
            try {
                // Store Order data in DataBase
                await Order.create({
                    email: req.body.email,
                    order_data: [data]
                }).then(() => {
                    res.status(201).json({
                        success: true,
                        message: "Order Data Added Successfully"
                    });
                })
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Server Error",
                    error
                });
            }

        } else {
            try {
                await Order.findOneAndUpdate({ email: req.body.email }, { $push: { order_data: data } }).
                    then(() => {
                        res.status(201).json({
                            success: true,
                            message: "Order Data Added Successfully"
                        });
                    })

            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Server Error",
                    error
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Error in Order Data API ",
            error
        })
        console.log(error);
    }
}

// My Order Data Controller 
const myOrderDataController = async (req, res) => {
    try {
        const myData = await Order.findOne({ 'email': req.body.email });
        res.status(200).json({
            success: true,
            orderData: myData
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Error in MY Order Data API ",
            error
        })
        console.log(error);
    }
}
module.exports = { orderDataController, myOrderDataController }
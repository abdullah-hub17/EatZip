const express = require('express')
const dotenv = require("dotenv");
const morgan = require('morgan');
const Connectdb = require('./config/db');

// dotenv path
dotenv.config({ path: './config/.env' });

Connectdb();

const app = express()

// Solved Cors problem
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-with, Content-Type,  Accept"
    );
    next();
})
app.use(express.json());

app.use(morgan("dev"));

// test data
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// create user API
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/DisplayDataRoutes"));
app.use("/api", require("./routes/orderRoutes"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


const db = require('./config/db');
//console.log(global.food_items);
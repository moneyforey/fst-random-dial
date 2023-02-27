const { default: mongoose } = require("mongoose");
require('dotenv').config();

const url = process.env.url;
const dbConnect =async()=>{
    return await mongoose.connect(url);
}

module.exports = dbConnect;
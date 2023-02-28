const { default: mongoose } = require("mongoose");
require('dotenv').config();

const {url} = process.env;
const dbConnect =async()=>{
    return await mongoose.connect(url);
}

module.exports = dbConnect;
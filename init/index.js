const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
async function main(){
    await mongoose.connect(MONGO_URL);
};

main().then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
});

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,owner:"684b3fe58788e1b8f14e7814"
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was Initialized");
};
initDB();
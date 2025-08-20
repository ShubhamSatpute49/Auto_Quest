import mongoose from "mongoose";
const mongooseConnnection = mongoose.connect("mongodb://127.0.0.1:27017/AutoQuest")
    .then(() => {
    console.log("Connected to mongoose succesfully");
    })
    .catch((err) => {
    console.log("Error in mongoose connnection "+err);
    })

export default mongooseConnnection;
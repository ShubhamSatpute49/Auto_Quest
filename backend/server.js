import express from "express"
import mongooseConnnection from "./db.js";

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, (err) => {
    if (err)
        console.log(`Err in express server start ${err}`);
    console.log("Express server started succesfully");   
})
import express from "express"
import mongooseConnnection from "./db.js";
import ownerRouter from "./routes/owner.js"
import cors from "cors"

const app = express();
const PORT = 8000;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || "Something went wrong",
        error: process.env.NODE_ENV === "production" ? {} : err
    });
});

app.use("/owner", ownerRouter);
app.listen(PORT, (err) => {
    if (err)
        console.log(`Err in express server start ${err}`);
    console.log("Express server started succesfully");   
})
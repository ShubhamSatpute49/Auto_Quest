import mongoose from "mongoose";

const schema = mongoose.Schema({
    brandName: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Brand",
    },
    showroomId: {
        type: mongoose.Schema.Types.ObjectId,
      ref :"Showroom",  
    },
    model: {
        type: String,
        required: [true, "Model is required"],
        trim:true,
    },
    price: {
        type: Number,
        required: true,
        min:[0,"Price should be grater than 0"],
    },
    discount: {
        type: Number,
        default:0,
        max:[5,"Discount should be less than 5%"]
    },
    stock: {
        type: Number,
        default: 0,
    },
})

const Car = mongoose.model("Car", schema);
export default Car;
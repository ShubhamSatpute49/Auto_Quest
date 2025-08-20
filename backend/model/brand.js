import mongoose from "mongoose";

const schema = mongoose.Schema({
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Brand"
    },
    brandName: {
        type: String,
        required: [true, "Brand name is required"],
        unique: [true, "Brand name must be unique enter another one"],
        minlength:[4,"Brand name should atleast contain 4 chars"],
    },
    showrooms: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Showroom",
    },
    logo: {
        type:String,
    },
    description: {
        type: String,
        minlength:[20,"Description must be grater than 20 characters"]
    },
    ceoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Brand = mongoose.model("Brand", schema);
export default Brand;
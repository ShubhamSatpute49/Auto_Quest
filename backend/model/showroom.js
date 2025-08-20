import mongoose from "mongoose";

const schema = mongoose.Schema({
    showroomName: {
        type: String,
        required: [true,"showroom Name is required"]
    },
    brandId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
    },
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    otherStaff: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]
})

const Showroom = mongoose.model("Showroom", schema);
export default Showroom;
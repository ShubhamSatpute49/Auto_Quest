import mongoose from "mongoose";

const schema = mongoose.Schema({
    showroomName: {
        type: String,
        required: [true,"showroom Name is required"]
    }
})

const Showroom = mongoose.model("Showroom", schema);
export default Showroom;
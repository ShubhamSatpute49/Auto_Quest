import mongoose from "mongoose";

const schema = mongoose.Schema({
    empName: {
        type: String,
        required: [true, "Enter valid emloyee name"],
        minlength: [5, "Name should be bigger than 5 characters"],
        trim:true,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    showroomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Showroom"
    }
})

const Employee = mongoose.model("Employee", schema);
export default Employee;
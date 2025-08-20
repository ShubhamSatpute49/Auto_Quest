import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [5, "Name should contain atleast 5 characters"],
        maxlength: [50, "Name should not excced 50 characters"],
        trim:true,
    },
    role: {
        type: String,
        required: [true, "role is required"],
        enum:["owner","ceo","manager","employee","others"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "Email alredy exist. Enter unique one."],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    profileImage: {
        type: String,
    },
    joinDate: {
        type: Date,
        default:Date.now,
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: function () {
            return this.role==="ceo"
        }
    },
    showroomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Showroom",
        required: function () {
            return ["manager","employee","others"].includes(this.role)
        }
    },
})

const User = mongoose.model("User", schema);
export default User;
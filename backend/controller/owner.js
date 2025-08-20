import User from "../model/user.js"
import multer from "multer";
import bcrypt from "bcrypt";
import Brand from "../model/brand.js";
import mongoose from "mongoose";
import Showroom from "../model/showroom.js";

const storage = multer.memoryStorage();
const upload=multer({storage})
const addCeo = async (req, res,next) => {
    try {
        let { name, role, email, password, brandName } = req.body;
        if (!name || !role || !email || !password) {
            res.status(400).json("Please enter all fields");
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const base64 = req.file ? req.file.buffer.toString("base64") : null
        //find brand and set brand id to resp ceo
        let brand = await Brand.findOne({ brandName });
        if (!brand) {
            return res.status(400).json(`${brandName} not found`)
        }
        let brandId = brand._id;
        let newCeo = new User({
            name,
            role,
            email,
            password: hashedPassword,
            profileImage: base64,
            brandId
        })
        await newCeo.save();
        //update ceo id in brand schema
        await Brand.updateOne({ _id:brandId },{ ceoId: newCeo._id })        
        res.status(200).json(`CEO ${name} added succesfully`)
    } catch (err) {
        let error = new Error(`Falied to add ceo ${err}`);
        error.status = 400;
        next(error);
    }
}

const addBrand = async (req, res)=>{a
    try {
        const { brandName, logo, description } = req.body;
        const base64 = req.file ? req.file.buffer.toString("base64") : null;
        const newBrand = new Brand({
            brandName,
            description,
            logo: base64,
        })
        await newBrand.save();
        res.status(200).json("New brand " + brandName + " is added to db");
    } catch (err) {
        let error = new Error(`Falied to add brand ${err}`);
        error.status = 400;
        next(error);
   }
}

const allShowRoomData = async (req, res,next) => {
    try {
        let data = await Showroom.find();
        res.json(data);
    } catch (err) {
        const error = new Error("Failed to get all ShowRoom Data");
        error.status=400;
        next(error);
   }
}

const getAllBrands = async (req, res,next) => {
    try {
        const data = await Brand.find();
        res.status(200).json(data);
    } catch (err) {
        let error = new Error(`Failed to get all brands data ${err}`)
        error.status=400;
        next(error);
    }
}

const getAllCeos = async (req, res, next) => {
    try {
        let data = await User.find({ role: "ceo" }).populate("brandId").populate("showroomId");
        res.status(200).json(data);
    } catch (err) {
        let error = new Error(`Error in get all ceos ${err}`);
        error.status = 400;
        next(error)
    }
}
export {
    upload,
    addCeo,
    addBrand,
    allShowRoomData,
    getAllBrands,
    getAllCeos,

}
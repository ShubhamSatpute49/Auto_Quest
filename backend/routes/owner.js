import express from "express";
import { addBrand, addCeo, upload, allShowRoomData, getAllBrands, getAllCeos } from "../controller/owner.js";

const router = express.Router();
router.post("/addCeo", upload.single('profileImage'), addCeo);
router.post("/addBrand", upload.single('logo'), addBrand);

router.get("/allShowRoomData", allShowRoomData);
router.get("/getAllBrands", getAllBrands);
router.get("/getAllCeos", getAllCeos);
export default router;

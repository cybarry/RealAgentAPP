import express, { Router } from "express";
import { allFav, bookVisit, cancelBooking, createUser, getAllBookings, toFav } from "../controllers/userCntrl.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBooking/:id", cancelBooking)
router.post("/toFav/:rid", toFav)
router.post("/allFav", allFav)

export { router as userRoute } 
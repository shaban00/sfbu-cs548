import express from "express";
import customLogger from "../middlewares/logger.js";
import { getAllInfo, getInfoByFieldName } from "../controllers/github.js";

const router = express.Router();

// Custom logger middleware
router.use(customLogger);

// Route for getting info
router.get("/github", getAllInfo);

// Route for getting info based on field name
router.post("/github", getInfoByFieldName);

export default router;

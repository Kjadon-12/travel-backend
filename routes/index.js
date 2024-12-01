import express from "express";
const router = express.Router();
import searchEngineRoutes from "./searchEngine.routes.js";


router.use("/search", searchEngineRoutes);

export default router;
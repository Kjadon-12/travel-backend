import express from "express";
const router = express.Router();
import searchEngineRoutes from "./searchEngine.routes.js";
import addFlightRoute from "./addFlight.routes.js";

router.use("/search", searchEngineRoutes);
// router.use("/add-flight", addFlightRoute);

export default router;

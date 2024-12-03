import express from "express";
import { autoSuggest } from "../controller/searchEngine.controllers.js";
import { schemaAutoSuggest } from "../validations/validation.js";
import validate from "../middlewares/validate.js";
import { addFlight } from "../controller/addFlight.controller.js";
import { upload } from "../middlewares/multer.js";
import { uploadToCloud } from "../middlewares/uploadToCloud.js";


const router = express.Router();
const addFlightRoute = express.Router();


addFlightRoute.post(
  "/",
  upload.single("img"),
  uploadToCloud(),
  // validate(schemaAutoSuggest),
  addFlight
);

export default addFlightRoute;

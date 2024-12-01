import express from "express";
import { autoSuggest } from "../controller/searchEngine.controllers.js";
import { schemaAutoSuggest } from "../validations/validation.js";
import validate from "../middlewares/validate.js";
const router = express.Router();
const searchEngineRoutes = express.Router();


// auto suggest city
searchEngineRoutes.get("/autosuggest", validate(schemaAutoSuggest) , autoSuggest);


export default searchEngineRoutes;
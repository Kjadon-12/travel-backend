import { findAirportsByCity } from "../services/searchEngine.services.js";
import httpStatus from "http-status";

export const autoSuggest = async (req , res) => {
    const {cityName , region} = req?.query;
    const result = await findAirportsByCity(cityName);
    if(!result || result?.length === 0)  return res.status(httpStatus.NOT_FOUND).json({
      message: "City(Airport) not found"
    });
    
    res.send(result);
}
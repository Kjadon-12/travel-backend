import { findAirportsByCity } from "../services/searchEngine.services.js";


export const autoSuggest = async (req , res) => {
    const {cityName , region} = req?.query;
    const result = await findAirportsByCity(cityName);
    
    res.send(result);
}
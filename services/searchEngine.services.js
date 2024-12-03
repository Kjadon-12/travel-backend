import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to find airports by partial city name
async function findAirportsByCity(cityName = '') {  
    console.log("cityName",cityName);
    try {

        const airports = await prisma.airport.findMany({
            where: {
                cityName: {
                    // Case-insensitive partial match
                    contains: cityName,   // Match any city name containing 'cityName' as substring
                    mode: 'insensitive',  // Case-insensitive search
                },
            },
            take:8,
        });

        return airports;  // Return the list of airports
    } catch (error) {
        console.error('Error fetching airports by city:', error);
        throw new Error('Failed to fetch airports');
    }
}

export { findAirportsByCity };

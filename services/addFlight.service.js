export const addFlightService = async (flightDetail) => {
  const result = await prisma.flights.create({ data: flightDetail });
  return result;
};

import { Airport } from "@/types/Airport";
import axios from "axios"

export const getMetarDataByIcaoCode = async (
  icaoCode: string,
  airportList: Airport[],
  setAirportList: (airportList: Airport[]) => void,
  setShowModal: (showModal: string) => void
): Promise<void> => {
  const icaoCodeExists = airportList.some(x => x.icao === icaoCode.toUpperCase());
  if (!icaoCodeExists) {
    const url = "/api/" + icaoCode
    try {
      const response = await axios.get<Airport>(url)
      const newAirport = response.data
      setAirportList([...airportList, newAirport])
    } catch (error) {
      setShowModal("There was an issue retrieving airport data.");
    }
  } else {
    setShowModal("The Metar data for this ICAO code has already been retrieved");
  }
}
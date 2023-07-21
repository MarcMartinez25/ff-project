import React from "react"
import { Airport } from "@/types/Airport"
import MetarInfoRow from "./MetarInfoRow"
import Forecast from "./Forecast"
import CardHeader from "./CardHeader"

type Props = {
  airport: Airport
}

const MetarCard = ({ airport }: Props) => {
  return (
    <div className="flex flex-grow justify-center mt-4 mx-4">
      <div className="flex flex-col justify-between rounded-lg p-4 text-white bg-gradient-to-b from-blue-600 from-30% to-purple-600 shadow-2xl w-full md:w-5/8">
        <CardHeader airport={airport} />
        <div className="flex">
          <div className="m-4 flex-grow">
            <p className="text-2xl pb-2">Weather</p>
            <MetarInfoRow title="Wind Speed:" content={airport.windSpeedMPH + " MPH"} />
            <MetarInfoRow title="Wind Direction:" content={airport.windDirection} />
            <MetarInfoRow title="Visibility:" content={airport.visibility + " SM"} />
            <MetarInfoRow title="Humidity:" content={airport.relativeHumidity + "%"} />
            <MetarInfoRow title="Cloud Coverage:" content={airport.cloudCoverage} />
            <MetarInfoRow title="Runway In Use:" content={airport.runwayInUse} />
          </div>
          <div className="m-4 flex-grow">
            <p className="text-2xl pb-2">Forecasts</p>
            {airport.forecastReports.map((forecast) => (
              <Forecast forecast={forecast} key={forecast.dateIssued}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetarCard
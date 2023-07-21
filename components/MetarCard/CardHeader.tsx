import { Airport } from "@/types/Airport"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faCompass } from "@fortawesome/free-regular-svg-icons"

type Props = {
  airport: Airport
}

const CardHeader = ({ airport }: Props) => {
  return (
    <div className="mb-4">
      <div className="flex items-baseline">
        <p className="text-2xl">{airport.name}</p>
        <p className="text-xs text-gray-300 ml-1">{airport.icao}</p>
      </div>
      <p className="text-xs text-gray-300">{airport.location}</p>
      <div className="flex items-baseline text-xs text-gray-300">
        <p>
          <FontAwesomeIcon icon={faCalendarDays} className=" mr-1" />
          {airport.time.slice(0, -14)} {airport.time.slice(11, -8)}Z
        </p>
        <p className="ml-2">
          <FontAwesomeIcon icon={faCompass} className=" mr-1" />
          {airport.latitude}, {airport.longitude}
        </p>
      </div>
    </div>
  )
}

export default CardHeader
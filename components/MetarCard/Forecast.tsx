import { ForecastReport } from '@/types/ForecastReport'
import React from 'react'
import MetarInfoRow from './MetarInfoRow'

type Props = {
  forecast: ForecastReport
}

const Forecast = ({ forecast }: Props) => {
  return (
    <div className='mb-2'>
      <p>{forecast.dateIssued.slice(0,-5)}</p>
      <div className='pl-6'>
        <MetarInfoRow title='Time Offset:' content={forecast.timeOffset} />
        <MetarInfoRow title='Wind Speed:' content={forecast.windSpeedMPH} />
        <MetarInfoRow title='Wind Direction:' content={forecast.windDirection} />
      </div>
    </div>
  )
}

export default Forecast
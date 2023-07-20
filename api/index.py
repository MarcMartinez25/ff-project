from fastapi import FastAPI
import requests
from requests.auth import HTTPBasicAuth
import json
from datetime import datetime

app = FastAPI()

NO_DATA_MESSAGE = 'Unable to get data'

conditions_headers = {'ff-coding-exercise': '1'}
airport_data_headers = {'ff-coding-exercise': '1'}
auth_user = HTTPBasicAuth('ff-interview', '@-*KzU.*dtP9dkoE7PryL2ojY!uDV.6JJGC9')


@app.get("/api/{icao_code}")
async def get(icao_code: str):
    conditions_url = 'https://qa.foreflight.com/weather/report/' + icao_code
    airport_data_url = 'https://qa.foreflight.com/airports/' + icao_code

    conditions_response = requests.get(conditions_url, headers=conditions_headers)
    airport_conditions = conditions_response.json()

    airport_response = requests.get(airport_data_url, headers=airport_data_headers, auth = auth_user)
    airport_data = airport_response.json()

    return Airport(
        airport_conditions['report']['conditions'],
        airport_conditions['report']['forecast']['conditions'],
        airport_data
    )


class Airport:

    def convert_to_fahrenheit(self, celcius_value):
        return celcius_value * 1.8 + 32
    
    def get_list_of_runways(self, runways):
        runway_list = []
        for runway in runways:
            runway_list.append(runway['magneticHeading'])
            runway_list.append(runway['recipMagneticHeading'])
        
        return runway_list
    
    def find_best_runway(self, wind_direction, runways):
        differences = []
        for runway in runways:
            differences.append(abs(wind_direction - runway) % 360)

        best_runway = runways[differences.index(min(differences))]
        best_runway = str(best_runway)[:-1]
        return best_runway
    
    def build_forecast_reports(self, forecasts, current_time):
        forecasts_reports = []
        for report in forecasts[1:3]:
            new_forecats_report = ForecastReport(report, current_time)
            forecasts_reports.append(new_forecats_report)

        return forecasts_reports

    def __init__(self, conditions, forecasts, airport_data):
        self.name = airport_data['displayName']
        self.icao = airport_data['code']
        self.location = airport_data['city']
        self.latitude = airport_data['latitude']
        self.longitude = airport_data['longitude']

        self.time = conditions['dateIssued']
        self.flightCategory = conditions['flightRules']
        self.altimeter = conditions['pressureHg']
        self.temperatureF = self.convert_to_fahrenheit(conditions['tempC'])
        self.dewpointF = self.convert_to_fahrenheit(conditions['dewpointC'])
        self.relativeHumidity = conditions['relativeHumidity']
        self.visibility = conditions['visibility']['distanceSm']
        self.windSpeedMPH = round(conditions['wind']['speedKts'] * 1.15078)
        if 'wind' in conditions and 'direction' in conditions['wind']:
            direction = conditions['wind']['direction']
            self.windDirection = str(direction) + '°'
            self.runwayInUse = self.find_best_runway(direction, self.runways) 
        else:
            self.windDirection = NO_DATA_MESSAGE
            self.runwayInUse = NO_DATA_MESSAGE

        self.cloudCoverage = 'NEED TO BUILD'
        self.forecastReports = self.build_forecast_reports(forecasts, self.time)
        self.runways = self.get_list_of_runways(airport_data['runways'])

class ForecastReport:
    def get_time_offset(self, date_issued, current_time):
        format_str = "%Y-%m-%dT%H:%M:%S%z"

        issued_time = datetime.strptime(date_issued, format_str)
        original_time = datetime.strptime(current_time, format_str)
        time_difference = issued_time - original_time

        total_seconds = abs(time_difference.total_seconds())
        hours, remainder = divmod(total_seconds, 3600)
        minutes, _ = divmod(remainder, 60)

        return f'+{int(hours):02d}:{int(minutes):02d}'

    def __init__(self, report, current_time):
        self.dateIssued = report['dateIssued']
        self.timeOffset = self.get_time_offset(self.dateIssued, current_time)
        if 'wind' in report and 'speedKts' in report['wind']:
            windspeed = round(report['wind']['speedKts'] * 1.15078)
            self.windSpeedMPH = str(windspeed) + ' MPH'
        else:
            self.windSpeedMPH = NO_DATA_MESSAGE
        if 'wind' in report and 'direction' in report['wind']:
            direction = report['wind']['direction']
            self.windDirection = str(direction) + '°'
        else:
            self.windDirection = NO_DATA_MESSAGE
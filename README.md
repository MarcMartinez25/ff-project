# Project Description

This is a hybrid Next.js + Python app that uses Next.js as the frontend and FastAPI as the API backend.
This is a project for ForeFlight that allows a user to input one or more airport identifiers and the
system will return a card with the following data:

- The airport identifier
- The airport name
- The available runways
- The lat/long of the airport
- A current weather report that contains the following
  - Temp (F)
  - Relative humidity (%)
  - Summary of cloud coverage (text string)
    - This is the greatest amount of coverage listed if any
  - Visibility (Statute Miles)
  - Wind Speed (MPH)
  - Wind Direction (cardinal directions to secondary-intercardinal
  precision)

- A forecast report for the next two periods that contains the following entries
  - The time offset from the start of the period
  (/report/forecast/period/dateStart) in hrs:min
  - Wind Speed (MPH)
  - Wind Direction (degrees true)

The app also suggest the best runway for takeoff/landing based of off wind direction and available runways.

## Final thoughts

I estimate that I spent a total of 12 hours working on this project. Some features I would like to add would be displaying the raw metar data, a small map on the card that shows the location of the airport.
I would also like to add some test to ensure functionality of the methods I used on the backend. I would also like to add more user validation and data validation when buildling the Airport and ForecastReport objects.

## How It Works

The Python/FastAPI server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/digitros/nextjs-fastapi/blob/main/next.config.js) to map any request to `/api/:path*` to the FastAPI API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).

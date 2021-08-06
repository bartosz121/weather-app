import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

import Logger from './logger';

dotenv.config();

const app = express();

if (!process.env.PORT) {
  process.exit(1);
}

const port = parseInt(process.env.PORT, 10); // make sure parse int does not recieve undefined

app.get('/api/forecast', (req: Request, res: Response) => {
  Logger.debug(`***${req.method} request from ${req.hostname}(${req.ip})***`);
  const lat: number = Number(req.query.lat);
  const lon: number = Number(req.query.lon);
  if (!(lat && lon)) {
    Logger.warn('/api/forecast called without params');
    res.status(400).json({
      message: 'Latitude and longitude not found',
    });
  } else {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${process.env.API_KEY}`;
    res.send(`lat: ${lat} lon: ${lon} url: ${url}`);
  }
});

app.listen(port, () => {
  Logger.debug(`App running at http://localhost:${port}`);
});

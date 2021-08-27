import express, { Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import Logger from './logger';
import fetchForecast from './utils';

dotenv.config();

const PORT = process.env.PORT || '8000';

const app = express();

app.use(cors());

if (!process.env.API_KEY) {
  Logger.error('API_KEY NOT FOUND');
  process.exit(1);
}

const port = parseInt(PORT, 10);

app.get('/api/forecast', (req: Request, res: Response) => {
  Logger.debug(`***${req.method} request from ${req.hostname}(${req.ip})***`);
  const lat: number = Number(req.query.lat);
  const lon: number = Number(req.query.lon);
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${process.env.API_KEY}`;
  Logger.debug(`***Fetching forecast for (${lat}, ${lon})***`);
  fetchForecast(url)
    .then((data) => res.status(data.status).json(data))
    .catch((error) => {
      Logger.debug(error);
      res.status(error.status).json({
        status: error.status,
        error_msg: error.statusText,
      });
    });
});

app.listen(port, () => {
  Logger.debug(`App running at http://localhost:${port}`);
});

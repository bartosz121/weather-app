import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

if (!process.env.PORT) {
  process.exit(1);
}

const port = parseInt(process.env.PORT, 10); // make sure parse int does not recieve undefined

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

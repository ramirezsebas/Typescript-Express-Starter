import dotenv from 'dotenv';
import express from 'express';

import 'reflect-metadata';

dotenv.config();

function main() {
  const port = process.env.SERVER_PORT;

  const app = express();

  app.get('/', (req, res) => {
    return res.json({ message: 'Health Check' });
  });

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}

main();

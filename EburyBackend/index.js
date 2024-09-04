import express from 'express';
import { verifyToken } from './utils/verifyToken.js';
import { verifyUserAgent } from './utils/verifyUserAgent.js';
import mockData from './data/mockData.json' assert {type: 'json'};

import dotenv from 'dotenv'

dotenv.config();

const app = express ();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });
app.use(verifyUserAgent);
app.use(verifyToken);

app.get('/getWallet', (request, response) => {
  setTimeout(() => response.send(mockData), 3000)
});
app.use(express.json());
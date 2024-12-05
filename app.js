
import express from 'express';
import {pinoHttp} from './utils/logging.js';

const app = express();

app.use(pinoHttp);

app.get('/', async (req, res) => {
  
  req.log.info('Child logger with trace Id.'); 
  res.send('how are you');
});

export default app;

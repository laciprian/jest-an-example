import express from 'express';
import router from './routers/index';

const PORT = process.env.NODE_ENV === 'test' ? 3001 : 3000;
const DB_CONNECTION_URI =
  process.env.DB_CONNECTION_URI || 'mongodb://localhost:27017/jest';

const app = express();

app.disable('x-powered-by');
app.use(router);

export default app;

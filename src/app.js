import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
import { setupWebSocket } from './websocket';

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
  'mongodb+srv://devmode:devmode@cluster0-sqkla.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

export default server;

import express from 'express'
import http from 'http'
import routes from './routes'
import mongoose from 'mongoose'
import cors from 'cors'
import {setupWebSocket} from './websocket'

const app = express();
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect('mongodb://127.0.0.1:27017/devRadar',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)



export default server
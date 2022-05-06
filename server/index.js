import geckos from '@geckos.io/server'
import http from 'http'
import mysql from 'mysql'
import express from 'express'
const app = express()
import path from 'path'
import cors from 'cors'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import {incia_conexao} from './conexao/connect.js'

incia_conexao()
const port = 3002;
const io = geckos()
io.listen(6363)

app.use(cors())
app.use('/', express.static(path.join(__dirname, '../public')))




io.onConnection((channel) => {
  
  console.log(`${channel.id} conectou`)

  
  channel.onDisconnect(() => {
    console.log(`${channel.id} got disconnected`)
  })



  channel.on('info_player', (data) => {
    
  })
})










app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/website/home.html'))
})

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/game/index.html'))
})
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/game/login.html'))
})

http.createServer(app).listen(port, () =>
    console.log(`Servidor Carregado http://localhost:${port}`)
);
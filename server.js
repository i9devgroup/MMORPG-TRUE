const http = require("http");
const express = require("express");
const app = express();
const path = require("path");

const port = 3002;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/home.html'))
  })

http.createServer(app).listen(port, () =>
    console.log(`Servidor Carregado http://localhost:${port}`));
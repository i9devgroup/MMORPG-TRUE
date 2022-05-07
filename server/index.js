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
// import {incia_conexao} from './conexao/connect.js'

// incia_conexao()

var connection = mysql.createConnection({
  host: "144.22.225.253",
  user: "aplicacao",
  port: "3306",
  password: "conline@2510A",
  database: "RPG",
  charset: "utf8mb4"
});

connection.connect(function(err) {

if(err){
  console.log('ERRO AO ACESSAR DB --> MYSQL')
  setTimeout(incia_conexao, 2000);
}else{
    console.log('CONECTADO DB --> MYSQL')
}

}); 


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

  
  

  channel.on('AnimationPersonagens', (data) => {
    console.log('consutltou animacao')

    var sql = `SELECT * FROM skins_players`;

    connection.query(sql, function(err2, results){
     
      
      channel.emit('AnimationPersonagens', results)
  
    })
  })

  channel.on('SpritPersonagens', (data) => {
    console.log('consutltou sprite')

    var sql = `SELECT * FROM skins_players`;

    connection.query(sql, function(err2, results){
     
      console.log(results)
      channel.emit('SpritPersonagens', results)

      channel.emit('StartGame')
     
    })
  })

  // setInterval(() => {
  //   channel.emit('SpritPersonagens', 'dsadsa')
  // }, 2000);
  
  channel.on('ListCharacters', (data) => {

    var sql = `SELECT * FROM charecters WHERE AccontId = '${data.id}'`;

    connection.query(sql, function(err2, results){
     
        console.log(sql)
      channel.emit('ListCharacters', results)
    })
   

  })

  channel.on('QueryLogin', (data) => {
  


    var sql = `SELECT * FROM users WHERE login = '${data.username}' AND senha = '${data.password}'`;
      connection.query(sql, function(err2, results){
    
        

        if(results.length){
       
          setTimeout(() => {
            var saida = {
              status:true,
              id:results[0]['idUsers'],
              name:results[0]['name']
            }
            channel.emit('StatusLogin', saida)
          }, 3000);

        }else{

          var saida = {
            status:false
          }
          channel.emit('StatusLogin', saida)

        }
        

        

            
      })
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
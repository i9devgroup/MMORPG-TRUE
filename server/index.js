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

  
  
  channel.on('SpritPersonagens', (data) => {
    console.log('consutltou sprite')

    var sql = `SELECT
    skins_players.name as name,
    ANY_VALUE(skins_players.w) as w,
    ANY_VALUE(skins_players.h) as h,
    ANY_VALUE(skins_players.local) as local
    FROM RPG.skins_players
    GROUP BY name`;

    connection.query(sql, function(err2, results){
     
      console.log(results)
      channel.emit('SpritPersonagens', results)


    })
  })

  // setInterval(() => {
  //   channel.emit('SpritPersonagens', 'dsadsa')
  // }, 2000);
  
  channel.on('ListCharacters', (data) => {

    var sql = `SELECT RPG.characters.idCharecters, 
    RPG.characters.Name as NickPlayer,
    RPG.characters.Level as LevelPlayer,
    RPG.characters.Cla as ClaPlayer,
    RPG.skins_players.name as NameSkin,
    RPG.skins_players.filename as FileName
    FROM RPG.characters 
    JOIN RPG.skins_players ON RPG.skins_players.id = RPG.characters.skinSprite
    WHERE AccontId = '${data.id}'`;

    connection.query(sql, function(err2, results){
     

      channel.emit('ListCharactersRec', results)
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
    res.sendFile(path.join(__dirname, '../public/website/index.html'))
})

app.get('/Animation', (req, res) => {
  var sql = `SELECT * FROM RPG.skins_players
  JOIN RPG.animations
  ON 
  RPG.animations.template = RPG.skins_players.id`;

var animations = [];
var animationsPronto = [];

    connection.query(sql, function(err2, results){

     
      results.forEach(element => {

        var ListFrames = []    
        for (let index = element.start; index < element.end+1;index++) {

          var frames = {
            
            "key": element.filename,
            "frame": index,
            "duration": 0
          }
     
          ListFrames.push(frames)
          
        }
 
        

        
        var types = {
          "key": element.name+'_'+element.type,
          "type": "frame",
          "frames": ListFrames,
          "frameRate": element.framerate,
          "duration": 0,
          "skipMissedFrames": true,
          "delay": 0,
          "repeat": -1,
          "repeatDelay": 0,
          "yoyo": false,
          "showOnStart": false,
          "hideOnComplete": false
        }

        animations.push(types) 

        animationsPronto = {
          anims:animations
        }
      });
     
     
     
      
 
        
      res.json(animationsPronto)
  
    })
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
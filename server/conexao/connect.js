import mysql from 'mysql'

export function incia_conexao(){

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
        
        connection.on('error', function(err) {
          // console.log('db error', err);
          if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            incia_conexao();       
            console.log(`PROTOCOL_CONNECTION_LOST`)                  // lost due to either server restart, or a
          } else {     
            console.log(err)                                     // connnection idle timeout (the wait_timeout
            throw err;  
                                        // server variable configures this)
          }
        });
      
 }

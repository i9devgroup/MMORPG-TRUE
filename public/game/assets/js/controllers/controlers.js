export default function Controlers(GameEngine){
    
    let playerVelocity = new Phaser.Math.Vector2()
    var player = GameEngine.player
    


      if(GameEngine.keys.A.isDown) {
        playerVelocity.x = -160
        player.anims.play('left', true);
      }else if (GameEngine.keys.D.isDown) {
        playerVelocity.x = 160
        console.log(playerVelocity.x)
        player.anims.play('right', true);
      }else if(GameEngine.keys.W.isDown) {
        playerVelocity.y = -160
        player.anims.play('up', true);
      } else if (GameEngine.keys.S.isDown) {
        player.anims.play('down', true);
        playerVelocity.y = 160
      }else{
        player.anims.pause()
        playerVelocity.y = 0
      }

      

      if (GameEngine.keys.SHIFT.isDown) {
        if(GameEngine.player_info.status.stamina > 0){
          var speed = (GameEngine.player_info.status.speed)*80;
        }else{
          var speed = (GameEngine.player_info.status.speed)*50;
        }



        setTimeout(() => {
          if(GameEngine.player_info.status.stamina > 0){
            GameEngine.player_info.status.stamina = GameEngine.player_info.status.stamina-10
          }
          
        }, 500);
        

        
        
      }else{
        var speed = GameEngine.player_info.status.speed*50;

        if(GameEngine.player_info.status.interval_stamina == null){

          if(GameEngine.player_info.status.max_stamina != GameEngine.player_info.status.stamina){

            console.log('stamina max')
            
            GameEngine.player_info.status.interval_stamina = setInterval(() => {

          
              GameEngine.player_info.status.stamina = GameEngine.player_info.status.stamina+10
              console.log('recarregando stamina:', GameEngine.player_info.status.stamina)
           
            
          }, GameEngine.player_info.status.recharge_stamina);

          }else{
            clearInterval(GameEngine.player_info.status.interval_stamina);
            GameEngine.player_info.status.interval_stamina = null;
          }

        }else{
          if(GameEngine.player_info.status.max_stamina == GameEngine.player_info.status.stamina){
            clearInterval(GameEngine.player_info.status.interval_stamina);
            GameEngine.player_info.status.interval_stamina = null;
          }
          
        }
          
        

        
      }
   

      
    playerVelocity.normalize();
    playerVelocity.scale(speed)
    player.body.setVelocity(playerVelocity.x,playerVelocity.y)
 
}
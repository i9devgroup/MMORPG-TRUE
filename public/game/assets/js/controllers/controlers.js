export default function Controlers(GameEngine){
    
    let playerVelocity = new Phaser.Math.Vector2()
    var player = GameEngine.player.Container
    var player_sprite = GameEngine.player.Sprite

  

      // TOP-RIGHT
      if(GameEngine.keys.W.isDown && GameEngine.keys.A.isDown) {
        playerVelocity.x = -160
        playerVelocity.y = -160
        player_sprite.anims.play(GameEngine.player.NameSprite+'_left', true);
      // TOP-LEFT
      }else if(GameEngine.keys.W.isDown && GameEngine.keys.D.isDown) {
        playerVelocity.x = 160
        playerVelocity.y = -160
        player_sprite.anims.play(GameEngine.player.NameSprite+'_right', true);
      // DOWN-LEFT
      }else if(GameEngine.keys.S.isDown && GameEngine.keys.A.isDown) {
        playerVelocity.x = -160
        playerVelocity.y = 160
        player_sprite.anims.play(GameEngine.player.NameSprite+'_left', true);
      // DOWN-RIGHT
      }else if(GameEngine.keys.S.isDown && GameEngine.keys.D.isDown) {
        playerVelocity.x = 160
        playerVelocity.y = 160
        player_sprite.anims.play(GameEngine.player.NameSprite+'_right', true);
      // LEFT
      }else if(GameEngine.keys.A.isDown) {
        playerVelocity.x = -160
        player_sprite.anims.play(GameEngine.player.NameSprite+'_left', true);
      // RIGHT
      }else if (GameEngine.keys.D.isDown) {
        playerVelocity.x = 160
        player_sprite.anims.play(GameEngine.player.NameSprite+'_right', true);
      // TOP
      }else if(GameEngine.keys.W.isDown) {
        playerVelocity.y = -160
        player_sprite.anims.play(GameEngine.player.NameSprite+'_up', true);
      // DOWN
      } else if (GameEngine.keys.S.isDown) {
        player_sprite.anims.play(GameEngine.player.NameSprite+'_down', true);
        playerVelocity.y = 160
      // TOP
      }else{
        player_sprite.anims.pause()
        playerVelocity.y = 0
        playerVelocity.x = 0
      }

      

      if (GameEngine.keys.SHIFT.isDown) {
        if(GameEngine.player.Status.stamina > 0){
          var speed = (GameEngine.player.Status.speed)*80;
        }else{
          var speed = (GameEngine.player.Status.speed)*50;
        }



        setTimeout(() => {
          if(GameEngine.player.Status.stamina > 0){
            GameEngine.player.Status.stamina = GameEngine.player.Status.stamina-10
          }
          
        }, 500);
        

        
        
      }else{
        var speed = GameEngine.player.Status.speed*50;

        if(GameEngine.player.Status.interval_stamina == null){

          if(GameEngine.player.Status.max_stamina != GameEngine.player.Status.stamina){

            console.log('stamina max')
            
            GameEngine.player.Status.interval_stamina = setInterval(() => {

          
              GameEngine.player.Status.stamina = GameEngine.player.Status.stamina+10
              console.log('recarregando stamina:', GameEngine.player.Status.stamina)
           
            
          }, GameEngine.player.Status.recharge_stamina);

          }else{
            clearInterval(GameEngine.player.Status.interval_stamina);
            GameEngine.player.Status.interval_stamina = null;
          }

        }else{
          if(GameEngine.player.Status.max_stamina == GameEngine.player.Status.stamina){
            clearInterval(GameEngine.player.Status.interval_stamina);
            GameEngine.player.Status.interval_stamina = null;
          }
          
        }
          
        

        
      }
   


    playerVelocity.normalize();
    playerVelocity.scale(speed)

    player.body.setMaxSpeed(speed);
    player.body.setVelocity(playerVelocity.x,playerVelocity.y)
 
}
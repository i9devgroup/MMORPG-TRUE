export default function Controlers(GameEngine){
    
    let playerVelocity = new Phaser.Math.Vector2()
    var player = GameEngine.player
    const speed = GameEngine.player_info.status.speed*50;


      if(GameEngine.keys.A.isDown) {
        playerVelocity.x = -160
        player.anims.play('left', true);
      }else if (GameEngine.keys.D.isDown) {
        playerVelocity.x = 160
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
      
    playerVelocity.normalize();
    playerVelocity.scale(speed)
    player.body.setVelocity(playerVelocity.x,playerVelocity.y)
 
}
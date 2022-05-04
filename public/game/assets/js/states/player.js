export default function Player(GameEngine){


    
    var player_id = GameEngine.player_info.nameSprite
    GameEngine.player = GameEngine.physics.add.sprite(100, 100,player_id);

}
export default function Player(GameEngine){
var player = {
    name: 'BlackOut',
    nameSprite: 'player-3',
    level: '25',
    exp: '200',
    gold_inventario:'500',
    status:{
        speed:2
    }
}

    GameEngine.player_info = player;
    var player_id = GameEngine.player_info.nameSprite
    GameEngine.player = GameEngine.physics.add.sprite(100, 100,player_id);

}
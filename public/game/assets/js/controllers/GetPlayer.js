export default function GetPlayer(GameEngine){
    
    var player = {
        name: 'BlackOut',
        nameSprite: 'player-4',
        level: '25',
        exp: '200',
        gold_inventario:'500',
        status:{
            speed:2,
            stamina:500,
            max_stamina:500,
            recharge_stamina:500,
            interval_stamina:null
        }
    }

    GameEngine.player_info = player;

}
export default function GetPlayer(GameEngine){
    
    var player = {
        Id:32,
        Name: 'BlackOut',
        Sprite: null,
        Container:null,
        NameSprite: 'player-4',
        Level: '25',
        Exp: '200',
        Cla: 'GodAngel',
        Gold_inventario:'500',
        Status:{
            killer:0,
            speed:2,
            stamina:500,
            max_stamina:500,
            recharge_stamina:500,
            interval_stamina:null
        },
        Map:{
            x:150,
            y:150
        }
    }

    GameEngine.player = player;

}
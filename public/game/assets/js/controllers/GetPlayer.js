export default function GetPlayer(GameEngine){

    console.log(GameEngine.CharacterInfo)
    
    var player = {
        Id:GameEngine.CharacterInfo.idCharecters,
        Name: GameEngine.CharacterInfo.NickPlayer,
        Sprite: null,
        ClassName: GameEngine.CharacterInfo.ClassName,
        ClassId: GameEngine.CharacterInfo.ClassId,
        Container:null,
        NameSprite: GameEngine.CharacterInfo.NameSkin,
        Level: GameEngine.CharacterInfo.LevelPlayer,
        Exp: GameEngine.CharacterInfo.Exp,
        Cla: GameEngine.CharacterInfo.ClaPlayer,
        Gold_inventario:GameEngine.CharacterInfo.Gold,
        Status:{
            killer:0,
            speed:2,
            stamina:500,
            max_stamina:500,
            recharge_stamina:500,
            interval_stamina:null
        },
        Map:{
            x:GameEngine.CharacterInfo.MapX,
            y:GameEngine.CharacterInfo.MapY
        }
    }
    
    GameEngine.player = player;

}
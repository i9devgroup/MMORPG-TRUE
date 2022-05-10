export default function Player(GameEngine){

var player = GameEngine.player


GameEngine.player.Container = GameEngine.add.container(GameEngine.player.Map.x, GameEngine.player.Map.x);
GameEngine.player.Container.setSize(32,56, false)




GameEngine.player.Sprite = GameEngine.add.sprite(1, -8,player.nameSprite).setScale(1.8);





GameEngine.physics.world.enable([ GameEngine.player.Container]);

GameEngine.player.Container.body.setBounce(0,0).setCollideWorldBounds(true);
// GameEngine.player.Container.body.setBounce(0,0).setCollideWorldBounds(true);

// GameEngine.world.setBounds(0,0,Game.map.widthInPixels,Game.map.heightInPixels);

console.log(GameEngine)


GameEngine.player.Container.add(GameEngine.player.Sprite).setDepth(14);




GameEngine.cameras.main.startFollow(GameEngine.player.Container, true);
GameEngine.cameras.main.setFollowOffset(-GameEngine.player.Container.width, -GameEngine.player.Container.height);

var color;

if(GameEngine.player.Status.killer == 0){
color = '#000000'
}else{
color = '#f10000'
var pk = GameEngine.add.image(-50,-38,'pk').setScale(0.038);
  pk.setOrigin(0.5)
  GameEngine.player.Container.add(pk)
}

if(GameEngine.player.Cla == null){

    var cla = GameEngine.add.text(0,-58,'',{
        fontFamily:'Courier',
        color:'#91ff00',
        stroke: '#000000',
        strokeThickness: 2,
    }).setFontSize(12)

    cla.setOrigin(0.5)
    GameEngine.player.Container.add(cla)

}else{
    var cla = GameEngine.add.text(0,-58,GameEngine.player.Cla,{
        fontFamily:'Courier',
        color:'#91ff00',
        stroke: '#000000',
        strokeThickness: 2,
    }).setFontSize(12)

    cla.setOrigin(0.5)
    GameEngine.player.Container.add(cla)
}

var label = GameEngine.add.text(0,-38,GameEngine.player.Name,{
    fontFamily:'Courier',
    color:'#FFFFFF',
    stroke: '#000000',
    strokeThickness: 4,
    shadow: {
        offsetX: 0,
        offsetY: 0,
        color: color,
        blur: 5,
        stroke: true,
        fill: true
    },
  }).setFontSize(14);

  label.setOrigin(0.5)




  GameEngine.player.Container.add(label)
  var AnimationName = GameEngine.player.NameSprite+'_down';
  GameEngine.player.Sprite.anims.play(AnimationName, true);
}
import Controlers from '/assets/js/controllers/controlers.js'
import Resize_ui from '/assets/js/controllers/resize_ui.js'
import Player from '/assets/js/states/player.js'
import AnimationSprite from '/assets/js/states/AnimationSprite.js'
import MiniMap from '/assets/js/UI/MiniMap.js'
import GetPlayer from '/assets/js/controllers/GetPlayer.js'

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene')
    }

    preload(){

      this.load.image('tiles_desert', 'assets/maps/desert.png');
      this.load.tilemapTiledJSON('desert', 'assets/maps/desert.json');

    }

    create(){
    var GameEngine = this;

    GameEngine.cursors = GameEngine.input.keyboard.createCursorKeys()
    GameEngine.keys = GameEngine.input.keyboard.addKeys("W,A,S,D,I,SHIFT");
    loadMaps(this)
    GetPlayer(this)
    AnimationSprite(this)
    Player(this)
    MiniMap(this)

    
    

    Resize_ui(this)

       


 this.input.on("pointerdown", pointer => {

  const start = new Phaser.Math.Vector2(GameEngine.player.x, GameEngine.player.y);
  const end = new Phaser.Math.Vector2(pointer.x, pointer.y);

  GameEngine.distancia = Phaser.Math.Distance.Between(start.x, start.y, end.x, end.y);


  


});
    }

    update(time, deltaTime){
        Controlers(this)
  
    }


   
}


function loadMaps(game) {
  game.map = game.add.tilemap('desert');
  var tiles = game.map.addTilesetImage('tmw_desert_spacing11', 'tiles_desert');
  
  var sand = game.map.createLayer('sand', tiles, 0, 0)
  var bushes = game.map.createLayer('bushes', tiles, 0, 0);
  var walls = game.map.createLayer('walls', tiles, 0, 0);
  var cobblestone = game.map.createLayer('cobblestone', tiles, 0, 0);
  var statues_objects = game.map.createLayer('statues_objects', tiles, 0, 0);
  
  
  game.cameras.main.setBounds(0, 0, game.map.widthInPixels, game.map.heightInPixels);
  game.physics.world.bounds.width = game.map.widthInPixels;
  game.physics.world.bounds.height = game.map.heightInPixels;
  
  
  // game.map.setCollision([1, 2, 3, 9, 11, 17,
  //     18, 19, 20, 21, 25,
  //     26, 27, 28, 29, 31,
  //     32, 33, 35, 36, 37,
  //     38, 39, 40, 41, 42,
  //     43, 44, 45, 46, 47, 48], true, 'walls', true);
  //     game.map.setCollision([1, 2, 3, 9, 11, 17,
  //     18, 19, 20, 21, 25,
  //     26, 27, 28, 29, 31,
  //     32, 33, 35, 36, 37,
  //     38, 39, 40, 41, 42,
  //     43, 44, 45, 46, 47, 48], true, 'bushes', true);
  
  
  }







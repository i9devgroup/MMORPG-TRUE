import Resize_ui from '../controllers/resize_ui.js'
import Controlers from '../controllers/controlers.js'
import Player from '../states/player.js'
import AnimationSprite from '../states/AnimationSprite.js'
import MiniMap from '../UI/MiniMap.js'
import GetPlayer from '../controllers/GetPlayer.js'

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('TylosCity')
    }
    init({ CharacterInfo }) {
     
      this.CharacterInfo = CharacterInfo;
    }

    preload(){

      //DESERT
      this.load.image('tiles_desert', 'assets/maps/desert.png');
      this.load.tilemapTiledJSON('desert', 'assets/maps/desert.json');

      //TYLOSCITY
      this.load.image('TylosCity', 'assets/tiles/map/TylosCity/TylosCity.png');
      this.load.tilemapTiledJSON('TylosCityJson', 'assets/tiles/map/TylosCity/TylosCity.json');

      //SAND VILLAGE
      // game.load.tilemap('map', 'assets/maps/minimap_client.json', null, Phaser.Tilemap.TILED_JSON);
      // game.load.spritesheet('tileset', 'assets/tilesets/tilesheet.png',32,32);
      this.load.image('SandVillage', 'assets/tiles/map/SandVillage/SandVillage.png');
  
      this.load.tilemapTiledJSON('SandVillageJson', 'assets/tiles/map/SandVillage/SandVillage2.json');

    }

    create(){
    var GameEngine = this;

    GameEngine.cursors = GameEngine.input.keyboard.createCursorKeys()
    GameEngine.keys = GameEngine.input.keyboard.addKeys("W,A,S,D,I,SHIFT");

    // this.cameras.main.width/2

    const NameCity = GameEngine.add.text(window.innerWidth/2, 50, 'Tylos City', { 
      font: '30px Courier', 
      // fill: '#00ff00',
      color:'#FFFFFF',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: {
        offsetX: 0,
        offsetY: 0,
        color: '#FFFFF',
        blur: 5,
        stroke: true,
        fill: true
    }
    })
    .setOrigin(0.5)
    .setDepth(12).setScrollFactor(0)
    .setAlpha(0);

    this.tweens.add({
      targets: NameCity,
      alpha: { value: 1, duration: 3000, ease: 'Power1' }
  });
  
    setTimeout(() => {

      this.tweens.add({
        targets: NameCity,
        alpha: { value: 0, duration: 3000, ease: 'Power1' }
    });

    }, 7000);

    GetPlayer(this)
    Player(this)
    loadMaps(this)
    
    
    
    // AnimationSprite(this)
   
    
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

    game.map = game.add.tilemap('SandVillageJson');
    var tiles = game.map.addTilesetImage("tilesheet", "SandVillage");

  // var sand1 = game.map.createLayer('layer0', tiles, 0, 0)
  // var sand2 = game.map.createLayer('layer1', tiles, 0, 0)
  // var sand3 = game.map.createLayer('layer2', tiles, 0, 0)
  // var sand4 = game.map.createLayer('layer3', tiles, 0, 0)
  // var sand2 = game.map.createLayer('highlayer0', tiles, 0, 0)
  

  //   for(var i = 0; i < game.map.layers.length; i++) {
  //  console.log(game.map.layers)
  //       var group = (i <= game.nbGroundLayers-1 ? game.groundMapLayers : game.highMapLayers);
  //       game.map.gameLayers[i] = game.map.createLayer(game.map.layers[i].name,0,0,group);
  //       game.map.gameLayers[i].visible = false; // Make map invisible before the game has fully loaded
  //   }

  // DESERT
  // game.map = game.add.tilemap('desert');
  // var tiles = game.map.addTilesetImage('tmw_desert_spacing11', 'tiles_desert');
  // var sand = game.map.createLayer('sand', tiles, 0, 0)
  // var bushes = game.map.createLayer('bushes', tiles, 0, 0);
  // var walls = game.map.createLayer('walls', tiles, 0, 0);
  // var cobblestone = game.map.createLayer('cobblestone', tiles, 0, 0);
  // var statues_objects = game.map.createLayer('statues_objects', tiles, 0, 0);


   // TYLOSCITY
  //  game.map = game.add.tilemap('TylosCityJson');
  //   const tileset = game.map.addTilesetImage("tuxmon-sample-32px-extruded", "TylosCity");

  //  const belowLayer = game.map.createLayer("Below Player", tileset, 0, 0);
  //  const worldLayer = game.map.createLayer("World", tileset, 0, 0);
  //  const aboveLayer = game.map.createLayer("Above Player", tileset, 0, 0);
  //  worldLayer.setCollisionByProperty({ collides: true });
  //  game.physics.add.collider(game.player.Container, worldLayer);
  //  aboveLayer.setDepth(11);

  //  const spawnPoint = game.map.findObject("Objects", (obj) => obj.name === "Spawn Point");

  //  game.player.Container.x = spawnPoint.x
  //  game.player.Container.y = spawnPoint.y

  // game.cameras.main.setBounds(0, 0, game.map.widthInPixels, game.map.heightInPixels);
  // game.physics.world.bounds.width = game.map.widthInPixels;
  // game.physics.world.bounds.height = game.map.heightInPixels;
  
  
  }







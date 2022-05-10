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
      // this.load.image('tiles_desert', 'assets/maps/desert.png');
      // this.load.tilemapTiledJSON('desert', 'assets/maps/desert.json');

      //TYLOSCITY
      // this.load.image('TylosCity', 'assets/tiles/map/TylosCity/TylosCity.png');
      // this.load.tilemapTiledJSON('TylosCityJson', 'assets/tiles/map/TylosCity/TylosCity.json');

      //SAND VILLAGE
      // game.load.tilemap('map', 'assets/maps/minimap_client.json', null, Phaser.Tilemap.TILED_JSON);
      // game.load.spritesheet('tileset', 'assets/tilesets/tilesheet.png',32,32);
      this.load.image('sandvillage', 'assets/tiles/map/SandVillage/sandvillage.png');
  
      this.load.tilemapTiledJSON('sandvillagejson', 'assets/tiles/map/SandVillage/sandvillage.json');

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

    
    loadMaps(this)
    GetPlayer(this)
    Player(this)
    
    
  
    
    
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

    game.map = game.add.tilemap('sandvillagejson');
    var tiles = game.map.addTilesetImage("tilesheet", "sandvillage");

  // var sand1 = game.map.createLayer('layer0', tiles, 0, 0).setDepth(2);
  // var sand2 = game.map.createLayer('layer1', tiles, 0, 0).setDepth(3);
  // var sand3 = game.map.createLayer('layer2', tiles, 0, 0).setDepth(4);
  // var sand4 = game.map.createLayer('layer3', tiles, 0, 0).setDepth(5);
  // var sand5 = game.map.createLayer('highlayer0', tiles, 0, 0).setDepth(6);

  game.map.gameLayers = [];
  for(var i = 0; i < game.map.layers.length; i++) {
      var group = (i <= game.nbGroundLayers-1 ? game.groundMapLayers : game.highMapLayers);
      game.map.gameLayers[i] = game.map.createLayer(game.map.layers[i].name, tiles, 0, 0);
     
  }

    // for(var i = 0; i < game.map.layers.length; i++) {

    //    game.map.createLayer(game.map.layers[i].name,tiles,0,0);
    // }


  game.physics.world.setBounds( 0, 0, game.map.widthInPixels, game.map.heightInPixels);


  // game.map.getLayer().properties.forEach((p) => { console.log(p); });


  // game.map.gameLayers.length
  
  game.collisionArray = [];
  for(var y = 0; y < game.map.height; y++){
      var col = [];
      for (var x = 0; x < game.map.width; x++) {
          var collide = false;
          for (var l = 0; l < 1; l++) {

            var tileProperties = game.map.getLayer(x, y,game.map.gameLayers[l])

            if(tileProperties){
              console.log(tileProperties)
            
            //   console.log(tileProperties)
            //  if(tileProperties.hasOwnProperty('c')){
            //     console.log(tileProperties)
            //  }
            }
            
            // if (tileProperties.hasOwnProperty('c')) {
            //   console.log('colisao')
            //               // collide = true;
            //               break;
            //           }
              // var tile = game.map.getTile(x, y, game.map.gameLayers[l]);
              // if (tile) {
              //     // The original BrowserQuest Tiled file doesn't use a collision layer; rather, properties are added to the
              //     // tileset to indicate which tiles causes collisions or not. Which is why we have to check in the tileProperties
              //     // if a given tile has the property "c" or not (= collision)
              //     var tileProperties = game.map.tileset.tileProperties[tile.index - game.map.tileset.gid];
              //     if (tileProperties) {
              //         if (tileProperties.hasOwnProperty('c')) {
              //             collide = true;
              //             break;
              //         }
              //     }
              // }
          }
          col.push(+collide); // "+" to convert boolean to int
      }
      game.collisionArray.push(col);
  }


    // for(var i = 0; i < game.map.layers.length; i++) {

    //    game.map.createLayer(game.map.layers[i].name,tiles,0,0);
    // }

    // sand1.setCollisionByExclusion([-1]);
    // sand2.setCollisionByExclusion([-1]);
    // sand3.setCollisionByExclusion([-1]);
    // sand4.setCollisionByExclusion([-1]);
    // sand5.setCollisionByExclusion([-1]);
    // game.map.setCollisionBetween(1, 999, true, 'collisionLayer');

 


  
    // game.world.setBounds(1,1,game.map.widthInPixels,game.map.heightInPixels);

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







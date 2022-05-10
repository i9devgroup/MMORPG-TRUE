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

      //this.load.atlasJSONHash('atlas4', 'assets/tiles/animations/atlas4.png', 'assets/tiles/animations/atlas4.json'); // Atlas of monsters
      this.load.image('sandvillage', 'assets/tiles/map/SandVillage/sandvillage.png');
  
      this.load.tilemapTiledJSON('sandvillagejson', 'assets/tiles/map/SandVillage/sandvillage.json');


      this.load.atlas('atlas1', 'assets/tiles/HUB/atlas1.png', 'assets/tiles/HUB/atlas1.json'); // PNJ, HUD, marker, achievements ...
      this.load.atlas('atlas3', 'assets/tiles/HUB/atlas3.png', 'assets/tiles/HUB/atlas3.json'); // Items, weapons, armors
      // game.load.json('db', 'assets/json/db.json');

    }

    create(){
    var GameEngine = this;
    this.finder = new EasyStar.js();

    

    this.borderPadding = 10
    this.HUDheight = 32
    this.barY = 0

  
    this.HUD = this.add.group(); // Group containing all objects involved in the HUD
    var border = this.add.sprite(0, 0, 'atlas1','border')
    .setScrollFactor(0)
    .setDisplaySize(window.innerWidth,window.innerHeight)
    .setOrigin(0)
    this.HUD.add(border); // Adds the gray border of the game


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
    .setDepth(99).setScrollFactor(0)
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

    var graphics = this.add.graphics();

   
    var curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(200, 300), new Phaser.Math.Vector2(400, 500));
    graphics.clear();
    graphics.lineStyle(2, 0xffffff, 1).setDepth(99);
    
    
    
  
    
    this.input.on('pointermove', function (pointer) {
     
      var distance = Phaser.Math.Distance.Between(pointer.worldX, pointer.worldY, GameEngine.player.Container.x, GameEngine.player.Container.y);
      

      if(distance < 300){
        graphics.clear()
        graphics.lineStyle(2, 0xffffff, 1).setDepth(99);
        curve.p0.x = pointer.worldX;
        curve.p0.y = pointer.worldY;

        curve.p1.x = GameEngine.player.Container.x
        curve.p1.y = GameEngine.player.Container.y
        
        curve.draw(graphics).setDepth(99);
        
      }else{
        graphics.clear()
        
      }
      
      // this.physics.moveToObject(this.player, pointer, 240);
    }, this);
    
    
    
  
    
    
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


    game.map.createLayer('highlayer0', tiles, 0, 0).setDepth(20);
    game.map.createLayer('layer3', tiles, 0, 0).setDepth(19);
    game.map.createLayer('layer2', tiles, 0, 0).setDepth(18);
    game.map.createLayer('layer1', tiles, 0, 0).setDepth(17);
    game.map.createLayer('layer0', tiles, 0, 0).setDepth(16);
  var colisao = game.map.createLayer('colisao', tiles, 0, 0)
  .setVisible(false)
  .setDepth(1);

  colisao.setCollisionByExclusion([-1]);
  game.physics.add.collider(game.player.Container, colisao);

  // colisao.setCollisionByProperty({ collides: true });

  // game.physics.add.collider(game.player.Container, colisao);


  // game.map.gameLayers = [];
  // for(var i = 0; i < game.map.layers.length; i++) {
  //   var depth = 10+i
  
  //   if(game.map.layers[i].name !== 'colisao'){
  //     game.map.gameLayers[i] = game.map.createLayer(game.map.layers[i].name, tiles, 0, 0).setDepth(depth);
  //   }
      
  
    
  // }


  var startpoint = game.map.findObject("entities", (obj) => obj.id === 563);

  game.player.Container.x = startpoint.x
  game.player.Container.y = startpoint.y

  game.physics.world.setBounds( 0, 0, game.map.widthInPixels, game.map.heightInPixels);

  game.getTileID = function(x,y){
    var tile = game.map.getTileAt(x, y);
    if(tile){
      return tile.index
    }
    
  
};


  // var grid = [];
  //   for(var y = 0; y < game.map.height; y++){
  //       var col = [];
  //       for(var x = 0; x < game.map.width; x++){
  //           // In each cell we store the ID of the tile, which corresponds
  //           // to its index in the tileset of the map ("ID" field in Tiled)
  //           col.push(game.getTileID(x,y));
  //       }
  //       grid.push(col);
  //   }
  //   game.finder.setGrid(grid);



game.cameras.main.setBounds(0, 0, game.map.widthInPixels, game.map.heightInPixels);

  game.map.tileset = {
    gid: 1,
    tileProperties: game.map.tilesets[0].tileProperties,
    texCoordinates: game.map.tilesets[0].texCoordinates
  };

    // console.log(game.collisionArray)

    // game.finder.setGrid(game.collisionArray);
    // game.finder.setAcceptableTiles([0]);


  //   game.wallGrp = game.add.group();
  //   game.map.layer.data.forEach( i =>{

   
  //     i.forEach(j =>{
      
  //         if(j.index !== -1)
  //         {
         
  //             var tileProperties = game.map.tileset.tileProperties[j.index - game.map.tileset.gid];
       
  //             if(tileProperties.hasOwnProperty('c')){
              
  //               var wall = game.physics.add.sprite(j.x * 32, j.y * 32, null, null).setOrigin(0, 0).setVisible(false);
  //               var props = game.map.tileset.texCoordinates[j.index];
          

        
  //               wall.body.immovable = true;
  //               wall.body.setBounce(0,0).setCollideWorldBounds(true);
                
  //                 game.physics.add.collider(game.player.Container, wall);
                  
              
  //             }
  //             // wall.body.setOffset(props.x + 16, props.y + 16);
  //             // wall.body.width = props.w;
  //             // wall.body.height = props.h;
  //             // game.wallGrp.add(wall);
  //         }
  //     });
  // });







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







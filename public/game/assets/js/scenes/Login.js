

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('Login')
    }

    preload(){

      this.load.image('tiles_desert', 'assets/maps/desert.png');
      this.load.tilemapTiledJSON('desert', 'assets/maps/desert.json');

    }

    create(){

    loadMaps(this)


    }

    update(time, deltaTime){

  
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

  
  
  }







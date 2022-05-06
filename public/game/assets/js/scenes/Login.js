
// var channel = geckos({ port: 6363 })

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('Login')
    }

    init({ channel }) {
    
      this.channel = channel
    }

    preload(){

      this.load.image('tiles_desert', 'assets/maps/desert.png');
      this.load.tilemapTiledJSON('desert', 'assets/maps/desert.json');

      
     console.log(localStorage.getItem('Account'))


        setTimeout(() => {
          // GAME_ENGINE.scene.start('Login', { id_player: 1 })
        }, 3000);

      
    }

    create(){

    

    loadMaps(this)
    this.cameras.main.setBounds(0, 0, 1024, 2048);
    this.cameras.main.setZoom(1);
    let pos = 1;
    var cam = this.cameras.main;
  
    cam.pan(4280, 300, 5000);
    setInterval(() => {
      var cam = this.cameras.main;
      if (pos === 0)
            {
                
              cam.pan(4280, 300, 5000);
            
                pos++

            }else if (pos === 1)
            {
               
              cam.pan(0, 300, 5000);
                // cam.pan(0, 5000, 10000, 'Elastic');
                // // cam.zoomTo(1, 3000);
                pos = 0
            }

         
    }, 6000);

    var element = this.add.dom(0, 0).createFromCache('form_login').setScrollFactor(0);

    }

    update(time, deltaTime){
      const cam = this.cameras.main;
  
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







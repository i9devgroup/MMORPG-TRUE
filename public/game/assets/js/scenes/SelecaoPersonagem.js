import GetPlayers from '../controllers/getPlayers.js'
import AnimationSprite from '../states/AnimationSprite.js'

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('SelecaoPersonagem')
    }

    init({ channel, infosAccont }) {
      this.infosAccont = infosAccont
      this.channel = channel
    }

    preload(){
      // this.load.image("Select_ceu", "assets/image/ceu.png")
      this.load.image("Select_forest", "assets/image/forest.png")
      
    }

    create(){
      // this.bg = this.add.tileSprite(0, 38, 800, 296, 'Select_ceu')
      // .setOrigin(0, 0);
     
    this.trees = this.add.tileSprite(0, 0, 1920, 1080, 'Select_forest')
    .setOrigin(0);


    let scaleX = window.innerWidth / this.trees.width
    let scaleY = window.innerHeight / this.trees.height
    let scale = Math.max(scaleX, scaleY)
    this.trees.setScale(scale)
   

     
      // this.add.sprite(0, 0,'GifForest')
      AnimationSprite(this, 'player-4')
      GetPlayers(this)
      
    
      this.scale.on('resize', resize, this);

      function resize (gameSize, baseSize, displaySize, resolution)
      {
        
      
      let scaleX = window.innerWidth / this.trees.width
      let scaleY = window.innerHeight / this.trees.height
      let scale = Math.max(scaleX, scaleY)
      console.log(scale)
      this.trees.setScale(scale)


var calc = scale*200
      this.selectPlayers.forEach(element => {
        element.y = this.cameras.main.height-calc;
      });
      }
   
    }

    update(){
  
      // this.bg.tilePositionX -= 1;
      this.trees.tilePositionX -= 2;
    }





   
}




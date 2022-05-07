import ListCharacters from '../controllers/ListCharacters.js'


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

      
  
      
    this.trees = this.add.tileSprite(0, 0, 2220, 1080, 'Select_forest')
    .setOrigin(0, 0);

   

   
    let scaleX = window.innerWidth / this.trees.width
    let scaleY = window.innerHeight / this.trees.height
    let scale = Math.max(scaleX, scaleY)
    this.trees.setScale(scale)

    var NewCharacter = this.add.text((this.cameras.main.width-250)/2,50,'NewCharacter',{
      fontFamily:'Courier',
      color:'#FFFFFF',
      stroke: '#FFFFF',
      strokeThickness: 4,
      shadow: {
          offsetX: 0,
          offsetY: 0,
          color: '#FFF',
          blur: 5,
          stroke: true,
          fill: true
      },
    }).setFontSize(30).setInteractive();

    NewCharacter.on('pointerdown', function (pointer, x, y, event) {

      alert('Create new character')
      event.stopPropagation();

  });
   
   

     
      // this.add.sprite(0, 0,'GifForest')
      
      ListCharacters(this)
      
    
      this.scale.on('resize', resize, this);

      function resize (gameSize, baseSize, displaySize, resolution)
      {
        
      
      let scaleX = this.cameras.main.width / this.trees.width
      let scaleY = this.cameras.main.height / this.trees.height
      let scale = Math.max(scaleX, scaleY)
      this.trees.setScale(scale)


    var calc = 175*scale
      this.selectPlayers.forEach(element => {
        element.y = this.cameras.main.height-calc;
      });
      }
   
    }

    update(){
  
      // this.bg.tilePositionX -= 1;
      this.trees.tilePositionX -= 0.7;
    }





   
}





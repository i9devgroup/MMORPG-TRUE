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

    create(){
    var GameEngine = this;
    GameEngine.cursors = GameEngine.input.keyboard.createCursorKeys()
    GameEngine.keys= GameEngine.input.keyboard.addKeys("W,A,S,D,I,SHIFT");

    GetPlayer(this)

    Player(this)
    
    AnimationSprite(this)
    MiniMap(this)
    Resize_ui(this)
   
    }

    update(){
        Controlers(this)
       
    }
}







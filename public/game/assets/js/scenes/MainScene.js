import Controlers from '/assets/js/controllers/controlers.js'
import Player from '/assets/js/states/player.js'
import AnimationSprite from '/assets/js/states/AnimationSprite.js'

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene')
    }

    create(){
    var GameEngine = this;

    GameEngine.cursors = GameEngine.input.keyboard.createCursorKeys()
    GameEngine.keys= GameEngine.input.keyboard.addKeys("W,A,S,D,I");

    Player(this)
    
    AnimationSprite(this)
   
    }

    update(){
        Controlers(this)
    }
}
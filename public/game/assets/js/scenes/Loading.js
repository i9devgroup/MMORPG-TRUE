if(!localStorage.getItem('Account')){
    window.location.href = "/login";
}
var channel = geckos({ port: 6363 })



export default class Loading extends Phaser.Scene {
    constructor(){
        super('Loading')
    }

    preload(){
        var GameEngine = this;
     
        this.load.image("pk", "assets/player/pk.png"); 

        this.load.animation('character01Animations', '/Animation');

         this.load.spritesheet('chara1.png', 'assets/tiles/characters/chara1.png', {
            frameWidth: 26,
            frameHeight: 36,
            }); 

        // this.load.path = 'assets/player/';
        // this.load.multiatlas('megaset', 'AtlasCharacters.json');
        
        // this.load.spritesheet('Maike', 'assets/tiles/characters/chara1.png', {
        //     frameWidth: 26,
        //     frameHeight: 36,
        //     }); 
    
        // for (let index = 1; index < 9; index++) {

        //     this.load.spritesheet('character'+index, 'assets/tiles/characters/chara'+index+'.png', {
        //         frameWidth: 26,
        //         frameHeight: 36,
        //         }); 
           
        // }

        
        this.load.on('complete', function () {
            
            channel.onConnect(function (error) {
                if (error) {
                  console.error(error.message)
                }else{
    
                var infosAccont = JSON.parse(localStorage.getItem('Account'));
                GameEngine.scene.start('SelecaoPersonagem', { channel: channel, infosAccont:infosAccont }) 
    
                }
      })         
                    
        });
       
    // for (let index = 0; index < 8; index++) {
     
    //     this.load.spritesheet("player-"+index+"", "assets/player/characters/characters-"+index+".png", {
    //         frameWidth: 52,
    //         frameHeight: 72,
    //         });  
        
    // }



}

}
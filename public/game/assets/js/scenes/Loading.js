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

        this.load.image("pk", "assets/player/pk.png"); 

        this.load.spritesheet("character01", "assets/player/characters.png", {
                frameWidth: 52,
                frameHeight: 72,
                }); 

        this.load.animation('character01Animations', 'assets/player/animations.json');
       
       



    // for (let index = 0; index < 8; index++) {
     
    //     this.load.spritesheet("player-"+index+"", "assets/player/characters/characters-"+index+".png", {
    //         frameWidth: 52,
    //         frameHeight: 72,
    //         });  
        
    // }



}

}
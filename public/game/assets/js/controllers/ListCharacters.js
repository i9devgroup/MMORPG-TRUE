

export default function ListCharacters(GameEngine){
    GameEngine.selectPlayers = []
    var width = GameEngine.cameras.main.height-125;

    GameEngine.channel.on('ListCharacters', (data) => {
        console.log(data)
       var local = 100;
        data.forEach(element => {


            console.log(element)

            GameEngine.selectPlayers[element.idCharecters] = GameEngine.add.sprite(local, width,element.NameSprite)
            GameEngine.selectPlayers[element.idCharecters].displayWidth = 72
            GameEngine.selectPlayers[element.idCharecters].displayHeight = 92
   
            // GameEngine.selectPlayers[element.idCharecters].anims.animationManager.anims.entries.down.frameRate = 2;
            GameEngine.selectPlayers[element.idCharecters].anims.play(element.NameSprite_+'up', true);
            console.log(GameEngine.selectPlayers[element.idCharecters])

            local = local+200;
          
        });
    })
    
    GameEngine.channel.emit('ListCharacters', GameEngine.infosAccont)
 

    
    
}
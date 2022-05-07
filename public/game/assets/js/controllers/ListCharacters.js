

export default function ListCharacters(GameEngine){
    GameEngine.selectPlayers = []
    var width = GameEngine.cameras.main.height-125;
    GameEngine.channel.on('ListCharactersRec', (data) => {

       var local = 100;
        data.forEach(element => {
            console.log(element)
          console.log(GameEngine)

            var AnimationName = element.NameSkin+'_left';
          
            var containerCharacter = GameEngine.add.container(local, width);
            // containerCharacter.setSize(72,92, false)
            containerCharacter.setSize(62,72, false)
            var character = GameEngine.add.sprite(0.5, 0.5,element.FileName)
            
            character.displayWidth = 62
            character.displayHeight = 72

            GameEngine.physics.world.enable([ containerCharacter ]);

            var color = '#000000'

      
     
            if(element.ClaPlayer == null){

                var cla = GameEngine.add.text(0,-75,'',{
                    fontFamily:'Courier',
                    color:'#91ff00',
                    stroke: '#000000',
                    strokeThickness: 2,
                }).setFontSize(12)
            
                cla.setOrigin(0.5)
                containerCharacter.add(cla)
            
            }else{
                var cla = GameEngine.add.text(0,-75,element.ClaPlayer,{
                    fontFamily:'Courier',
                    color:'#91ff00',
                    stroke: '#000000',
                    strokeThickness: 2,
                }).setFontSize(12)
            
                cla.setOrigin(0.5)
                containerCharacter.add(cla)
            }

            var label = GameEngine.add.text(0,-55,element.NickPlayer,{
                fontFamily:'Courier',
                color:'#FFFFFF',
                stroke: '#000000',
                strokeThickness: 4,
                shadow: {
                    offsetX: 0,
                    offsetY: 0,
                    color: color,
                    blur: 5,
                    stroke: true,
                    fill: true
                },
              }).setFontSize(14);
            
              label.setOrigin(0.5)
              containerCharacter.add(label)


              var level = GameEngine.add.text(-3,-38,'Lvl. '+element.LevelPlayer,{
                fontFamily:'Courier',
                color:'#FFFFFF',
              }).setFontSize(10);
            
              level.setOrigin(0.5)
              containerCharacter.add(level)
            
              
            
            

            containerCharacter.add(character)
   
            character.anims.animationManager.anims.entries[AnimationName].frameRate = 3;
            character.anims.play(AnimationName, true);



 
    
            local = local+200;
          
        });
    })
    
    GameEngine.channel.emit('ListCharacters', GameEngine.infosAccont)
 

    
    
}
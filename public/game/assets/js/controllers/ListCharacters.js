export default function ListCharacters(GameEngine){

    GameEngine.selectPlayers = []
    var width = GameEngine.cameras.main.height-125;
    GameEngine.channel.on('ListCharactersRec', (data) => {

        var local = 40;
         //RETANGULO PERSONAGEM
         var r2 = GameEngine.add.rectangle(-30, -30, 200, 70);
         r2.setOrigin(0);
         r2.setFillStyle('0xDDDDDD', 0.1);
         r2.setAlpha(0.1)
         r2.setInteractive();
     
         const text = GameEngine.add.text(.05, 0, 'NEW CHARACTER', { font: '15px Courier', fill: '#ffff' });
         text.setOrigin(0); 
         // const player = GameEngine.add.sprite(0,0.5, element.FileName);
        
         r2.on('pointerover',function(pointer){
           this.setAlpha(1)
       
         })
     
         r2.on('pointerout',function(pointer){
           this.setAlpha(0.1)
         
         })
 
     var containerCharacter = GameEngine.add.container(30, local);
          containerCharacter.add(r2)
         //  containerCharacter.add(player)
          containerCharacter.add(text)

        r2.on('pointerdown', function (pointer, x, y, event) {

            alert('Create new character')
            event.stopPropagation();
      
        });

       
          local= local+80

        data.forEach(element => {
  

            // var AnimationName = element.NameSkin+'_left';
          
            // var containerCharacter = GameEngine.add.container(local, width);
            // // containerCharacter.setSize(72,92, false)
            // containerCharacter.setSize(62,72, false)
            // var character = GameEngine.add.sprite(0.5, 0.5,element.FileName)
            
            // character.displayWidth = 62
            // character.displayHeight = 72

            // GameEngine.physics.world.enable([ containerCharacter ]);

            // var color = '#000000'

      
     
            // if(element.ClaPlayer == null){

            //     var cla = GameEngine.add.text(0,-75,'',{
            //         fontFamily:'Courier',
            //         color:'#91ff00',
            //         stroke: '#000000',
            //         strokeThickness: 2,
            //     }).setFontSize(12)
            
            //     cla.setOrigin(0.5)
            //     containerCharacter.add(cla)
            
            // }else{
            //     var cla = GameEngine.add.text(0,-75,element.ClaPlayer,{
            //         fontFamily:'Courier',
            //         color:'#91ff00',
            //         stroke: '#000000',
            //         strokeThickness: 2,
            //     }).setFontSize(12)
            
            //     cla.setOrigin(0.5)
            //     containerCharacter.add(cla)
            // }

            // var label = GameEngine.add.text(0,-55,element.NickPlayer,{
            //     fontFamily:'Courier',
            //     color:'#FFFFFF',
            //     stroke: '#000000',
            //     strokeThickness: 4,
            //     shadow: {
            //         offsetX: 0,
            //         offsetY: 0,
            //         color: color,
            //         blur: 5,
            //         stroke: true,
            //         fill: true
            //     },
            //   }).setFontSize(14);
            
            //   label.setOrigin(0.5)
            //   containerCharacter.add(label)


            //   var level = GameEngine.add.text(-3,-38,'Lvl. '+element.LevelPlayer,{
            //     fontFamily:'Courier',
            //     color:'#FFFFFF',
            //   }).setFontSize(10);
            
            //   level.setOrigin(0.5)
            //   containerCharacter.add(level)
            
              
            
            

            // containerCharacter.add(character)
   
            // character.anims.animationManager.anims.entries[AnimationName].frameRate = 3;
            // character.anims.play(AnimationName, true);



 
    
            // local = local+200;


            
 

    var AnimationName = element.NameSkin+'_down';
    //RETANGULO PERSONAGEM
    var r2 = GameEngine.add.rectangle(-30, -30, 200, 70);
    r2.setOrigin(0);
    r2.setFillStyle('0xDDDDDD', 0.1);
    r2.setAlpha(0.1)
    r2.setInteractive();

    const text = GameEngine.add.text(20, -20, '', { font: '15px Courier', fill: '#00ff00' });
          text.setText([
            'Name: ' + element.NickPlayer,
            'Level: ' + element.LevelPlayer,
            'Class: ' + element.ClassName,
          ]);    
    const player = GameEngine.add.sprite(0,0.5, element.FileName);
    player.anims.play(AnimationName, true);
    player.anims.stop();
    player.setScale(1.5)
    player.setOrigin(0.5)
    player.setName('Player123')

    
    r2.on('pointerover',function(pointer){
      this.setAlpha(1)
      player.anims.animationManager.anims.entries[AnimationName].frameRate = 6;
      player.anims.play(AnimationName, true);
    })

    r2.on('pointerout',function(pointer){
      this.setAlpha(0.1)
      player.anims.stop();
    })


    r2.on('pointerdown', function (pointer, x, y, event) {

        GameEngine.scene.start('TylosCity', { CharacterInfo:element }) 
        event.stopPropagation();
  
    });


var containerCharacter = GameEngine.add.container(30, local);
     containerCharacter.add(r2)
     containerCharacter.add(player)
     containerCharacter.add(text)


     
 
     local = local+80;
          
        });



    })

    GameEngine.channel.emit('ListCharacters', GameEngine.infosAccont)
    
    
    
    
}
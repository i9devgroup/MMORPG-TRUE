export default function AnimationSprite(GameEngine, Sprite){



    GameEngine.channel.on('AnimationPersonagens', (data) => {
        console.log('dsa2')

        data.forEach(element => {
            console.log(element)
         var teste = GameEngine.anims.create({
                key: element.type,
                frames: GameEngine.anims.generateFrameNumbers(element.name, { start: element.star, end: element.end }),
                frameRate: 10,
                repeat: -1
            });

            console.log(teste)

         
        });

    })
    GameEngine.channel.emit('AnimationPersonagens', 'dsa')
   
    

    // GameEngine.anims.create({
    //     key: 'up',
    //     frames: GameEngine.anims.generateFrameNumbers(player_id, { start: 9, end: 11 }),
    //     frameRate: 10,
    //     repeat: -1
    // });

    // GameEngine.anims.create({
    //     key: 'down',
    //     frames: GameEngine.anims.generateFrameNumbers(player_id, { start: 0, end: 2 }),
    //     frameRate: 10,
    //     repeat: -1
    // });


    // GameEngine.anims.create({
    //     key: 'left',
    //     frames: GameEngine.anims.generateFrameNumbers(player_id, { start: 3, end: 5 }),
    //     frameRate: 10,
    //     repeat: -1
    // });


    // GameEngine.anims.create({
    //     key: 'right',
    //     frames: GameEngine.anims.generateFrameNumbers(player_id, { start: 8, end:  6}),
    //     frameRate: 10,
    //     repeat: -1
    // });



}
export default function AnimationSprite(GameEngine, Sprite){
    var player_id = Sprite
    
  

    GameEngine.anims.create({
        key: 'up',
        frames: GameEngine.anims.generateFrameNumbers(player_id, { start: 9, end: 11 }),
        frameRate: 10,
        repeat: -1
    });

    GameEngine.anims.create({
        key: 'down',
        frames: GameEngine.anims.generateFrameNumbers(player_id, { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });


    GameEngine.anims.create({
        key: 'left',
        frames: GameEngine.anims.generateFrameNumbers(player_id, { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
    });


    GameEngine.anims.create({
        key: 'right',
        frames: GameEngine.anims.generateFrameNumbers(player_id, { start: 8, end:  6}),
        frameRate: 10,
        repeat: -1
    });



}
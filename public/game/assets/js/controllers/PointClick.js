export default function PointClick(GameEngine,path,distancia){
   

console.log(GameEngine.path.length)
console.log(GameEngine.path)

if(GameEngine.path.length > 0){
    
    GameEngine.tweens.add({
        targets: GameEngine.player,
        x: GameEngine.path[0].x,
        y: GameEngine.path[0].y,
        duration: GameEngine.distancia*3,
        onComplete: repet(GameEngine),
        ease: 'Easing.Linear.None',
        delay: 1
    }); 

    // GameEngine.path.splice(0,1)
}
 
        


   

        
    

}

function repet(GameEngine){

    
    console.log('dsa')
}
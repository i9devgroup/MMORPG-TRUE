export default function MiniMap(GameEngine){

    if(GameEngine.MiniMap){
        GameEngine.MiniMap.borda.destroy()
        GameEngine.MiniMap.mascara.destroy()
        
      
    }else{
        GameEngine.MiniMap = {};
    }
    





    // var screenCenterX = window.innerWidth - 70;
    // var screenCenterY = window.innerHeight - 500;

    var rigthMapX = window.innerWidth - 160;
    var rigthMapY = window.innerHeight - 505;

    // GameEngine.MiniMap.loadingText = GameEngine.add.text(screenCenterX, screenCenterY, 'Loading: 0%').setOrigin(0.5);


    GameEngine.MiniMap.borda = GameEngine.add.graphics();
    GameEngine.MiniMap.borda.lineStyle(10, 0x002244, 1);
    GameEngine.MiniMap.borda.fillStyle(0x002244, 1);
    GameEngine.MiniMap.borda.setDepth(12);
    GameEngine.MiniMap.borda.strokeRoundedRect(rigthMapX, 10, 150, 150, 50);
    GameEngine.MiniMap.borda.setScrollFactor(0).setDepth(99);
  
    GameEngine.MiniMap.mascara = GameEngine.add.graphics();
    GameEngine.MiniMap.mascara.fillStyle(0xffff00, 1);
    GameEngine.MiniMap.mascara.setDepth(12);
    GameEngine.MiniMap.mascara.fillRoundedRect(rigthMapX, 10, 150, 150, 50);
    GameEngine.MiniMap.mascara.visible = false
  
    // FUNCIOANNDO 
    GameEngine.MiniMap.map = GameEngine.cameras.add(rigthMapX, 10, 190, 190, 50).setZoom(0.2).setName('mini').setRoundPixels(true);
    GameEngine.MiniMap.map.setBackgroundColor(0x002244);
    GameEngine.MiniMap.map.ignore(GameEngine.MiniMap['map']);
    
  
  
  
    GameEngine.MiniMap.map.startFollow(GameEngine.player.Container, true);
    GameEngine.MiniMap.map.setFollowOffset(-GameEngine.player.Container.width, -GameEngine.player.Container.height);
  
    const mask = GameEngine.MiniMap.mascara.createGeometryMask();
  
    GameEngine.MiniMap.map.setMask(mask);

  

}



// import Controlers from '/assets/js/controllers/controlers.js'
import PointClick from '/assets/js/controllers/PointClick.js'
import Resize_ui from '/assets/js/controllers/resize_ui.js'
import Player from '/assets/js/states/player.js'
import AnimationSprite from '/assets/js/states/AnimationSprite.js'
import MiniMap from '/assets/js/UI/MiniMap.js'
import GetPlayer from '/assets/js/controllers/GetPlayer.js'

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene')
    }

    create(){
    var GameEngine = this;
    
    this.path = null;
    this.currentTarget = null;

    // Set up a tilemap with at least one layer
    const tilemap = this.add.tilemap("map");
    const tileset = tilemap.addTilesetImage("tiles", "tiles");
    tilemap.createStaticLayer("bg", tileset);
    const wallLayer = tilemap.createStaticLayer("walls", tileset);
  
    // Load the navMesh from the tilemap object layer "navmesh" (created in Tiled). The navMesh was
    // created with 12.5 pixels of space around obstacles.
    const objectLayer = tilemap.getObjectLayer("navmesh");
    const navMesh = this.navMeshPlugin.buildMeshFromTiled(
      "mesh",
      objectLayer,
      12.5
    );
  
    this.navMesh = navMesh;
    // This is how you can get a path within the mesh
    const path = navMesh.findPath({ x: 0, y: 0 }, { x: 300, y: 400 });

    console.log(path);
    // ⮡  path will either be null or an array of Phaser.Geom.Point objects
        
    const style = {
        font: "22px monospace",
        fill: "#ff0044",
        padding: { x: 20, y: 10 },
        backgroundColor: "#fff"
      };
      const uiText = this.add
        .text(10, 5, "Click to find a path!", style)
        .setAlpha(0.9);


 // Drawing path between the center of the map and wherever you click
 const p1 = { x: 375, y: 375 };
 const debugGraphics = this.add.graphics(0, 0).setAlpha(0.5);
 navMesh.enableDebug(debugGraphics);




 this.input.on("pointerdown", pointer => {

    const start = new Phaser.Math.Vector2(GameEngine.player.x, GameEngine.player.y);
    const end = new Phaser.Math.Vector2(pointer.x, pointer.y);

   

        // Find a path to the target
        this.path = this.navMesh.findPath(new Phaser.Math.Vector2(this.x, this.y), end);
    
        // If there is a valid path, grab the first point from the path and set it as the target
//         if (this.path && this.path.length > 0) this.currentTarget = this.path.shift();
//         else this.currentTarget = null;


   navMesh.debugDrawClear();
   var p2 = { x: pointer.x, y: pointer.y };
   GameEngine.path = navMesh.findPath(p1, p2);


  

   GameEngine.distancia = Phaser.Math.Distance.Between(start.x, start.y, end.x, end.y);

PointClick(GameEngine)

   

 
       
//    GameEngine.teste.stop()
        



  

    





  
 });



    // GameEngine.cursors = GameEngine.input.keyboard.createCursorKeys()
    // GameEngine.keys= GameEngine.input.keyboard.addKeys("W,A,S,D,I,SHIFT");

    GetPlayer(this)

    Player(this)
    
    AnimationSprite(this)
    MiniMap(this)
    Resize_ui(this)

    this.events.on("update", this.update, this); 
    }

    update(time, deltaTime){
        // Controlers(this)

        this.player.body.velocity.set(0);

    
       
    }


   

   
}







import Loading from '/assets/js/scenes/Loading.js'
import MainScene from '/assets/js/scenes/MainScene.js'


const config = {
    title: 'MMORPG-TRUE',
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    backgroundColor: '#351f1b',
    type: Phaser.WEBGL,
    parent: 'game-body',
    plugins: {
      scene: [
        {
          key: "NavMeshPlugin", // Key to store the plugin class under in cache
          plugin: PhaserNavMeshPlugin, // Class that constructs plugins
          mapping: "navMeshPlugin", // Property mapping to use for the scene, e.g. this.navMeshPlugin
          start: true,
        },
      ],
    },
    scene: [Loading, MainScene],
    scale: {
      zoom: 1
    },
    render: {
        antialiasGL: false,
        pixelArt: true,
    },
    autoFocus: true,
    audio: {
      disableWebAudio: false,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug:true,
        gravity: { y: 0 },
      }
    },
    callbacks: {
        postBoot: () => {
          window.sizeChanged();
        },
    },
    dom: {
        createContainer: true
    }
  };
  
  



window.addEventListener('load', () => {

  const game = new Phaser.Game(config);

  game.input.activePointer;

  window.sizeChanged = () => {
    if (game.isBooted) {
      setTimeout(() => {
        game.scale.resize(window.innerWidth, window.innerHeight);
  console.log(game)
        game.canvas.setAttribute(
          'style',
          `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
        );

      }, 100);
    }
  };
  
  window.onresize = () => window.sizeChanged();
 
})
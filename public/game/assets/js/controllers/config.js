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
          // window.sizeChanged();
        },
    },
    dom: {
        createContainer: true
    }
  };
  
  

const game = new Phaser.Game(config);
import Loading from '../scenes/Loading.js'
import MainScene from '../scenes/MainScene.js'
import Login from '../scenes/Login.js'


const config = {
    title: 'MMORPG-TRUE',
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    backgroundColor: '#351f1b',
    type: Phaser.AUTO,
    parent: 'game-body',
    scene: [Loading, Login,MainScene],
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

        game.canvas.setAttribute(
          'style',
          `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
        );

      }, 100);
    }
  };
  
  window.onresize = () => window.sizeChanged();
 
})
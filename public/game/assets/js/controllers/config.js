import Loading from '../scenes/loading.js'
import TylosCity from '../scenes/TylosCity.js'
import SelecaoPersonagem from '../scenes/SelecaoPersonagem.js'


const config = {
    title: 'MMORPG-TRUE',
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    backgroundColor: '#351f1b',
    type: Phaser.AUTO,
    parent: 'game-body',
    scene: [Loading, SelecaoPersonagem, TylosCity],
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
        debugShowBody: true,
        debugShowStaticBody: true,
        debugShowVelocity: true,
        debugBodyColor: 0xff00ff,
        debugStaticBodyColor: 0x0000ff,
        debugVelocityColor: 0x00ff00,
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

export default class Loading extends Phaser.Scene {
    constructor(){
        super('Loading')
    }

    preload(){
        var GAME_ENGINE = this;
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);
        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Aguarde...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        var mensagens = [];
    
        mensagens.push('Seja bem vindo ao mundo de MMORPG')
        mensagens.push('Pressione a tecla "I" para abrir o inventario.')
        mensagens.push('Estamos arrumando tudo para você!')
        mensagens.push('Aqui você encontra diversão de verdade!')
    
        this.load.on('start', function (value) {
          teste();
      });
    
      var timer;
    
      function teste(){
        
        var nr_msg = randomInt(0, mensagens.length)
        assetText.setText(mensagens[nr_msg]);
      timer = setTimeout(() => {
          teste()
        }, 5000);
      }
    
      function randomInt (low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    }
    
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
        

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            clearTimeout(timer)
            assetText.destroy();
            
            GAME_ENGINE.scene.start('MainScene')   
        });


this.load.spritesheet("player-0", "assets/player/characters/characters-0.png", {
frameWidth: 52,
frameHeight: 72,
});

this.load.spritesheet("player-1", "assets/player/characters/characters-2.png", {
    frameWidth: 52,
    frameHeight: 72,
});

this.load.spritesheet("player-2", "assets/player/characters/characters-3.png", {
    frameWidth: 52,
    frameHeight: 72,
});

this.load.spritesheet("player-3", "assets/player/characters/characters-4.png", {
    frameWidth: 52,
    frameHeight: 72,
});


this.load.spritesheet("player-4", "assets/player/characters/characters-5.png", {
    frameWidth: 52,
    frameHeight: 72,
});

this.load.spritesheet("player-5", "assets/player/characters/characters-6.png", {
    frameWidth: 52,
    frameHeight: 72,
});

this.load.spritesheet("player-6", "assets/player/characters/characters-7.png", {
    frameWidth: 52,
    frameHeight: 72,
});

this.load.spritesheet("player-7", "assets/player/characters/characters-2.png", {
    frameWidth: 52,
    frameHeight: 72,
});





}

}
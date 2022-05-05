import MiniMap from '../UI/MiniMap.js'

export default function Resize(GameEngine){
    window.sizeChanged = () => {

        
        setTimeout(() => {
         
         MiniMap(GameEngine)

        GameEngine.scale.resize(window.innerWidth, window.innerHeight);
  
     
        document.querySelector("canvas").setAttribute(
          'style',
          `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
        );

        }, 100);
    
    };
    
    window.onresize = () => window.sizeChanged();

}



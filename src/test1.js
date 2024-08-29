import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import { image1 ,image2} from './images/images';

function Test() {
  return (
    <div className="Test">
      <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={-0.5} factor={1} speed={0.25} sticky={{start:-0.8,end:-0.8}}>
          <img src={image2} alt="Image 1" />
        </ParallaxLayer>
        <ParallaxLayer offset={-2} factor={0.5} speed={-0.5}>
          <img src={image1} alt="Image 1" />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={-0.1}>
          <img src={image1} alt="Image 1" />
        </ParallaxLayer>
        <ParallaxLayer offset={-0.3} speed={0.3}>
          <img src={image2} alt="Image 1" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <img src={image1} alt="Image 1" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img src={image1} alt="Image 1" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <img src={image1} alt="Image 1" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <img src={image2} alt="Image 1" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <img src={image1} alt="Image 1" />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default Test;
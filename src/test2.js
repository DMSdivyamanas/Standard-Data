import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import { image1 ,image2} from './images/images';
import { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
function Test2() {
    const parallaxRef = useRef(null);
    const [opacity, setOpacity] = useState(1);
    const [scale, setScale] = useState(1);
    const [top, setTop] = useState(-300);
    const [scroll, setScroll] = useState(0);
    const [textSpring, setTextSpring] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(50%)',
        config: { duration: 500, tension: 170, friction: 26 }
      }));
      
    const [image1Spring, setImage1Spring] = useSpring(() => ({
        marginLeft: '0%',
        transform: 'scale(1)',
        left:0,
        config: { duration: 800, tension: 10, friction:17 }
      }));
      
    useEffect(() => {
      const handleScroll = () => {
        if (parallaxRef.current) {
          const currentScroll = parallaxRef.current.current; // Access the current scroll position
          setScroll(currentScroll);
          const newOpacity = Math.max(1 - currentScroll / 5000, 0); // Adjust divisor to control opacity change
          setOpacity(newOpacity);
          console.log('danish',currentScroll);
          const newScale = Math.min(1 + currentScroll / 15000, 2); // Adjust divisor to control scale change
          setScale(newScale);
          const newTop = Math.max(-300+6*currentScroll/10, -300); // Adjust divisor to control top position change
          if(newTop<=0) setTop(newTop);
        //   console.log('danish',newTop);
        if (currentScroll > 750) {
            setImage1Spring({
                top: '30%',
              marginLeft: '10%',
              transform: 'scale(0.4)',
              left:-400,
            });
          } else {
            setImage1Spring({
              top: '0%',
              transform: 'scale(1)',
              left:0,
            });
          }
          if (currentScroll > 750) {
            setTextSpring({
              opacity: 1,
              transform: 'translateY(0%)',
            });
          } else {
            setTextSpring({
              opacity: 0,
              transform: 'translateY(50%)',
            });
          }
        }
      };
      const parallaxContainer = parallaxRef.current.container.current;
      parallaxContainer.addEventListener('scroll', handleScroll);
  
      return () => parallaxContainer.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallaxRef} pages={3}>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: 'black'}} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'black' }} />

        <ParallaxLayer offset={0} speed={2} style={{ pointerEvents: 'none',marginLeft:2}} sticky={{start:0,end:3}}>
          <img src={`${image2}`} style={{ width: '100%',position:'absolute',bottom:0,scale:scale}}/>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} style={{ pointerEvents: 'none', backgroundColor: 'black', overflow: 'hidden',width:'100%',}} sticky={{ start: 1.2, end: 3 }}>
          <animated.img src={`${image1}`} style={{ width: '100%', position: 'absolute', top:scroll<750?top:image1Spring.top, transform: image1Spring.transform,left:image1Spring.left}} />
          <animated.div style={{ opacity: textSpring.opacity, transform: textSpring.transform, position: 'absolute', right: '10%',top: '25%',width:'30%'}}>
             <h2 style={{ fontSize: 40, color: 'white' }}>Animated Text</h2>
             <h2 style={{ fontSize: 20, color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</h2>
          </animated.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} className='w-full items-center'>
            <h2 style={{fontSize:100,color:'white'}} className='font-bold text-center mt-[10%]'>Standard Data</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Test2;
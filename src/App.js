import logo from './logo.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';
import { image1,image2 } from './images/images';
import Test from './test1';
import Test2 from './test2';
function App() {
  return (
    <div className='bg-black h-screen w-screen'>
        <MyComponent/>
    </div>
  );
}

export default App;


function MyComponent() {
    const ref = useRef();

    return (
      <div>
        {/* <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={-0.1}
          speed={1}
          factor={0}
          style={{
            backgroundImage: `url(${image2})`,
          }}
        >
            <img src={image2} alt="Image 1" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={-1}
          speed={1}
          factor={0}
          style={{
            backgroundImage: `url(${image1})`,
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={-1}
          speed={1}
          factor={0}
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={image1} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
          className='w-full'
        >
          <h2 className='text-white bg-red text-center self-center font-extrabold tracking-tighter justify-center text-7xl'>Standard Data</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 className='text-white'>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax> */}
        {/* <Test/> */}
        <Test2/>
      </div>
    );
  }

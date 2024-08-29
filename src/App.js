
import './App.css';
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

    return (
      <div>
        <Test2/>
      </div>
    );
  }

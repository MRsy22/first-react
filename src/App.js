
import './App.css';
import Description from './component/Description';
import Image from './component/Image';
import Name from './component/Name';
import Price from './component/Price';

function App() {
  return (
    <div className='app' >
  <Name />
 <Price/>
   <Image/>
  <Description />
    </div>
  );
}

export default App;

// import './App.css';
import {Outlet} from 'react-router-dom'
import Navk from './Navk';
function App() {
  return (
    <div className="App">
      <Navk/>
      <Outlet/>
    </div>
  );
}

export default App;

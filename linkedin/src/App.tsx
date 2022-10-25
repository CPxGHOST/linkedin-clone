import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Login } from './pages/login/login';
import { RouterConfig } from './navigation/routerConfig';

function App() {
  return (
    <div className="App">
      <RouterConfig/>
    </div>
  );
}

export default App;

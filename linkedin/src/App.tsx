import './App.css';
import { Login } from './pages/login/login';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route path='/login' />
    </BrowserRouter>
     <h2>Lets build the linkedin clone!!</h2>
    </div>
  );
}

export default App;

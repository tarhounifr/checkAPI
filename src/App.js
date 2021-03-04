
import { Route, Switch } from 'react-router-dom';

import NavBar from './Components/Nav/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';

import './App.css';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
       <Route exact path ='/' component={Home}/>
       <Route path='/About' component={About}/>
     </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About';
import Videos from './Components/Videos'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path ="/" component={Home} /> 
        <Route path="/videos/:videoId" component={Videos} />
        <Route path="/about" component={About} />
       </Switch>
    </div>
  );
}

export default App;

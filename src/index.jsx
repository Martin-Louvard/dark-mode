import React from 'react';
import ReactDOM from 'react-dom'
import './main.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import VisualContext from './VisualContext';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import DarkModeButton from './components/DarkModeButton'
const App = () => {
  const [currentVisual, setCurrentVisual] = React.useState(localStorage.getItem('mode') ? { name: localStorage.getItem('mode') } : { name: "Light" });

  React.useEffect(() => {
    localStorage.setItem('mode', currentVisual.name);
  },
    [currentVisual.name]);

  return (
    <main className={currentVisual.name}>

      <Router>
        <VisualContext.Provider value={{
          value: currentVisual,
          switch: () => {
            setCurrentVisual((currentVisual.name === "Light") ? { name: "Dark" } : { name: "Light" });
          }
        }}>
          {<DarkModeButton />}
        </VisualContext.Provider>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>

  );
};


ReactDOM.render(<App />, document.getElementById('root'));
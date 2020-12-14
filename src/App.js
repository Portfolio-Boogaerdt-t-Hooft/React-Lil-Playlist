import './App.css';
import './components/components.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Homepage from './Homepage'
import About from './About'
import Nav from './Nav'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/" >
          <Homepage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;

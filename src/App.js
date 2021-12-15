import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';
import { Component } from 'react';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/" component={Shows} /> */}
      </Switch>
    </Router>
  );
}

export default App;

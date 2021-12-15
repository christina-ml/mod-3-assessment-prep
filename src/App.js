import './App.css';
import { 
  BrowserRouter as Router, 
  Link, 
  Route,
  Switch 
} from 'react-router-dom';
import Home from './components/Home';
import Shows from './components/Shows';

function App() {
  return (
    <Router>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shows">Shows</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shows" component={Shows} />
      </Switch>
    </Router>
  );
}

export default App;

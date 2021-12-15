import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';
import Home from './components/Home';
import Shows from './components/Shows';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shows" component={Shows} />
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';
import { Component } from 'react';

class Home extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <h1>Home Page</h1>
    )
  }
}

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

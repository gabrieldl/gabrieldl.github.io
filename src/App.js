import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header';
import Projects from './components/Projects'

function App() {
  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/:page' component={Header} />
          <Route exact path='/' component={Header} />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

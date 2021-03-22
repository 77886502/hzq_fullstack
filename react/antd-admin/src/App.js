import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Admin from './admin';
import Home from './pages/Home';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Admin>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Admin>
    </Router>
  )
}

export default App;

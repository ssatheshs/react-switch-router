import './App.css';
import { Route,Switch } from 'react-router-dom'
import Login from './components/account/Welcome'
import User  from './components/users/User'

function App() {
  return (
    <div className="App"> 
      <Switch>        
        <Route path="/" component={Login} exact />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { UserProvider } from './context/User';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar/>
          <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/logout">
          <Logout />
        </Route>
        </Switch>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;

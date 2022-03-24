import { UserProvider } from './context/User';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import GamesContainer from './components/Game/GamesContainer';
import GameCard from './components/Game/GameCard';
import CommentForm from './components/Comment/CommentForm';
import GameForm from './components/Game/GameForm';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
         
          <Switch>

          <Route path="/comment">
            <CommentForm />
          </Route>

          <Route path="/game/new">
            <GameForm />
          </Route>
        

          <Route path="/games">
            <GamesContainer />
          </Route>


          <Route path="/games/:id">
            <GameCard />
          </Route>

          
        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/logout">
          <Logout />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

         <Route path="*">
          <h3>404 Page Not Found</h3>
        </Route> 
       
        </Switch>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;

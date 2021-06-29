import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CallPage from './Components/Callpage';
import Homepage from './Components/Homepage';
import NoMatch from './Components/NoMatch';
import './App.scss';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <CallPage />

        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>

    </Router>
    
  );
}

export default App;

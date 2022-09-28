import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/Home/Home';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import LoginCyberBugs from './page/LoginCyberBugs/LoginCyberBugs';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' Component={Home} />
        <Route exact path='/' Component={Home} />
        
        <UserLoginTemplate exact path="/login" Component={LoginCyberBugs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

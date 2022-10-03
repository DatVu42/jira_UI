import { Router, Switch } from 'react-router-dom';
import Home from './page/Home/Home';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import LoginCyberBugs from './page/LoginCyberBugs/LoginCyberBugs';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { createBrowserHistory } from "history";
import { CyberbugsTemplate } from './templates/HomeTemplate/CyberbugsTemplate';
import indexCyberbugs from './page/Home/indexCyberbugs';
import CreateProject from './page/CreateProject/CreateProject';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path='/home' Component={Home} />
        <HomeTemplate exact path='/' Component={Home} />
        
        <UserLoginTemplate exact path="/login" Component={LoginCyberBugs} />
        <CyberbugsTemplate exact path='/cyberbugs' Component={indexCyberbugs} />
        <CyberbugsTemplate exact path='/createproject' Component={CreateProject} />
      </Switch>
    </Router>
  );
}

export default App;

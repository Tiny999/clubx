import { Switch, Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ SignUp }/>
      <Route path="/login" exact component={ Login }/>
      <Route path="/step1" exact component={ PersonalInfo }/>
    </Switch>
  );
}

export default App;
